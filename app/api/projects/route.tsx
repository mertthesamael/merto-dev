import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient()

export async function GET() {
    
    try{
        const projects = await prisma.projects.findMany();
        console.log(projects + ' as')
            return NextResponse.json({projects})
    }catch(err){
        console.log(err)
        return NextResponse.json({ error: 'Internal Server Error', msg:err }, { status: 500 })
    }finally{
        await prisma.$disconnect();
    }
}