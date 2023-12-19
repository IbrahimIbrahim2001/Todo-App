import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Start from "./Start";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  const location = useLocation();

  return (
    <div className="App h-screen bg-[#00C9AE] pt-5 ">
      <ToastContainer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key} basename="/Todo-App">
          <Route path="/" element={<Start />} key="start"></Route>
          <Route path="/home" element={<Home />} key="home"></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
