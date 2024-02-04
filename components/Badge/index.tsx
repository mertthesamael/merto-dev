import React, { FC } from 'react'

type BadgeProps = {
    text: String
}

const Badge: FC<BadgeProps> = ({ text }) => {
    return (
        <p className="capitalize text-xs md:text-sm h-max font-bold font-urbanist w-max bg-blue-800/60 dark:bg-slate-400/30 px-2 py-1 rounded-sm">
            {text}
        </p>
    )
}

export default Badge;