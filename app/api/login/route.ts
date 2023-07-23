
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: Request) {
    const { name, password } = await req.json();
    const user = await prisma.user.findUnique({where: {name, password},})
    if (user) {
        const res = new NextResponse(
            JSON.stringify({ message: "Successfully logged in", result: true })
        );
        res.cookies.set('user_id', user.id.toString());
        return res;
    }
    return NextResponse.json({ message: "Failed to login", result: false });
}