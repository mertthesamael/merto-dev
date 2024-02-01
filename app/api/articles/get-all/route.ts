export const dynamic = "force-dynamic"
export async function GET() {
    try {
        const articles = await fetch("https://v1.nocodeapi.com/merto/medium/ovXkyrxIBtWcjGkC", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const res = await articles.json()
        return new Response(JSON.stringify(res), {
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
