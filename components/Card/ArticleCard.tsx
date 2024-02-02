import { Articles } from '@prisma/client'
import Link from 'next/link'
import React, { FC } from 'react'
import { MediumIcon } from '../Icons/Medium'

type ArticleCardProps = {
    article: Articles
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className='w-full  transition-all duration-500 bg-slate-100 dark:bg-black dark:hover:bg-zinc-900 rounded-xl  hover:bg-slate-300 py-4 flex gap-6 items-start px-4 font-poppins'>
            <MediumIcon />
            <div className='flex flex-col max-w-[85%] gap-2 h-full justify-between'>
                <Link href={article.link} target='_blank' className='font-bold hover:underline underline-offset-2 text-black dark:text-white'>{article.title}</Link>
                <div className='flex items-center flex-wrap gap-2'>
                    {article.category.split(',').map((el, _i) => (
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