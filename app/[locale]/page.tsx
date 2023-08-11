import InfoSection from '@/containers/info-section'
import ProjectsSection from '@/containers/projects-section'
import Image from 'next/image'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="flex my-10 md:my-20 flex-col items-center gap-14">
      <InfoSection />
      <ProjectsSection title={t('projects')} />
    </main>
  )
}
