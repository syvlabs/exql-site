import type { NextPage } from 'next'
import { FC, SVGProps } from 'react'
import { OfficeBuildingIcon, PuzzleIcon, UserGroupIcon } from '@heroicons/react/solid'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return <>
    <div className="bg-gradient-to-t from-main-200">
      <div className="bg-tmred-dark px-4 text-md md:text-lg text-white py-2 text-center">
        🚫🚀 Unlike everyone else, we have NOT raised any funding, please <a className="underline" href="mailto:exql@googlegroups.com">email us</a> if you want in!
      </div>
      <div className="mx-auto px-4 mt-4 md:mt-10 max-w-7xl select-none">
        <div className="flex items-center">
          <div className="text-3xl md:text-5xl text-main-900 font-medium">ExQL</div>
          <div className="flex-1"></div>
          <RequestDemo />
        </div>
        <div className="mt-12 md:mt-20 mx-auto text-4xl md:text-5xl items-center text-center max-w-3xl md:leading-normal">
          Manipulate your data warehouse with Excel. Bye SQL! 👋
        </div>
        <div className="mt-6 md:mt-8 text-md md:text-lg px-4 md:px-16 mx-auto items-center text-center max-w-3xl leading-normal">
          Through an Excel-like interface, ExQL enables business analysts to explore, query data, and build SQL data pipelines on top of their data warehouses — without actually writing a line of SQL
        </div>
        <img className="mt-6 md:mt-16 border-2 border-main-300 rounded-2xl mx-auto items-center shadow-xl" src="/Collaborative.png" />
        <div className="h-4 md:h-16"></div>
      </div>
    </div>
    <div className="bg-main-200 pt-16">
      <FunctionalFact side="left" />
      <div className="h-16 md:h-32"></div>
      <FunctionalFact side="right" />
      <div className="h-16 md:h-32"></div>
      <FunctionalFact side="left" />
      <div className="h-16 md:h-32"></div>
    </div>
    <div className="bg-gradient-to-b from-amber-100 to-white px-4">
      <div className="pt-16 md:pt-36 mx-auto max-w-7xl">
        <div className="text-4xl md:text-5xl text-center mb-16 md:mb-24 text-amber-900">Your non-functional requirements hehe</div>
        <div className="flex flex-col md:flex-row mb-8 md:mb-48 text-amber-800">
          <NonFunctionalFact icon={OfficeBuildingIcon} title="Built for the Enterprise" />
          <NonFunctionalFact icon={PuzzleIcon} title="Open and Integrated" />
          <NonFunctionalFact icon={UserGroupIcon} title="Amazing Customer Service" />
        </div>
      </div>
      <div className="py-8 md:py-16 mx-auto max-w-7xl select-none rounded-2xl bg-gray-900 shadow-xl">
        <div className="flex flex-col md:flex-row mx-auto max-w-6xl px-8 items-center">
          <div className="flex flex-1 text-4xl text-white items-center mb-6 md:mb-0">
            Ready to ExQL?
          </div>
          <div className="flex items-center">
            <RequestDemo />
          </div>
        </div>
      </div>
    </div>
    <div className="pt-4 pb-8 md:py-16 md:pb-24 bg-gradient-to-b">
      <div className="flex mx-auto px-4 max-w-7xl select-none">
        <div className="mt-8">
          <div className="text-3xl text-main-900 font-medium mb-1">ExQL</div>
          <div className="text-sm text-main-900">2022 ExQL (© coming soon)</div>
        </div>
      </div>
    </div>
  </>
}

const RequestDemo: FC = () =>
  <div className="flex w-36 md:w-48 h-10 md:h-12 items-center text-md md:text-lg font-medium rounded-lg select-none text-white bg-main-400 hover:bg-main-500 active:bg-main-600 cursor-pointer">
    <span className="mx-auto">Request a demo</span>
  </div>

const FunctionalFact: FC<{ side: "left" | "right" }> = (props) => {
  return <motion.div
    className={`flex ${props.side === "left" ? "flex-col" : "flex-col-reverse"} md:flex-row max-w-7xl px-4 md:pb-16 mx-auto items-center`}
    initial={{ opacity: 0, y: -100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50%" }}
    transition={{ duration: 0.4, type: "tween" }}
  >
    {props.side === "right" &&
      <img className="md:flex-1 border-2 border-gray-200 rounded-2xl shadow-xl min-w-0 max-w-full self-start" src="/sheet1.png" />}
    <div className={`flex-0 md:w-1/3 text-gray-800 ${props.side === "left" ? "md:mr-16" : "md:ml-16"} mb-4`}>
      <div className="text-4xl mb-4">Explore your big data in an instant ✨</div>
      <div>Open and explore <span className="font-medium text-main-700">terabytes</span> of data from your data warehouse in seconds, through an Excel-like interface</div>
    </div>
    {props.side === "left" &&
      <img className="md:flex-1 border-2 border-gray-200 rounded-2xl shadow-xl min-w-0 max-w-full self-start" src="/sheet1.png" />}
  </motion.div>
}

const NonFunctionalFact: FC<{ title: string, icon: (props: SVGProps<SVGSVGElement>) => JSX.Element }> = (props) => {
  return <div className="flex-1 text-center px-4 pb-12 md:pb-0">
    <props.icon className="h-24 mx-auto text-tmred-dark" />
    <div className="text-2xl font-medium">{props.title}</div>
    <div className="text-lg mt-4">We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. We will lorem ipsum your dolor. </div>
  </div>
}

export default Home
