import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>
          Onboarding App
        </h1>
        <a className='block' href='/onboarding'>
          /onboarding
        </a>
        <a className='block' href='/admin'>
          /admin
        </a>
        <a className='block' href='/data'>
          /data
        </a>
      </div>
    </main>
  )
}
