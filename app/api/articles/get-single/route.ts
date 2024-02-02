import { prisma } from "@/libs/db";
import { NextRequest } from "next/server";
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
    const { articleID } = await request.json()
    try {
        const targetArticle = await prisma.articles.findUnique({
            where:{
                id:articleID
            }
        })
        return new Response(JSON.stringify(targetArticle), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: error.message ?? error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }

}
