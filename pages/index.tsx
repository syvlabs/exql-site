import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return <div className="bg-gradient-to-t from-emerald-100">
    <div className="bg-red-500 px-4 text-lg text-white py-2 text-center">
    🚫🚀 Unlike everyone else, we have NOT raised any funding, please <a className="underline" href="mailto:exql@googlegroups.com">email us</a> if you want in!
    </div>
    <div className="mx-auto px-4 mt-10 max-w-7xl select-none">
      <div className="flex items-center">
        <div className="text-5xl text-emerald-900 font-medium">ExQL</div>
        <div className="flex-1"></div>
        <div className="text-lg font-medium rounded-lg py-2 px-4 select-none text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 cursor-pointer">
          Request a demo
        </div>
      </div>
      <div className="mt-20 mx-auto text-5xl items-center text-center max-w-3xl leading-normal">
        Manipulate your data warehouse with Excel. Bye SQL! 👋
      </div>
      <div className="mt-8 text-lg px-16 mx-auto items-center text-center max-w-3xl leading-normal">
        Through an Excel-like interface, ExQL enables business analysts to explore, query data, and build SQL data pipelines on top of their data warehouses — without actually writing a line of SQL
      </div>
      {/* TODO use next/image */}
      <img className="mt-16 border-2 border-green-500 rounded-2xl mx-auto items-center shadow-xl" src="/Collaborative.png" />
      <div className="py-8">
        Heheheh hi ryan
      </div>
    </div>
  </div>
}

export default Home
