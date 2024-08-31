import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {

    const res = NextResponse.next();
    res.headers.set("Access-Control-Allow-Origin", "https://main.d1qe4cj838e38d.amplifyapp.com");
    return res;



}
export const config = {
    matcher: "/api/hello",
}