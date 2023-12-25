import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const HarmonyComponentInternship = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Internship - Harmony Hub
        <span className="text-textGreen tracking-wide">@HarmonyHub</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2020 - December 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Gained hands-on experience in web development, honing skills in HTML, CSS, and JavaScript while working with Harmony Hub.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          learning from experienced developers in a collaborative environment.
        </li>
      </ul>
    </motion.div>
  );
};

export default HarmonyComponentInternship;
