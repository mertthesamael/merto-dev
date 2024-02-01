import { ArticleType } from '@/types/ArticleType'
import Link from 'next/link'
import React, { FC } from 'react'

type ArticleCardProps = {
    article: ArticleType
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className='w-full  transition-all duration-500 bg-slate-100 dark:bg-black dark:hover:bg-zinc-900 rounded-xl  hover:bg-slate-300 py-4 flex gap-2 flex-col px-4 font-poppins'>
            <div className='flex flex-col gap-2 h-full justify-between'>
                <Link href={`/article/${article.published}`} className='font-bold hover:underline underline-offset-2 text-black dark:text-white'>{article.title}</Link>
                <div className='flex items-center flex-wrap gap-2'>
                    {article.category.map((el, _i) => (
                        <p key={_i} className="text-sm h-max font-bold font-urbanist w-max bg-blue-800/60 dark:bg-slate-400/30 px-2 py-1 rounded-sm">
                            {el}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;