import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req:Request){
    const challenges = await prisma.challenge.findMany();
    return NextResponse.json({result:challenges})
}