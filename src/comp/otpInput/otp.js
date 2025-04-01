import { useEffect, useRef, useState } from "react";

export default function OtpInput() {
  // State to store OTP values (array of 5 empty strings)
  const [otpValue, setOtpValue] = useState(Array(4).fill(""));

  // useRef to store references of input elements
  const otpInputRef = useRef([]);

  /**
   * Handles input change for OTP fields.
   * - Ensures only numbers are entered.
   * - Restricts input to a single digit.
   * - Moves focus to the next input automatically when a digit is entered.
   */
  function handleOtpInput(e, index) {
    console.log(e.key);
    if (isNaN(e.target.value)) return; // Prevent non-numeric input

    setOtpValue((prev) => {
      let updatedOtp = [...prev];
      updatedOtp[index] = e.target.value.slice(-1); // Store only the last digit
      return updatedOtp;
    });

    // Move focus to the next input if a digit is entered
    if (index < otpValue.length - 1 && e.target.value.slice(-1) !== "") {
      otpInputRef.current[index + 1].focus();
    }
  }

  /**
   * Handles keyboard events for OTP fields.
   * - Moves focus back to the previous input when "Backspace" is pressed.
   */
  function handleBackSpaceFocus(e, index) {
    if (index > 0 && e.target.value === "" && e.code === "Backspace") {
      otpInputRef.current[index - 1].focus(); // Move focus to the previous input
    }
  }
  useEffect(() => {
    otpInputRef.current[0].focus();
  }, []);
  return (
    <div className="center-div flex flex-col">
      <h1 className="m-0 mb-10">Enter OTP</h1>
      <div className="flex align-center gap20 mt-20">
        {otpValue.map((_, i) => {
          return (
            <input
              type="text"
              className="otpInputBox"
              key={i}
              value={otpValue[i]}
              ref={(el) => (otpInputRef.current[i] = el)} // Store input refs
              onInput={(e) => handleOtpInput(e, i)}
              onKeyUp={(e) => handleBackSpaceFocus(e, i)}
            />
          );
        })}
      </div>
    </div>
  );
}
