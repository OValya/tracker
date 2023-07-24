import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

type ChallengeType = {
    id: number,
    title: string,
    start: Date,
    finish: Date
}

export async function GET(req:Request, {params}:{params:{id:string}}) {
    const id = +params.id;
    console.log('api id', id)
    const challenge:ChallengeType|null = await prisma.challenge.findUnique({where: {id},})
    return NextResponse.json({messge:'ok', result: challenge})
    // if (challenge) {
    //     const res = new NextResponse(
    //         JSON.stringify({ message: "Successfully find challenge", result: challenge })
    //     );
    //     //res.cookies.set('user_id', user.id.toString());
    //     return res;
    // }
    // return NextResponse.json({ message: "Failed to login", result: false });
}