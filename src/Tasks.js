import React from "react";

import "reactjs-popup/dist/index.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const deleteVariant = {
  hidden: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function Tasks({ tasks, deleteTask, setTasks }) {
  //customId is to prevent dublicated notification //src:react-toastify
  const customId = "custom-id-yes";

  const handleClick = (event) => {
    let checkbox = event.target;
    let div = checkbox.parentNode;
    let p = div.querySelector("p");
    if (p.style.textDecoration === "line-through") {
      p.style.textDecoration = "none";
    } else {
      p.style.textDecoration = "line-through";
    }
  };

  const handlePopupContent = (text) => {
    toast.info(text, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: false,
      theme: "light",
      toastId: customId,
      className: "font-layfair text-[#59412e] italic",
    });
  };

  return (
    <div className="tasks text-md">
      {tasks.map((task, i) => (
        <motion.div
          key={task.text}
          className="task px-2 my-3 flex justify-evenly items-center"
          id={task.text}
          layoutId={task.text}
        >
          <input
            type="checkbox"
            name=""
            onClick={handleClick}
            className="form-checkbox h-[20px] w-[20px] rounded-full bg-[#59412e] text-[#918478] focus:ring-[#59412e] "
          />
          <p
            className="rounded-full bg-[#c3a27f] ps-3 pt-1 w-7/12 text-start h-8 align-middle truncate"
            onClick={() => handlePopupContent(task.text)}
          >
            {task.text}
          </p>
          <button
            className="bg-[#918478] rounded-lg px-2 py-1"
            onClick={() => deleteTask(task.text)}
          >
            <motion.svg
              variants={deleteVariant}
              whileHover="hover"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </motion.svg>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
export default Tasks;
