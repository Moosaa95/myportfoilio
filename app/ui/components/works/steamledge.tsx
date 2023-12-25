import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SteamledgeLimited = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Developer
        <span className="text-textGreen tracking-wide">@SteamledgeLimited</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        February 2021 - June 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to the development of Python classes for solving statistics, sets, and trigonometry questions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integrated the Python classes with an API, enabling seamless usage by the frontend for interactive problem-solving.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with the team to enhance the functionality and performance of the platform.
        </li>
      </ul>
    </motion.div>
  );
};

export default SteamledgeLimited;
