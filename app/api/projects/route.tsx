import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
    
    try{
        const projects = await prisma.projects.findMany();
            return NextResponse.json({projects})
    }catch(err){
        console.log(err)
        return NextResponse.json({ error: 'Internal Server Error', msg:err }, { status: 500 })
    }finally{
        await prisma.$disconnect();
    }
}