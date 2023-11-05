import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Tasks from "./Tasks";

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transitoin: {
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
      delay: 1.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //customId is to prevent dublicated notification //src:react-toastify
  const customId = "custom-id-yes";

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const addTask = (inputValue) => {
    let x = +inputValue;
    if (
      tasks.length < 10 &&
      x != inputValue &&
      inputValue.length <= 100 &&
      inputValue !== "" &&
      !tasks.some((e) => e.text === inputValue) &&
      !tasks.some((e) => e.text === inputValue.toLowerCase())
    ) {
      setTasks([...tasks, { text: inputValue }]);
      window.localStorage.setItem(
        "tasks",
        JSON.stringify([...tasks, { text: inputValue }])
      );
    } else {
      toast.error(
        "sorry, wrong input, we prevent duplicated or empty values, also the numeric values only and a length more than a 100",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          toastId: customId,
        }
      );
    }
    setInputValue("");
  };
  const deleteTask = (text) => {
    const newTasks = tasks.filter((item) => item.text !== text);
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  useEffect(() => {
    let preTasks = window.localStorage.getItem("tasks");
    if (preTasks) {
      setTasks(JSON.parse(preTasks));
    }
  }, []);

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="Home bg-red-200 w-[280px] sm:w-6/12 md:w-4/12 lg:w-3/12 xl:w-3/12 min-h-[60%] max-h-[90%] pb-5 pt-2 px-2 rounded-lg font-layfair relative top-[2%] left-[50%] translate-x-[-50%]  text-[#59412e] italic"
    >
      <p className="text-xl font-bold border-b text-center">Todo App</p>
      <div className="pt-2 px-2 flex justify-evenly items-center mt-5">
        <input
          className="h-10 rounded-lg bg-[#c3a27f] text-[#59412e]  w-9/12 placeholder:italic placeholder:text-start focus:ring-[#59412e]"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Notes:"
        />
        <button
          onClick={() => addTask(inputValue)}
          className="rounded-full bg-[#c3a27f] w-10 h-10 flex justify-center items-center hover:bg-[#59412e] hover:text-red-200"
        >
          <svg
            className="flex w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <Tasks tasks={tasks} deleteTask={deleteTask} setTasks={setTasks} />

      <Link to="/">
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="bg-red-200 rounded-full text-red-500 w-10 h-10 sm:w-14 sm:h-14 flex justify-center items-center mt-5  absolute top-full left-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <motion.path
              variants={pathVariant}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default Home;
