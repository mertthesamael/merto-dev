import InfoSection from '@/containers/info-section'
import ProjectsSection from '@/containers/projects-section'

import {getTranslator} from 'next-intl/server';


export default async function Home({params: {locale}}:{params:any}) {
  const t = await getTranslator(locale, 'Index');

  return (
    <main className="flex my-10 md:my-20 flex-col items-center gap-14">
      <InfoSection welcome={t('welcome')} info={t.raw('info')} />
      <ProjectsSection title={t('projects')} />
    </main>
  )
}
