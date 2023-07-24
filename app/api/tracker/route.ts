import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

// export async function POST(req:Request){
//     const {idChallenge, idDay, idActivity, idUser} = req.body;
//     return NextResponse.json({message:'ok'})
// }

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