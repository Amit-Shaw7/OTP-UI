import React, { useState } from 'react';
import OtpUi from './components/OtpUi';
import NumberInput from './components/NumberInput';

const App = () => {
  const [showOtpUi, setShowOtpUi] = useState(false);
  const [userNumber, setUserNumber] = useState("");
  const sendOTP = (event) => {
    event.preventDefault();
    setShowOtpUi(true);
  }
  return (
    <div>
      {showOtpUi
        ?
        <OtpUi userNumber={userNumber} setShowOtpUi={setShowOtpUi}/>
        :
        <NumberInput
          setUserNumber={setUserNumber}
          sendOTP={sendOTP}
          userNumber={userNumber}
        />

      }
    </div>
  )
}

export default App