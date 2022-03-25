import type { NextPage } from 'next'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { RequestDemo } from '.'
import Link from 'next/link'
import HeadCommon from './components/HeadCommon'

const Home: NextPage = () => {
  return <>
    <Head>
      <title>ExQL: Demo</title>
      <HeadCommon />
    </Head>
    <div className="flex flex-col w-full h-screen font-sansv2">
      <div className="w-full mx-auto px-8 mt-8 select-none z-10">
        <div className="flex items-center">
          <Link href="/"><a><img src="/logo.svg" className="w-32 md:w-40" /></a></Link>
          <div className="flex-1"></div>
          <RequestDemo />
        </div>
      </div>
      <div className="relative flex-1 px-8 pt-8 pb-4 w-full h-full mx-auto ">
        <img src="/gradient-hero-left.png" className="fixed top-[-100px] left-[-150px] md:top-[-50px] md:left-[-300px]" />
        <img src="/gradient-hero-right.png" className="fixed top-[30px] right-[-150px] md:top-[100px] md:right-[-300px] max-h-screen" />
        <iframe
          src="https://www.loom.com/embed/c4f474d6b31f40ea80e95c3df8f41f93"
          frameBorder="0"
          allowFullScreen={true}
          className="relative w-full h-full z-10"
        />
      </div>
      <div className="flex flex-0 pb-8 z-10">
        <div className="flex-1" />
        <Link href="/">
          <a>
            <div className="flex px-3 py-2 h-10 md:h-12 items-center text-sm md:text-md font-medium rounded-lg select-none text-white bg-main2-500 hover:bg-main2-600 active:bg-main2-700 cursor-pointer mx-auto">
              <ArrowLeftIcon className="w-4 h-4" />
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
