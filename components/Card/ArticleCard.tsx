import { Articles } from '@prisma/client'
import Link from 'next/link'
import React, { FC } from 'react'
import { MediumIcon } from '../Icons/Medium'
import Badge from '../Badge'

type ArticleCardProps = {
    article: Articles
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    return (
        <div className='w-full  transition-all duration-500 dark:hover:bg-zinc-900 rounded-xl  hover:bg-[#e6e6e6] py-4 flex gap-6 items-start px-4 font-poppins'>
            <MediumIcon />
            <div className='flex flex-col max-w-[85%] gap-2 h-full justify-between'>
                <Link href={article.link} target='_blank' className='font-bold line-clamp-2 hover:underline underline-offset-2 text-black dark:text-white'>{article.title}</Link>
                <div className='flex items-center flex-wrap gap-2'>
                    {article.category.split(',').map((el, _i) => (
                        <Badge key={_i} text={el}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;