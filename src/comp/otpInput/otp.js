import { useState } from "react";

export default function OtpInput() {
  const [otpValue, setOtpValue] = useState([]);
  return (
    <div className="center-div">
      {otpValue.map(() => {
        return <input type="number" className="otpInputBox" />;
      })}
    </div>
  );
}
