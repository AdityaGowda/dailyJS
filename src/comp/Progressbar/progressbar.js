import { useState } from "react";

function Progressbar({ width = "0%" }) {
  return (
    <div
      className=""
      style={{
        width: "100%",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
      }}
    >
      <div
        style={{ background: "black", width: `${width}`, height: "100%" }}
      ></div>
    </div>
  );
}
function CompletedSteps({ num, bg = "white", color = "black" }) {
  return (
    <p
      className=""
      style={{
        borderRadius: "50%",
        background: `${bg}`,
        width: "fit-content",
        color: `${color}`,
        padding: "10px 13px",
        border: "1px solid black",
      }}
    >
      {num}
    </p>
  );
}

export default function ProgressBar() {
  const [count, setCount] = useState(1);
  function handlePrev() {
    if (count <= 3 && count > 0) setCount((e) => e - 1);
  }
  function handleNext() {
    if (count <= 3 && count > 0) {
      setCount((e) => e + 1);
    }
  }

  function updateProgress(status, trueValue, falseValue) {
    return count >= status ? trueValue : falseValue;
  }
  return (
    <div className="p-30 ">
      <div className="flex align-center">
        <CompletedSteps
          num="1"
          bg={updateProgress(1, "black", "white")}
          color={updateProgress(1, "white", "balck")}
        />
        <Progressbar width={updateProgress(2, "100%", "0%")} />
        <CompletedSteps
          num="2"
          bg={updateProgress(2, "black", "white")}
          color={updateProgress(2, "white", "black")}
        />
        <Progressbar width={updateProgress(3, "100%", "0%")} />
        <CompletedSteps
          num="3"
          bg={updateProgress(3, "black", "white")}
          color={updateProgress(3, "white", "black")}
        />
      </div>
      <div className="flex justify-spacebetween mt-30">
        <button className="button-2 p-20" onClick={handlePrev}>
          Prev
        </button>
        <button className="button-2 p-20" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
