import { useEffect, useState } from "react";

export default function DigitalClock() {
  const [getTime, setTime] = useState("");
  function timer() {
    let time = new Date(); //get Date object
    let hours = time.getHours(); //get hours
    let ampm = hours <= 12 ? "am" : "pm"; // based on hours get am or pm using  ternary operator
    hours = hours % 12 || 12; // get the remainder of hours / 12  if remainder is 0 then 12 (12hr format)
    let minutes = String(time.getMinutes()).padStart(2, "0"); // get min and add 0 when less than 2 digits using padstart
    let seconds = String(time.getSeconds()).padStart(2, "0"); // get sec and  add 0 when less than 2 digits using padstart
    setTime(`${hours} : ${minutes} : ${seconds} ${ampm}`); // update to state
  }
  // will run  once after component  mount
  useEffect(() => {
    let showTime = setInterval(() => {
      timer();
    }, 1000);
    //clean up function
    return () => clearInterval(showTime);
  }, []);

  return (
    <div className="center-div">
      <div className="timer">
        <p className="font-xl">{getTime}</p>
      </div>
    </div>
  );
}
