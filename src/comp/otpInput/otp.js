import { useRef, useState } from "react";

export default function OtpInput() {
  // State to store OTP values (array of 5 empty strings)
  const [otpValue, setOtpValue] = useState(Array(5).fill(""));

  // useRef to store references of input elements
  const otpInputRef = useRef([]);

  /**
   * Handles input change for OTP fields.
   * - Ensures only numbers are entered.
   * - Restricts input to a single digit.
   * - Moves focus to the next input automatically when a digit is entered.
   */
  function handleOtpInput(e, index) {
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
  function handleFocus(index, e) {
    if (index > 0 && otpValue[index] === "" && e.code === "Backspace") {
      otpInputRef.current[index - 1].focus(); // Move focus to the previous input
    }
  }

  return (
    <div className="center-div flex flex-col">
      <h1 className="m-0 mb-10">Enter OTP</h1>
      <div className="flex align-center gap10 mt-10">
        {otpValue.map((v, i) => {
          return (
            <input
              type="text"
              className="otpInputBox"
              key={i}
              value={otpValue[i]}
              ref={(el) => (otpInputRef.current[i] = el)} // Store input refs
              onChange={(e) => handleOtpInput(e, i)}
              onKeyDown={(e) => handleFocus(i, e)}
            />
          );
        })}
      </div>
    </div>
  );
}
