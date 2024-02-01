import { ArticleType } from '@/types/ArticleType';
import axios from 'axios';
import Link from 'next/link';
import React, { FC } from 'react'

type ArticleSectionProps = {
    articleID: string
}
const getArticle = async (articleID: string) => {
    const endpoint = "http://localhost:3000";
    try {
        const data = await axios.post(endpoint + "/api/articles/get-single", {
            articleID: articleID
        });
        return data.data;
    } catch (err) {
        return err;
    }
};
const ArticleSection: FC<ArticleSectionProps> = async ({ articleID }) => {
    const targetArticle: ArticleType = await getArticle(articleID)

    return (
        <section className="w-full flex justify-center">
            <div className="w-full max-w-screen-lg mx-8 flex flex-col gap-10 py-4">
                <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl font-poppins font-bold text-black dark:text-white'>{targetArticle.title}</h2>
                    <div className='flex flex-col-reverse gap-6 md:flex-row justify-between'>
                        <div className=' flex items-start gap-4 flex-wrap'>
                            {targetArticle.category.map((el, _i) => (
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
                <div className='w-full h-full flex flex-col blog-area gap-6' dangerouslySetInnerHTML={{ __html: targetArticle.content }} />
            </div>
        </section>
    )
}

export default ArticleSection;