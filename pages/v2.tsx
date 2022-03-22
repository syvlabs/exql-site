import type { NextPage } from 'next'
import { FC, useState } from 'react'
import { PlayIcon, XIcon } from '@heroicons/react/solid'
import { motion } from "framer-motion"
import Head from 'next/head'

const V2: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return <div className="bg-white font-sansv2 text-blackish tracking-tighter">
    <Head><title>ExQL: Spreadsheets for Data Warehouses</title></Head>
    <div>
      <div className="mx-auto px-8 mt-6 md:mt-10 max-w-7xl select-none">
        <div className="flex items-center">
          <div className="text-3xl md:text-5xl text-main2-500 font-medium">ExQL</div>
          <div className="flex-1"></div>
          <RequestDemo />
        </div>
        <div className="mt-12 md:mt-20 mx-auto text-4xl md:text-5xl items-center text-center font-semibold max-w-3xl md:leading-normal">
          <span className="text-main2-500">Manipulate</span> your data warehouse <span className="text-main2-500">with Excel.</span> Bye SQL!
          <motion.div className="ml-1 inline-block wave-emoji" animate={{ rotate: 20 }} transition={{ repeat: Infinity, duration: 0.5, repeatType: 'reverse' }}>👋</motion.div>
        </div>
        <div className="mt-6 md:mt-8 text-md md:text-xl px-4 md:px-16 mx-auto items-center text-center max-w-3xl tracking-tight leading-loose">
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
              className="mx-auto flex items-center bg-blackish active:bg-main2-500 drop-shadow-2xl rounded-full p-2"
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
    <div className="pt-12 md:pt-32">
      <FunctionalFact side="left" title="Analyze your big data in an instant ✨" image="/sheet1.png">
        <div>Open, explore, and analyze <span className="font-semibold text-main2-600">terabytes</span> of data from your data warehouse in seconds, through an Excel-like interface.</div>
        <div className="mt-2">Each formula, filter, and pivot table that you do will automatically be converted into SQL queries in the back end.</div>
      </FunctionalFact>
      <div className="h-16 md:h-32"></div>
      <FunctionalFact side="right" title="Spot fixes for your data, just like Excel 🔧" image="/sheet2.png">
        <div>Quickly apply spot fixes and overrides to specific data points to accommodate exceptions in your business logic.</div>
        <div className="mt-2">Overrides can go through an approval process — making sure all changes are safe and reversible.</div>
      </FunctionalFact>
      <div className="h-16 md:h-32"></div>
      <FunctionalFact side="left" title="Edit your DBT data pipelines without SQL 🤯" image="/sheet3.png">
        <div>Achieve much faster turnaround times on pipeline change requests with the ability to safely modify the SQL queries in your DBT data pipelines.</div>
      </FunctionalFact>
      <div className="h-16 md:h-32"></div>
    </div>
    <div className="bg-neutral-50">
      <div className="pt-16 md:pt-24 mx-auto max-w-7xl px-8">
        <div className="text-4xl md:text-5xl text-left mb-8 md:mb-20 font-medium tracking-tight">
          <div className="text-main2-500 mb-2">ExQL</div><div>makes it easy</div>
        </div>
        <div className="flex flex-col md:flex-row md:pb-24">
          <NonFunctionalFact index={0} icon="/icons/icon2.svg" title="Built for the Enterprise">
            ExQL was built from the ground up with Enterprise users in mind. Compliance certificates coming soon!
          </NonFunctionalFact>
          <NonFunctionalFact index={1} icon="/icons/icon1.svg" title="Open and Integrated">
            ExQL is fully integrated with DBT and the Modern Data Stack, and is designed to work with all the modern data warehouses.
          </NonFunctionalFact>
          <NonFunctionalFact index={2} icon="/icons/icon3.svg" title="Hands-on Customer Service">
            Our hands-on enterprise support team will assist you through the whole data lifecycle — from ideation to implementation and support.
          </NonFunctionalFact>
        </div>
      </div>
    </div>
    <div className="pt-12 pb-16 md:py-16">
      <div className="px-8 pb-8 mx-auto max-w-7xl">
        <div className="py-8 md:py-12 rounded-xl select-none bg-main2-500 shadow-xl">
          <div className="flex flex-col md:flex-row mx-auto max-w-6xl px-8 items-center">
            <div className="flex flex-1 text-3xl md:text-4xl text-white items-center font-semibold mb-4 md:mb-0">
              Ready for ExQL?
            </div>
            <div className="flex items-center">
              <RequestDemo inverted={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto px-8 max-w-7xl select-none">
        <div className="mt-8">
          <div className="text-3xl text-main-900 font-medium mb-1">ExQL</div>
          <div className="text-sm text-main-900">2022 ExQL (© coming soon)</div>
        </div>
      </div>
    </div>
    {isModalOpen &&
      <LoomModal close={() => setIsModalOpen(false)} />
    }
  </div>
}

export const RequestDemo: FC<{ inverted?: boolean }> = (props) => {
  const textNormalColor = props.inverted ? "text-main2-500" : "text-white"
  const textHoverColor = props.inverted ? "text-white" : "text-white"
  const bgNormalColor = props.inverted ? "bg-white" : "bg-main2-500"
  const bgHoverColor = props.inverted ? "bg-main2-700" : "bg-main2-600"
  const bgActiveColor = props.inverted ? "bg-main2-900" : "bg-main2-700"
  return <div className={`flex w-36 md:w-40 h-10 md:h-12 items-center text-md md:text-md font-medium rounded select-none cursor-pointer tracking-normal ${textNormalColor} hover:${textHoverColor} ${bgNormalColor} hover:${bgHoverColor} active:${bgActiveColor}`}>
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
    <XIcon className="fixed w-16 h-16 top-2 right-2 drop-shadow-xl text-white hover:text-main2-200 active:text-main2-500" onClick={props.close} />
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
    className={`flex ${props.side === "left" ? "flex-col" : "flex-col-reverse"} md:flex-row max-w-7xl px-8 md:px-8 md:pb-16 mx-auto items-center`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.5, type: "tween" }}
  >
    {props.side === "right" &&
      <img className="md:flex-1 rounded shadow-xl min-w-0 max-w-full self-start" src={props.image} />}
    <div className={`flex-0 md:w-1/3 text-blackish ${props.side === "left" ? "md:mr-16" : "md:ml-16"} mb-4`}>
      <div className="text-3xl md:text-4xl mb-4 font-medium leading-snug">{props.title}</div>
      <div className="text-md md:text-xl opacity-70 tracking-tight">{props.children}</div>
    </div>
    {props.side === "left" &&
      <img className="md:flex-1 rounded shadow-xl min-w-0 max-w-full self-start" src={props.image} />}
  </motion.div>
}

const NonFunctionalFact: FC<{ title: string, index: number, icon: string }> = (props) => {
  return <motion.div className="flex-1 pb-12 md:pb-0 mr-24"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.3, type: "tween", delay: 0.1 * props.index }}
  >
    <img src={props.icon} className="h-12 mb-4" />
    <div className="text-2xl font-medium">{props.title}</div>
    <div className="text-md md:text-xl mt-4 opacity-70 tracking-tight">{props.children}</div>
  </motion.div>
}

export default V2
