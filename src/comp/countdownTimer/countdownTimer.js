import { useEffect, useRef, useState } from "react";

export default function CountDownTimer() {
  const [countDown, setCountDown] = useState(0);
  const [showHours, setShowHour] = useState("00");
  const [showMin, setShowMin] = useState("00");
  const [showSec, setShowSec] = useState("00");
  const setIntervalFunction = useRef(null);

  // Divide totalSeconds by 3600 (60 min * 60 sec) to get the number of full hours.
  function convertSecondsIntoHours(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    return `${String(hours).padStart(2, "0")}`;
  }

  // Get the remaining seconds after extracting hours using (totalSeconds % 3600).
  // Then, divide by 60 to get the number of full minutes.
  function convertSecondsIntoMin(totalSeconds) {
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${String(minutes).padStart(2, "0")}`;
  }

  // Get the remaining seconds after extracting hours and minutes using (totalSeconds % 60).
  function convertSecondsIntoSec(totalSeconds) {
    let seconds = totalSeconds % 60;
    return `${String(seconds).padStart(2, "0")}`;
  }

  //start decrease seconds
  function start() {
    if (setIntervalFunction.current) return;

    setIntervalFunction.current = setInterval(() => {
      setCountDown((prev) => {
        if (prev <= 1) {
          clearInterval(setIntervalFunction.current);
          setIntervalFunction.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }

  //stop
  function stop() {
    clearInterval(setIntervalFunction.current);
    setIntervalFunction.current = null;
  }

  //reset
  function reset() {
    stop();
    setCountDown(
      Number(showHours) * 3600 + Number(showMin) * 60 + Number(showSec)
    );
  }

  //update time from input   and converting it to seconds
  function updateHour(e) {
    let value = Number(e.target.value) || 0;
    setShowHour(String(value).padStart(2, "0"));
    //converting into seconds
    setCountDown(value * 3600 + Number(showMin) * 60 + Number(showSec));
  }

  function updateMin(e) {
    let value = Number(e.target.value) || 0;
    setShowMin(String(value).padStart(2, "0"));
    setCountDown(Number(showHours) * 3600 + value * 60 + Number(showSec));
  }

  function updateSec(e) {
    let value = Number(e.target.value) || 0;
    setShowSec(String(value).padStart(2, "0"));
    setCountDown(Number(showHours) * 3600 + Number(showMin) * 60 + value);
  }

  // update ui
  useEffect(() => {
    setShowHour(convertSecondsIntoHours(countDown));
    setShowMin(convertSecondsIntoMin(countDown));
    setShowSec(convertSecondsIntoSec(countDown));
  }, [countDown]);

  return (
    <div className="center-div flex flex-col">
      <h1>Count down timer</h1>
      <div className="flex gap10 align-center">
        <input
          type="text"
          className="font-3xl width50"
          value={showHours}
          onChange={(e) => updateHour(e)}
        />
        <span>Hrs</span>
        <input
          type="text"
          className="font-3xl width50"
          value={showMin}
          onChange={(e) => updateMin(e)}
        />
        <span>Min</span>
        <input
          type="text"
          className="font-3xl width50"
          value={showSec}
          onChange={(e) => updateSec(e)}
        />{" "}
        <span>Sec</span>
      </div>
      <div className="flex gap10 mt-30">
        <button className="button-2 pointer" onClick={stop}>
          Stop
        </button>
        <button className="button-2 pointer" onClick={reset}>
          Reset
        </button>
        <button className="button-2 pointer" onClick={start}>
          Start
        </button>
      </div>
    </div>
  );
}

/*
Extract hour--->
Divide totalSeconds by 3600 (60 min * 60 sec) to get the full hours.

Extract min--->
(totalSeconds % 3600) → Removes full hours, keeping only the remaining seconds.
... / 60 → Converts those remaining seconds into minutes.

Extract sec--->
totalSeconds % 60 → Gets the remaining seconds after removing hours and minutes.
*/
