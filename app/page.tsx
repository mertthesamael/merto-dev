import InfoSection from '@/containers/info-section'
import ProjectsSection from '@/containers/projects-section'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex my-20 flex-col items-center gap-14">
      <InfoSection />
      <ProjectsSection />
    </main>
  )
}
