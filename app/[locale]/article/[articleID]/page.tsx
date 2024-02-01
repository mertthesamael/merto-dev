import ArticleSection from '@/containers/article-section';
import DonateSection from '@/containers/donate-section';
import { getTranslator } from 'next-intl/server';
import React, { FC, Suspense } from 'react'

type ArticlePageProps = {
    params: any,
}

const ArticlePage: FC<ArticlePageProps> = async ({ params: { locale, articleID }, }) => {
  const t = await getTranslator(locale, "Index");
   
    return (
        <main className="flex my-10 md:my-20 flex-col items-center gap-[--header-height] pt-[--header-height]">
            <Suspense fallback={<div className="animate-pulse w-[80%] h-[52rem]  rounded-lg bg-black/10 dark:bg-white/10" />}>
                <ArticleSection articleID={articleID} />
            </Suspense>
          <DonateSection text={t("donate")}/>
        </main>
    )
}

export default ArticlePage;