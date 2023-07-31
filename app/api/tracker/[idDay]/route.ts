import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(req:Request, {params}:{params:{idDay:string}}){
    const idDay = +params.idDay;
    const tracker = await prisma.tracker.findMany({where: {
            date: idDay
        },
        include:{
            user:true,
            activity:true
        }
    });
    return NextResponse.json({result: tracker});
}
