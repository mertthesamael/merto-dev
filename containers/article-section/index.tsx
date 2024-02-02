import { Articles } from '@prisma/client';
import Link from 'next/link';
import React, { FC } from 'react'

type ArticleSectionProps = {
    articleID: string
}
const getArticle = async (articleID: string) => {
    const endpoint = process.env.URL_ROOT ?? "http://localhost:3000";
    try {
        const request = await fetch(endpoint + "/api/articles/get-single", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                articleID: articleID
            })
        });

        return request.json();
    } catch (err) {
        return err;
    }
};
const ArticleSection: FC<ArticleSectionProps> = async ({ articleID }) => {
    const targetArticle: Articles = await getArticle(articleID)

    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-screen-lg mx-8 flex flex-col gap-10 py-4">
                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl font-poppins font-bold text-black dark:text-white'>{targetArticle.title}</h2>
                    <div className='flex flex-col-reverse gap-6 md:flex-row justify-between'>
                        <div className=' flex items-start gap-4 flex-wrap'>
                            {targetArticle.category.split(',').map((el, _i) => (
                                <p key={_i} className="text-sm h-max font-bold font-urbanist w-max bg-blue-800/60 dark:bg-slate-400/30 px-2 py-1 rounded-sm">
                                    {el}
                                </p>
                            ))}
                        </div>
                        <div>
                            <Link href={targetArticle.link} target='__blank' className=' transition-all text-black font-poppins font-bold dark:text-white hover:underline underline-offset-2 p-4 dark:hover:bg-zinc-900 rounded-xl  hover:bg-slate-300'>
                                See on Medium
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ArticleSection;