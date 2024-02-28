import { prisma }  from "@/libs/db";

export const dynamic = "force-dynamic"
export async function GET() {
    try {
        const articles = await prisma.articles.findMany()
        
        return new Response(JSON.stringify(articles.reverse()), {
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
