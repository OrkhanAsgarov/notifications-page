import React, { useEffect } from "react";
import not from "../api/not.json";

const NotificationHeader = ({ notificationNumber, setNotificationNumber, clicked }) => {
  useEffect(() => {
    setNotificationNumber(0);
    not.results.map((a) => {
      if (!a.read) {
        return setNotificationNumber((prev) => prev + 1);
      }
    });
  }, [clicked]);

  const handleMarkAll = () => {
    setNotificationNumber(0);
    not.results.forEach((item) => (item.read = true));
  };

  return (
    <div className="flex items-center w-full sticky top-0 left-0 py-5  bg-white justify-between">
      <div className="flex justify-start items-center gap-1">
        <span className="font-extrabold text-[#1c202b] text-[20px]">
          Notifications
        </span>
        <span className="bg-[#3e52a3] font-normal  text-white rounded-md text-[14px] px-2">
          {notificationNumber}
        </span>
      </div>
      <div
        onClick={handleMarkAll}
        className="font-bold cursor-pointer hover:text-[#0a317b]"
      >
        Mark all as read
      </div>
    </div>
  );
};

export default NotificationHeader;
