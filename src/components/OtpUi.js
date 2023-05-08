import { useEffect, useRef, useState } from "react";

let currentIndex = 0;
function OtpUi({ userNumber, setShowOtpUi }) {
  const [otp, setOtp] = useState(new Array(6).fill(" "));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const inputRef = useRef();

  const handleChange = (event) => {
    const { value } = event.target;
    const newOtp = [...otp];
    newOtp[currentIndex] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (!value) { setActiveOTPIndex(currentIndex - 1) }
    else { setActiveOTPIndex(currentIndex + 1) };
  }

  const handleKeyDown = (event, index) => {
    currentIndex = index;
    if (event.key === "Backspace") {
      setActiveOTPIndex(currentIndex - 1);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your entered : " + Number(otp.toString().replaceAll(",", "")))
  }

  const resendOTP = () => {
    alert("OTP sent to : " + userNumber);
    setOtp(Array(6).fill(" "));
  }
  const changeNum = () => {
    setShowOtpUi(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex])

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="shadow-md">
        <h3 className="text-3xl text-center">Phone verification</h3>
        <div className="p-5 w-[400px] flex flex-col gap-5">
          <h5 className="text-md text-center">Enter the OTP you recieved on XXXXXXX{userNumber.slice(7, 10)}</h5>

          <div className="flex items-center justify-between">
            {
              otp.map((elem, index) => (
                <input
                  required
                  ref={index === activeOTPIndex ? inputRef : null}
                  key={index}
                  value={otp[index]}
                  onChange={handleChange}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  // type="number"
                  name={`elem-${index}`}
                  className="border border-slate-500 text-center rounded-md w-[45px] h-[40px]"
                />
              ))
            }
          </div>
          <div className="flex justify-between items-center">
            <button onClick={changeNum} className="text-blue-500 font-semibold">Change number</button>
            <button onClick={resendOTP} className="text-blue-500 font-semibold">Re-send OTP</button>
          </div>
          <button type="submit" className="bg-blue-500 p-2 text-white rounded-md hover:border-white ...">
            Verify OTP
          </button>
        </div>
      </form>
    </div>
  );
}

export default OtpUi;
