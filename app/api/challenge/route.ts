import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";
import {cookies} from "next/headers";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";

export async function GET(req:Request){
    try {
        const challenges = await prisma.challenge.findMany();
        return NextResponse.json({result:challenges})
    }catch (e){

    }
}

export async function POST(req:Request){
    const {value} = cookies().get('user_id') as RequestCookie;
    const {title, start, finish, userId} = await req.json();
    const newChallenge = await prisma.challenge.create({data:{
            title, start, finish, userId:+value
        }})
    return NextResponse.json({message:'New challenge was created!', result: newChallenge})
}