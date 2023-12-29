import React from "react";
import not from "../api/not.json";

const NotificationBody = ({ setClicked, setNotificationNumber }) => {
  
  const handleClick = (item) => {
    not.results.forEach((red, index) => {
      if (item == index) {
        setClicked(index);
        red.read = true;
      }
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {not?.results.map((a, index) => (
        <div
          key={index}
          onClick={(e) => handleClick(index, a)}
          className={`flex items-start w-full p-3 cursor-pointer ${
            a.read ? "bg-white" : "bg-[#dde7ee]"
          }  rounded-lg gap-3 notification`}
        >
          <img src={a.image} alt={a.name} className="px-1 w-14" />
          <div className="w-full">
            <p>
              <span className="text-[#1c202b] font-extrabold cursor-pointer hover:text-[#0a317b]">
                {a.name}
              </span>{" "}
              {a.notification}{" "}
              <span className="font-extrabold cursor-pointer hover:text-[#0a317b]">
                {a.paperTypeBoolen ? (
                  <span className="text-[#1c202b] font-extrabold cursor-pointer hover:text-[#0a317b]">
                    {a.paperType}
                  </span>
                ) : (
                  ""
                )}
              </span>{" "}
              {a.read ? (
                ""
              ) : (
                <span className="inline-block w-2 h-2 rounded-full p-1 bg-[#f65351] mx-1 mb-[2px]"></span>
              )}
            </p>
            <p>{a.notificationTime}</p>
            {a.notificationMessageBoolen ? (
              <p className="text-wrap p-2 cursor-pointer border rounded-md mt-2 mb-4 border-[#e5effa] hover:bg-[#e5effa]">
                {a.notificationMessage}
              </p>
            ) : (
              ""
            )}
          </div>
          {a.notificationImageBoolen ? (
            <img
              src={a.notificationImage}
              alt="your picture"
              className="cursor-pointer"
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default NotificationBody;
