"use client"
import Image from 'next/image'
import Navbar from './ui/page/navbar'
import Leftside from './ui/page/leftside'
import RightSide from './ui/page/rightside'
import {motion} from 'framer-motion'
import Banner from './ui/page/banner'
import About from './ui/page/about'
import Experience from './ui/page/experience'
import Projects from './ui/page/projects'
import Archive from './ui/page/archive'
import Contact from './ui/page/contact'
import Footer from './ui/page/footer'

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div 
          className='hidden xl:inline-flex w-32 h-full 
                    fixed left-0 bottom-0'
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5}}        
          >
          <Leftside />
        </motion.div>
        <div 
          className='h-[88vh] w-full mx-auto p-4'
        >
          <Banner />
          <About />
          <Experience />
          <Projects />
          {/* <Archive /> */}
          <Contact />
          <Footer />
        </div>
        <motion.div 
            className='hidden  xl:inline-flex w-32 h-full 
                      fixed right-0 bottom-0' 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1.5}} 
          >
          <RightSide />
        </motion.div>
      </div>
    </main>
  )
}
