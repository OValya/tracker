
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: Request) {
    const { name, password } = await req.json();
    const user = await prisma.user.findUnique({where: {name, password},})
    console.log('user', user)
    if (user) {
        const res = new NextResponse(
            JSON.stringify({ message: "Successfully logged in", result: true })
        );
        const key: string = 'user_id'
        res.cookies.set(key, user.id.toString());
        return res;
    }
    return NextResponse.json({ message: "Failed to login", result: false });
}