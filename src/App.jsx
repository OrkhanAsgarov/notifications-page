import { useState } from "react";
import "./App.css";
import NotificationBody from "./components/NotificationBody";
import NotificationHeader from "./components/NotificationHeader";

function App() {
  const [notificationNumber, setNotificationNumber] = useState(0);
  const [clicked, setClicked] = useState(null);

  return (
    <>
      <div className="w-full h-screen bg-[#f7fafd] flex flex-col justify-center items-center">
        <div className="relative sm:w-full sm:max-w-full md:w-[75%] md:max-w-[75%] lg:w-[45%] lg:max-w-[45%] h-full md:h-[80%] rounded-md bg-white px-5 shadow-xl shadow-black overflow-y-scroll no-scrollbar">
          <NotificationHeader
            clicked={clicked}
            notificationNumber={notificationNumber}
            setNotificationNumber={setNotificationNumber}
          />
          <NotificationBody
            clicked={clicked}
            setClicked={setClicked}
            setNotificationNumber={setNotificationNumber}
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 px-10 cursor-pointer hover:text-[#080d1a]">
        Challenge by{" "}
        <a  href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a  href="#">Orkhan Asgarov</a>.
      </div>
    </>
  );
}

export default App;
