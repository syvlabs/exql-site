import type { NextPage } from 'next'
import { FC, ReactElement, useEffect, useState } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { MailIcon } from '@heroicons/react/outline'
import { motion } from "framer-motion"
import Head from 'next/head'
import HeadCommon from './components/HeadCommon'

const V2: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = isModalOpen ? "hidden" : "auto"
  }, [isModalOpen])

  return <div className="bg-white font-sansv2 text-blackish tracking-tighter">
    <Head>
      <title>ExQL: Spreadsheets for Data Warehouses</title>
      <HeadCommon />
    </Head>
    <div>
      <div className="mx-auto px-8 mt-6 md:mt-10 max-w-7xl select-none">
        <div className="flex items-center">
          <img src="/logo.svg" className="w-32 md:w-40" />
          <div className="flex-1"></div>
          <div className="flex-0 flex flex-col-reverse md:flex-row items-center">
            <div className="flex w-32 md:w-36 h-10 md:h-12 items-center justify-center rounded text-white bg-blackish hover:bg-main2-800 active:bg-main2-700 md:bg-white md:hover:bg-white md:active:bg-white md:text-blackish md:hover:underline md:active:text-main2-500 mt-2 md:mt-0 md:mr-5 cursor-pointer">
              <a className="flex items-center font-medium tracking-normal text-sm md:text-md" href="mailto:hello@exql.app">
                <MailIcon className="w-5 h-5 mr-1 hidden md:block" />
                hello@exql.app
              </a>
            </div>
            <RequestDemo />
          </div>
        </div>
        <div className="mt-12 md:mt-20 mx-auto text-4xl md:text-5xl items-center text-center font-semibold max-w-3xl md:leading-normal">
          <span className="text-main2-500">AI-powered data pulls</span>. <br />No <span className="text-main2-500">searching</span>, no <span className="text-main2-500">SQL</span>, no <span className="text-main2-500">stress</span>!
        </div>
        <div className="relative mt-6 md:mt-8 text-md md:text-xl px-4 md:px-16 mx-auto items-center text-center max-w-5xl tracking-tight leading-loose z-10">
          Our <b>Generative AI</b>-powered Virtual Analyst explores your <b>data warehouse</b> and <b>securely pulls</b> the data you need. <b>Verify the data</b> using familiar <b>spreadsheet formulas</b>.
        </div>
      </div>
    </div>

    <div className="h-20 md:h-24"></div>

    <VideoFunctionalFact
      side="left"
      title={<>Describe your <span className="font-semibold text-main2-500">desired dataset</span>, and we&apos;ll put it on a <span className="font-semibold text-main2-500">spreadsheet</span>.</>}
      embedUrl="https://player.vimeo.com/video/839734699?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
    >
      ExQL searches through your data warehouse tables to <b>find the right fields</b>, <b>join different tables</b>, and present your requested data on a <b>spreadsheet or pivot table</b>.
    </VideoFunctionalFact>

    <div className="h-20 md:h-24"></div>

    <VideoFunctionalFact
      side="right"
      title={<><span className="font-semibold text-main2-500">Verify data extracts</span> using familiar <span className="font-semibold text-main2-500">spreadsheet formulas</span>.</>}
      embedUrl="https://player.vimeo.com/video/839734602?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
    >
      All data transforms, joins, and calculations are done using the <b>Excel or Google Sheets formulas</b> you know and love. <b>Edit anything</b> on the sheet, and we <b>convert it to SQL</b> for you behind the scenes.
    </VideoFunctionalFact>

    <div className="h-20 md:h-24"></div>

    <VideoFunctionalFact
      side="left"
      title={<><span className="font-semibold text-main2-500">Create dashboards instantly</span>, with charts that <span className="font-semibold text-main2-500">update with your data</span>.</>}
      embedUrl="https://player.vimeo.com/video/839733703?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
    >
      Ask the Virtual Analyst to <b>turn your dataset into a chart</b>, or build it yourself. All charts <b>update as your data warehouse does</b> in our spreadsheet-based dashboard builder.
    </VideoFunctionalFact>

    <div className="h-20 md:h-24"></div>

    <VideoFunctionalFact
      side="right"
      title={<><span className="font-semibold text-main2-500">Save any edits</span> or newly <span className="font-semibold text-main2-500">created tables</span> into your <span className="font-semibold text-main2-500">data warehouse</span>.</>}
      embedUrl="https://player.vimeo.com/video/839725031?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
    >
      <b>Spotted an error</b> in the data source? <b>Edit the cell directly</b> and create an <b>updated view</b> in the data warehouse. Generated a <b>new, important table</b>? <b>Upload it</b> with one click.
      <div className="mt-4">Our <b>data approval workflows</b> ensure that all edits align with your org&apos;s compliance policies.</div>
    </VideoFunctionalFact>

    <div className="bg-neutral-50">
      <div className="pt-16 md:pt-24 mx-auto max-w-7xl px-8">
        <div className="text-4xl md:text-5xl text-left mb-8 md:mb-20 font-medium tracking-tight">
          <div className="text-main2-500 mb-2">ExQL</div><div>makes Generative AI enterprise-ready.</div>
        </div>
        <div className="flex flex-col md:flex-row md:pb-24">
          <NonFunctionalFact index={0} icon="/icons/icon2.svg" title="Built for the Enterprise">
            ExQL optimizes analytics workflows for enterprise users.
          </NonFunctionalFact>
          <NonFunctionalFact index={1} icon="/icons/icon1.svg" title="Open and Integrated">
            ExQL is integrated with the Modern Data Stack and works with all modern data warehouses.
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
              Ready to experience Generative AI-powered analysis?</div>
            <div className="flex items-center">
              <RequestDemo inverted={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto px-8 max-w-7xl select-none">
        <div className="mt-8">
          <div className="text-xl text-main-900 font-medium mb-1">Questions? Email us at <a href="mailto:hello@exql.app" className="text-main2-500 hover:underline active:text-main2-900">hello@exql.app</a>.</div>
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
  return <a href="https://calendly.com/exql/30min" target="_blank" rel="noreferrer">
    <div className={`flex w-32 md:w-36 h-10 md:h-12 items-center text-sm md:text-md font-medium rounded select-none cursor-pointer tracking-normal ${textNormalColor} hover:${textHoverColor} ${bgNormalColor} hover:${bgHoverColor} active:${bgActiveColor}`}>
      <span className="mx-auto">Request a demo</span>
    </div>
  </a>
}

const LoomModal: FC<{ close: () => void, className?: string }> = (props) => {
  return <motion.div
    className={`fixed inset-0 bg-glassblack px-2 pt-20 pb-2 md:p-32 z-40 ${props.className}`}
    onClick={props.close}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <XIcon className="fixed w-16 h-16 top-2 right-2 drop-shadow-xl text-white hover:text-main2-200 active:text-main2-500" onClick={props.close} />
    <iframe
      src="https://www.loom.com/embed/49c928bc507d4aea94f9df872e2c6b9e"
      frameBorder="0"
      allowFullScreen={true}
      className="w-full h-full"
    >
    </iframe>
  </motion.div>
}

const FunctionalFact: FC<{ side: "left" | "right", title: string, image: string, gradientImg?: string }> = (props) => {
  return <motion.div
    className={`flex flex-col ${props.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} max-w-7xl px-8 md:px-8 md:pb-16 mx-auto items-center`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.5, type: "tween" }}
  >
    <div className={`flex-0 md:w-1/3 text-blackish ${props.side === "left" ? "md:mr-16" : "md:ml-16"} mb-4 z-10`}>
      <div className="text-3xl md:text-4xl mb-4 font-medium leading-snug">{props.title}</div>
      <div className="text-md md:text-xl text-blackishlight tracking-tight">{props.children}</div>
    </div>
    <FFImage image={props.image} side={props.side} gradientImg={props.gradientImg} />
  </motion.div>
}

const VideoFunctionalFact: FC<{ side: "left" | "right", title: ReactElement, embedUrl: string }> = (props) => {
  return <motion.div
    className={`flex flex-col ${props.side === "left" ? "md:flex-row" : "md:flex-row-reverse"} max-w-7xl px-8 md:px-8 md:pb-16 mx-auto items-center`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 0.5, type: "tween" }}
  >
    <div className={`flex-0 md:w-1/3 text-blackish ${props.side === "left" ? "md:mr-16" : "md:ml-16"} mb-4 z-10`}>
      <div className="text-3xl md:text-4xl mb-4 font-medium leading-snug">{props.title}</div>
      <div className="text-md md:text-xl text-blackishlight tracking-tight">{props.children}</div>
    </div>
    <iframe
      className="block md:flex-1 rounded w-full min-w-0 max-w-full self-start z-10 aspect-video video-clip"
      src={props.embedUrl} title="Demo video" frameBorder="0" allow="autoplay"></iframe>
  </motion.div>
}

const FFImage: FC<{ image: string, side: "left" | "right", gradientImg?: string }> = (props) => {
  return <div className="relative">
    {props.gradientImg && props.side === "left" &&
      <img src={props.gradientImg} className="absolute top-[-20px] right-[-150px] md:top-[200px] md:right-[-200px]" />
    }
    <img className="relative md:flex-1 rounded min-w-0 max-w-full self-start z-10" src={props.image} />
  </div>
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
