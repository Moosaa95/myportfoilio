import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Xchangebox = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        FullStack Developer 
        <span className="text-textGreen tracking-wide">@Xchangebox</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Spearheaded performance optimization initiatives, leveraging Django's ORM capabilities, including the strategic use of `select_related` and `prefetch_related` to efficiently retrieve related data and minimize database queries.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with the team to implement advanced caching mechanisms using Django's built-in caching framework, significantly reducing response times and server load.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Applied Django's middleware components to optimize request processing, enhance security, and seamlessly integrate additional functionality into the application.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Employed Django's form handling features to streamline data validation and submission, resulting in improved data integrity and a more intuitive user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted thorough code reviews and implemented optimizations, adhering to Django best practices and coding standards to maintain a high level of code quality and readability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to the creation of a robust and scalable API architecture, ensuring seamless communication between the frontend and backend components.
        </li>
      </ul>
    </motion.div>
  );
};

export default Xchangebox;
