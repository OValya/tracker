import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(req:Request){
    const activities = await prisma.activity.findMany();
    return NextResponse.json({result:activities});
}