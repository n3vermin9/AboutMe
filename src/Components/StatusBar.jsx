import React, { useState, useEffect } from "react";

function StatusBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, "0");

  return (
    <div className="h-[32px] w-20 border-l p-1 border-white backdrop-brightness-125 absolute bottom-0 right-0 flex items-center">
      <div className="flex h-full w-14 items-center pt-1 justify-center text-xs text-white font-mono">
        <span>{`${hours.toString().padStart(2, "0")}:${minutes}`}AM</span>
      </div>

      <div className="w-[14px] h-[32px] border-white border-l border-t absolute right-0 backdrop-brightness-125"></div>
    </div>
  );
}

export default StatusBar;
