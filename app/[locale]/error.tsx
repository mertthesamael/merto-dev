'use client' // Error components must be Client Components
 
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <main className="flex my-10 md:my-20 flex-col items-center gap-10 pt-[--header-height]">
      <h2 className='text-xl md:text-2xl text-black dark:text-gray-400  md:leading-10'>Opps, something went wrong ⚠️</h2>
      <span className='text-xl md:text-xl text-black dark:text-gray-400  md:leading-10'>{error.message}</span>
    </main>
  )
}