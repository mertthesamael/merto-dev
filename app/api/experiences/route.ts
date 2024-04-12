import { prisma }  from "@/libs/db";

export const dynamic = "force-dynamic"
export async function GET() {
    try {
        const experiences = await prisma.experience.findMany({
            orderBy:{
                id:'desc'
            }
        })
        
        return new Response(JSON.stringify({data:experiences}), {
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
