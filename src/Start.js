import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};
const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 1,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

function Start() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="start w-[280px] sm:w-full h-full flex justify-center items-center flex-col relative top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
    >
      <motion.p
        initial="hidden"
        animate="visible"
        className="text-red-200 italic font-layfair text-lg sm:text-3xl w-fit sm:w-96 text-center mb-5"
      >
        Hello and thank you for choosing TodoApp.To begin, tap the button below.
      </motion.p>
      <div>
        <Link to="/home">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            // animate="hover"
            exit="exit"
            className="bg-red-200 rounded-full text-red-500 w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center mt-5"
          >
            <motion.svg
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <motion.path
                variants={pathVariant}
                initial="hidden"
                animate="visible"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </motion.svg>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Start;
