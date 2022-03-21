import type { NextPage } from 'next'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { RequestDemo } from '.'
import Link from 'next/link'

const Home: NextPage = () => {
  return <>
    <Head><title>ExQL - Demo</title></Head>
    <div className="flex flex-col bg-gradient-to-t from-main-200 w-full h-screen">
      <div className="w-full mx-auto px-8 mt-8 select-none">
        <div className="flex items-center">
          <div className="text-3xl md:text-5xl text-main-600 font-medium"><Link href="/"><a>ExQL</a></Link></div>
          <div className="flex-1"></div>
          <RequestDemo />
        </div>
      </div>

      <iframe
        src="https://www.loom.com/embed/c4f474d6b31f40ea80e95c3df8f41f93"
        frameBorder="0"
        allowFullScreen={true}
        className="flex-1 px-8 pt-8 pb-4 w-full h-full mx-auto"
      />
      <div className="flex flex-0 pb-8">
        <div className="flex-1" />
        <Link href="/">
          <a>
            <div className="flex px-4 py-2 h-10 md:h-12 items-center text-md md:text-lg font-medium rounded-lg select-none text-white bg-tmred-dark hover:bg-red-900 active:bg-tmred-og cursor-pointer mx-auto">
              <ArrowLeftIcon className="w-5 h-5" />
              <span className="ml-1">Back to Home</span>
            </div>
          </a>
        </Link>
        <div className="flex-1" />
      </div>
    </div>
  </>
}


export default Home
