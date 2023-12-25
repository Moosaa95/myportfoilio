import Image from "next/image"
import SectionTitle from "../components/sectionTitle"
import {AiFillThunderbolt} from "react-icons/ai"
import { profile } from "@/public/assets";


const About = () => {
  return (
    <section id='about' className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle title="About Me" />
        <div
            className="flex flex-col lgl:flex-row gap-16"
        >
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p className="">
            Hello! I'm passionate about building innovative solutions. Over the past 2 years, I've honed my skills in Django, Django Rest Framework, jQuery, and React. Currently, I'm diving deeper into the world of Next.js to enhance my expertise.
          </p>
                <p>here are the technologies i am working with</p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Javascript (ES6+)</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Django & Django Rest Framework</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>React & Next.js</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>jQuery</li>
                    <li className="flex items-center gap-2"><span className="text-textGreen"><AiFillThunderbolt /></span>Html5 & Css3</li>
                </ul>

            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 left-6 top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image src={profile} alt="image profile img" className="rounded-lg h-full object-cover"/>
                        <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    </div>
                </div>
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </div>
        </div>
    </section>
  )
}

export default About