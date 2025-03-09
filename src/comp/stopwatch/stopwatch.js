import { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const [stopwatchTimer, setStopwatchTimer] = useState("00:00:00:00");
  const [totalMilliseconds, setTotalMilliseconds] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTotalMilliseconds((prev) => prev + 10); // Increment by 10ms
      }, 10);
    }
  }

  function stopTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function resetTimer() {
    stopTimer();
    setTotalMilliseconds(0);
  }

  function convertMillisecondsToStopwatch(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);
    let milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(hours).padStart(2, "0")} : ${String(minutes).padStart(
      2,
      "0"
    )} : ${String(seconds).padStart(2, "0")} : ${String(milliseconds).padStart(
      2,
      "0"
    )}`;
  }

  useEffect(() => {
    setStopwatchTimer(convertMillisecondsToStopwatch(totalMilliseconds));
  }, [totalMilliseconds]);

  return (
    <div className="center-div flex flex-col ">
      <h1>StopWatch</h1>
      <p className="font-3xl flex">{stopwatchTimer}</p>
      <div className="flex gap20 mt-10">
        <button className="button-2 pointer" onClick={stopTimer}>
          Stop
        </button>
        <button className="button-2 pointer" onClick={resetTimer}>
          Reset
        </button>
        <button className="button-2 pointer" onClick={startTimer}>
          Start
        </button>
      </div>
    </div>
  );
}

/*

Explanation:
Extract Hours (HH)

ms / 3600000 → Convert milliseconds into hours (1 hour = 3,600,000 ms).

Extract Minutes (MM)
(ms % 3600000) / 60000 → First, remove full hours (ms % 3600000), then convert remaining ms to minutes (1 min = 60,000 ms).

Extract Seconds (SS)
(ms % 60000) / 1000 → Remove full minutes (ms % 60000), then convert remaining ms to seconds (1 sec = 1000 ms).

Extract Milliseconds (MS) in Two Digits
ms % 1000 → Extracts only the remaining milliseconds.
/ 10 → Converts 3-digit milliseconds (0–999) to 2-digit milliseconds (0–99) for better readability.

*/
