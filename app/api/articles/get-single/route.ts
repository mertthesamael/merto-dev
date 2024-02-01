import { ArticleType } from "@/types/ArticleType";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { articleID } = await request.json()
    try {
        const articles = await fetch("https://v1.nocodeapi.com/merto/medium/ovXkyrxIBtWcjGkC", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const res = await articles.json()
        const targetArticle = res.find((el:ArticleType) => el.published === Number(articleID))
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
