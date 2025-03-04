import { useState } from "react";

function Progressbar({ width = "0%" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          background: "black",
          width: `${width}`,
          height: "100%",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
}

function CompletedSteps({ num, bg, color }) {
  return (
    <p
      className="m-5"
      style={{
        borderRadius: "50%",
        background: `${bg}`,
        color: `${color}`,
        padding: "10px 13px",
        border: "1px solid black",
        transition: "all 0.1s ease-in-out",
        transitionDelay: color == "black" ? "0s" : "0.5s", /// Smooth transition for all properties (e.g., background, color, etc.)
        // Set a transition delay: When the progress bar reaches 100% (i.e., color turns black),
        // there is no delay (0s) for the transition. Otherwise, apply a delay of 0.5s
      }}
    >
      {num}
    </p>
  );
}

export default function ProgressBar() {
  const [count, setCount] = useState(1);

  // Handle the previous step
  function handlePrev() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  // Handle the next step
  function handleNext() {
    if (count < 3) {
      setCount((prev) => prev + 1);
    }
  }

  // if count then update progreebar with 100%
  // Update progress based on step number
  function updateProgress(status) {
    return count >= status ? "100%" : "0%";
  }

  // Update step color based on step completion
  function updateStep(status) {
    return count >= status ? "black" : "white";
  }

  return (
    <div className="p-40">
      <div className="flex align-center">
        <CompletedSteps
          num="1"
          bg={updateStep(1)}
          color={updateStep(1) === "black" ? "white" : "black"}
        />
        <Progressbar width={updateProgress(2)} />
        <CompletedSteps
          num="2"
          bg={updateStep(2)}
          color={updateStep(2) === "black" ? "white" : "black"}
        />
        <Progressbar width={updateProgress(3)} />
        <CompletedSteps
          num="3"
          bg={updateStep(3)}
          color={updateStep(3) === "black" ? "white" : "black"}
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
