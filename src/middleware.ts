import { NextRequest, NextResponse } from "next/server";
import { jwtVerify,SignJWT } from "jose";
import bcrypt from "bcryptjs";
export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set("Access-Control-Allow-Origin", "https://main.d1qe4cj838e38d.amplifyapp.com");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return new NextResponse(null, { status: 204 });
    }

    const token = req.cookies.get("token");

    if (pathname.startsWith("/api/details") || pathname.startsWith("/api/appointments")) {
        if (!token) {
            return NextResponse.json({ message: "User Unauthorized", success: false, status: 401 });
        }
        return res;
    } else if (pathname.startsWith("/api/getAppointments")||pathname.startsWith("/api/updateStatus")) {
        if (!token) {
            return NextResponse.json({ message: "Unauthorized No token Provided", success: false, status: 401 });
        }

        try {
           // console.log("hello")
           // console.log(process.env.JWT_SECRET_KEY);
            const { payload } = await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_SECRET_KEY!));
            console.log(payload)
            if (payload?.email !== "www.basilslothdemon@gmail.com") {
               
                return NextResponse.json({ message: "Admin Can Access Only", success: false, status: 401 });
            }
           
           // console.log("Payload:", payload);
            // Continue processing if needed
        } catch (error) {
            //console.error("Token verification error:", error);
            return NextResponse.json({ message: "UnExpected Error", success: false, status: 401 });
        }

        return res;
    }

    return res;
}

export const config = {
    matcher: ["/api/details/:path*", "/api/appointments/:path*", "/api/getAppointments/:path*","/api/updateStatus/:path*"],
};
