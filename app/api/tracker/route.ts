import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {RequestCookie} from "next/dist/compiled/@edge-runtime/cookies";


export async function GET(req:Request){
    const tracker = await prisma.tracker.findMany({where: {
            date: '2023-07-21T00:00:00.000Z'
        },
        include:{
            user:true,
            activity:true
        }
    });
    return NextResponse.json({result: tracker});
}

export async function POST(req:Request){
    const {value} = cookies().get('user_id') as RequestCookie;
   // console.log('id', id)
    const {idActivity, idChallenge} = await req.json();
    const addedActivity = await prisma.tracker.create({data:{
            actId: idActivity,
            challengeId: +idChallenge,
            userId: +value,
            date: '2023-07-21T00:00:00.000Z'
        }})
    return NextResponse.json({result:addedActivity})

}