// import { sql } from "@vercel/postgres";
// import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    const { email, password, color } = await req.json();
    try {

       // await sql`INSERT INTO users(email, password) VALUES(${email},${password});`;
        return NextResponse.json({ message: "Added account", result: true });
    } catch (e) {
        return NextResponse.json({
            message: "Failed to add account",
            result: false,
        });
    }
}