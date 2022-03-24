import type { NextPage } from 'next'
import { FC, SVGProps, useState } from 'react'
import { OfficeBuildingIcon, PlayIcon, PuzzleIcon, UserGroupIcon, XIcon } from '@heroicons/react/solid'
import { motion } from "framer-motion"
import Head from 'next/head'

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return <>
    <Head><title>ExQL: Spreadsheets for Data Warehouses</title></Head>
    <div className="bg-gradient-to-t from-main-200">
      <!--<div className="bg-tmred-dark px-4 text-md md:text-lg text-white py-2 text-center">
        🚫🚀 Unlike everyone else, we have not yet raised any funding. Please <a className="underline" href="mailto:exql@googlegroups.com">email us</a> if you want in!
      </div>-->
      <div className="mx-auto px-8 mt-4 md:mt-10 max-w-7xl select-none">
        <div className="flex items-center">
          <div className="text-3xl md:text-5xl text-main-600 font-medium">ExQL</div>
          <div className="flex-1"></div>
          <RequestDemo />
        </div>
        <div className="mt-12 md:mt-20 mx-auto text-4xl md:text-5xl items-center text-center max-w-3xl md:leading-normal">
          <span className="text-tmblue-dark">Manipulate</span> your data warehouse <span className="text-tmblue-dark">with Excel.</span> Bye SQL!
          <motion.div className="ml-1 inline-block wave-emoji" animate={{ rotate: 20 }} transition={{ repeat: Infinity, duration: 0.5, repeatType: 'reverse' }}>👋</motion.div>
        </div>
        <div className="mt-6 md:mt-8 text-md md:text-xl px-4 md:px-16 mx-auto items-center text-center max-w-3xl leading-normal">
          Through an Excel-like interface, ExQL enables business analysts to explore, query data, and build SQL data pipelines on top of their data warehouses — without actually writing a line of SQL
        </div>
        <div className="relative bg-black rounded">
          <motion.img
            className="mt-6 md:mt-16 border-2 border-main-300 rounded mx-auto items-center shadow-xl"
            src="/Collaborative.png"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ margin: "-50%" }}
            transition={{ duration: 0.3, type: "tween" }}
          />
          <div className="absolute flex items-center top-0 w-full h-full" onClick={() => setIsModalOpen(true)}>
            <motion.div
              className="mx-auto flex items-center bg-main-400 active:bg-main-700 drop-shadow-2xl rounded-full p-2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.3 }}
            >
              <PlayIcon className="text-white w-16 md:w-24 inline" />
              <span className="text-white inline text-xl md:text-3xl font-medium mr-5">Watch demo</span>
            </motion.div>
          </div>
        </div>
        <div className="h-4 md:h-16"></div>
      </div>
    </div>
    <div className="bg-main-200 pt-16">
      <FunctionalFact side="left" title="Analyze your big data in an instant ✨" image="/sheet1.png">
        <div>Open, explore, and analyze <span className="font-medium text-main-700">terabytes</span> of data from your data warehouse in seconds, through an Excel-like interface.</div>
        <div className="mt-2">Each formula, filter, and pivot table that you do will automatically be converted into SQL queries in the back end.</div>
      </FunctionalFact>
      <div className="h-16 md:h-16"></div>
      <FunctionalFact side="right" title="Spot fixes for your data, just like Excel 🔧" image="/sheet2.png">
        <div>Quickly apply spot fixes and overrides to specific data points to accommodate exceptions in your business logic.</div>
        <div className="mt-2">Overrides can go through an approval process — making sure all changes are safe and reversible.</div>
      </FunctionalFact>
      <div className="h-16 md:h-16"></div>
      <FunctionalFact side="left" title="Edit your DBT data pipelines without SQL 🤯" image="/sheet3.png">
        <div>Achieve much faster turnaround times on pipeline change requests with the ability to safely modify the SQL queries in your DBT data pipelines.</div>
      </FunctionalFact>
      <div className="h-16 md:h-16"></div>
    </div>
    <div className="bg-gradient-to-b from-amber-100 to-white">
      <div className="pt-16 md:pt-36 mx-auto max-w-7xl px-8">
        <div className="text-4xl md:text-5xl text-center mb-8 md:mb-16 text-amber-900">ExQL makes it Easy</div>
        <div className="flex flex-col md:flex-row mb-8 md:mb-48 text-amber-800">
          <NonFunctionalFact index={0} icon={OfficeBuildingIcon} title="Built for the Enterprise">
            ExQL was built from the ground up with Enterprise users in mind. Compliance certificates coming soon!
          </NonFunctionalFact>
          <NonFunctionalFact index={1} icon={PuzzleIcon} title="Open and Integrated">
            ExQL is fully integrated with DBT and the Modern Data Stack, and is designed to work with all the modern data warehouses.
          </NonFunctionalFact>
          <NonFunctionalFact index={2} icon={UserGroupIcon} title="Hands-on Customer Service">
            Our hands-on enterprise support team will assist you through the whole data lifecycle — from ideation to implementation and support.
          </NonFunctionalFact>
        </div>
      </div>
      <div className="px-8 mx-auto max-w-7xl">
        <div className="py-8 md:py-16 rounded select-none bg-main-400 shadow-xl">
          <div className="flex flex-col md:flex-row mx-auto max-w-6xl px-8 items-center">
            <div className="flex flex-1 text-4xl text-white items-center mb-6 md:mb-0">
              Ready to ExQL?
            </div>
            <div className="flex items-center">
              <RequestDemo color={600} />
            </div>
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
    {isModalOpen &&
      <LoomModal close={() => setIsModalOpen(false)} />
    }
  </>
}

export const RequestDemo: FC<{ color?: number }> = (props) => {
  const color = props.color ?? 400
  return <div className={`flex w-36 md:w-48 h-10 md:h-12 items-center text-md md:text-lg font-medium rounded-lg select-none text-white bg-main-${color} hover:bg-main-${color + 100} active:bg-main-${color + 200} cursor-pointer`}>
    <span className="mx-auto">Request a demo</span>
  </div>
}

const LoomModal: FC<{ close: () => void, className?: string }> = (props) => {
  return <motion.div 
    className={`fixed inset-0 bg-glassblack px-2 pt-20 pb-2 md:p-32 ${props.className}`} 
    onClick={props.close}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <XIcon className="fixed w-16 h-16 top-2 right-2 drop-shadow-xl text-white hover:text-main-300 active:text-main-600" onClick={props.close} />
    <iframe
      src="https://www.loom.com/embed/c4f474d6b31f40ea80e95c3df8f41f93"
      frameBorder="0"
      allowFullScreen={true}
      className="w-full h-full"
    >
    </iframe>
  </motion.div>
}

const FunctionalFact: FC<{ side: "left" | "right", title: string, image: string }> = (props) => {
  return <motion.div
    className={`flex ${props.side === "left" ? "flex-col" : "flex-col-reverse"} md:flex-row max-w-7xl px-4 md:px-8 md:pb-16 mx-auto items-center`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.5, type: "tween" }}
  >
    {props.side === "right" &&
      <img className="md:flex-1 rounded shadow-xl min-w-0 max-w-full self-start" src={props.image} />}
    <div className={`flex-0 md:w-1/3 text-gray-800 ${props.side === "left" ? "md:mr-8" : "md:ml-8"} mb-4`}>
      <div className="text-4xl mb-4">{props.title}</div>
      {props.children}
    </div>
    {props.side === "left" &&
      <img className="md:flex-1 rounded shadow-xl min-w-0 max-w-full self-start" src={props.image} />}
  </motion.div>
}

const NonFunctionalFact: FC<{ title: string, index: number, icon: (props: SVGProps<SVGSVGElement>) => JSX.Element }> = (props) => {
  return <motion.div className="flex-1 text-center px-4 pb-12 md:pb-0"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30%" }}
    transition={{ duration: 0.3, type: "tween", delay: 0.1 * props.index }}
  >
    <props.icon className="h-24 mx-auto text-tmred-dark" />
    <div className="text-2xl font-medium">{props.title}</div>
    <div className="text-lg mt-4">{props.children}</div>
  </motion.div>
}

export default Home
