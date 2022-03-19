import type { NextPage } from 'next'
import { FC } from 'react'
import { OfficeBuildingIcon, PuzzleIcon, UserGroupIcon } from '@heroicons/react/solid'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return <>
    <div className="bg-gradient-to-t from-emerald-200">
      <div className="bg-red-500 px-4 text-lg text-white py-2 text-center">
        🚫🚀 Unlike everyone else, we have NOT raised any funding, please <a className="underline" href="mailto:exql@googlegroups.com">email us</a> if you want in!
      </div>
      <div className="mx-auto px-4 mt-10 max-w-7xl select-none">
        <div className="flex items-center">
          <div className="text-5xl text-emerald-900 font-medium">ExQL</div>
          <div className="flex-1"></div>
          <RequestDemo />
        </div>
        <div className="mt-20 mx-auto text-5xl items-center text-center max-w-3xl leading-normal">
          Manipulate your data warehouse with Excel. Bye SQL! 👋
        </div>
        <div className="mt-8 text-lg px-16 mx-auto items-center text-center max-w-3xl leading-normal">
          Through an Excel-like interface, ExQL enables business analysts to explore, query data, and build SQL data pipelines on top of their data warehouses — without actually writing a line of SQL
        </div>
        <img className="mt-16 border-2 border-green-500 rounded-2xl mx-auto items-center shadow-xl" src="/Collaborative.png" />
        <div className="h-16"></div>
      </div>
    </div>
    <div className="bg-emerald-200 pt-16">
      <FunctionalFact side="left" />
      <div className="h-32"></div>
      <FunctionalFact side="right" />
      <div className="h-32"></div>
      <FunctionalFact side="left" />
      <div className="h-32"></div>
    </div>
    <div className="bg-gradient-to-b from-amber-100 to-white px-4">
      <div className="pt-36 mx-auto max-w-7xl">
        <div className="text-5xl text-center mb-24 text-amber-900">Your non-functional requirements hehe</div>
        <div className="flex mb-48 text-amber-800">
          <div className="flex-1 text-center px-4">
            <OfficeBuildingIcon className="h-24 mx-auto text-amber-600" />
            <div className="text-2xl font-medium">Built for the Enterprise</div>
            <div className="text-lg mt-4">We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. </div>
          </div>
          <div className="flex-1 text-center px-4">
            <PuzzleIcon className="h-24 mx-auto text-amber-600" />
            <div className="text-2xl font-medium">Open and Integrated</div>
            <div className="text-lg mt-4">We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. </div>
          </div>
          <div className="flex-1 text-center px-4">
            <UserGroupIcon className="h-24 mx-auto text-amber-600" />
            <div className="text-2xl font-medium">Amazing Customer Service</div>
            <div className="text-lg mt-4">We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. </div>
          </div>
        </div>
      </div>

      <div className="py-16 mx-auto max-w-7xl select-none rounded-2xl bg-gray-900 shadow-xl">
        <div className="flex mx-auto max-w-6xl px-8">
          <div className="flex flex-1 text-4xl text-white items-center">
            Ready to ExQL?
          </div>
          <div className="flex items-center">
            <RequestDemo />
          </div>
        </div>
      </div>
    </div>
    <div className="pt-16 pb-24 bg-gradient-to-b">
      <div className="flex mx-auto px-4 max-w-7xl select-none">
        <div className="mt-8">
          <div className="text-3xl text-emerald-900 font-medium mb-1">ExQL</div>
          <div className="text-sm text-emerald-900">2022 ExQL (© coming soon)</div>
        </div>
      </div>
    </div>
  </>
}

const RequestDemo: FC = () =>
  <div className="flex w-48 h-12 items-center text-lg font-medium rounded-lg select-none text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 cursor-pointer">
    <span className="mx-auto">Request a demo</span>
  </div>

const FunctionalFact: FC<{ side: "left" | "right" }> = (props) => {
  return <motion.div
    className={`flex ${props.side === "left" ? "flex-col" : "flex-col-reverse"} md:flex-row max-w-7xl px-4 md:pb-16 mx-auto items-center`}
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30%" }}
    transition={{ duration: 0.4, type: "tween" }}
  >
    {props.side === "right" &&
      <img className="flex-1 border-2 border-gray-200 rounded-2xl shadow-xl min-w-0 max-w-full h-auto" src="/sheet1.png" />}
    <div className={`flex-0 md:w-1/3 text-gray-800 ${props.side === "left" ? "md:mr-16" : "md:ml-16"} mb-4`}>
      <div className="text-4xl mb-4">Explore your big data in an instant ✨</div>
      <div>Open and explore <span className="font-medium text-emerald-700">terabytes</span> of data from your data warehouse in seconds, through an Excel-like interface</div>
    </div>
    {props.side === "left" &&
      <img className="flex-1 border-2 border-gray-200 rounded-2xl shadow-xl min-w-0 max-w-full h-auto" src="/sheet1.png" />}
  </motion.div>
}

export default Home
