"use client"
import { useState } from "react";
import SectionTitle from "../components/sectionTitle";
import Xchangebox from "../components/works/xchangebox";
import SteamledgeLimited from "../components/works/steamledge";
import HarmonyComponentInternship from "../components/works/harmony";


const Experience = () => {
  const [workXchangeboxbd, setWorkXchangeboxbd] = useState(true);
  const [workSteamledgeLimited, setWorkSteamledgeLimited] = useState(false);
  const [harmony, setHarmony] = useState(false);

  const handleXchangebox = () => {
    setWorkXchangeboxbd(true);
    setWorkSteamledgeLimited(false);
    setHarmony(false);
   
  };

  const handleSteamledge = () => {
    setWorkXchangeboxbd(false);
    setWorkSteamledgeLimited(true);
    setHarmony(false);
   
  };

  const handleHarmony = () => {
    setWorkXchangeboxbd(false);
    setWorkSteamledgeLimited(false);
    setHarmony(true);
   
  };
  
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleXchangebox}
            className={`${
              workXchangeboxbd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Xchangebox Solutions 
          </li>
           <li
            onClick={handleSteamledge}
            className={`${
              workSteamledgeLimited
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            SteamLedge Limited
          </li>
          <li
            onClick={handleHarmony}
            className={`${
              harmony
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Harmony Innovation Hub
          </li>
          
        </ul>
        {workXchangeboxbd && <Xchangebox />}
         {workSteamledgeLimited && <SteamledgeLimited />}
        {harmony && <HarmonyComponentInternship />}
        
      </div>
    </section>
  );
};

export default Experience;