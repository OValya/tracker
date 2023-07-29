// import { sql } from "@vercel/postgres";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    const { name, password, color, email } = await req.json();
    try {
        const result = await prisma.user.create({
            data: {
                name,
                password,
                color,
                email
            },
        });
        console.log('result', result)
        const res = NextResponse.json({ message: "Added account", result: result });
        res.cookies.set('user_id', result.id.toString());
        return res
    }
    catch (e) {
        return NextResponse.json({
            message: "Failed to add account",
            result: false,
        });
    }
    //
    // try {
    //
    //    // await sql`INSERT INTO users(email, password) VALUES(${email},${password});`;
    //     return NextResponse.json({ message: "Added account", result: true });
    // } catch (e) {
    //     return NextResponse.json({
    //         message: "Failed to add account",
    //         result: false,
    //     });
    // }
}