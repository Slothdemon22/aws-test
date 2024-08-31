import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set("Access-Control-Allow-Origin", "https://main.d1qe4cj838e38d.amplifyapp.com");
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    
    // Handle preflight requests
    if (req.method === "OPTIONS") {
        return new NextResponse(null, { status: 204 });
    }

    return res;
}

export const config = {
    matcher: "/api/hello",
}
