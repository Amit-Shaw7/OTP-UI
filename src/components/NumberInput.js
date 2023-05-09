import React from 'react';

const NumberInput = ({ sendOTP, userNumber, setUserNumber }) => {
    return (
        <form onSubmit={sendOTP} className='h-[100vh] w-full flex-col gap-5 flex items-center justify-center'>
            <input
                autoFocus
                type='number'
                required
                maxLength="10"
                minLength="10"
                onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                className="border border-slate-500 text-center rounded-md h-[40px]"
                placeholder='Enter mobile number'
                value={userNumber}
                onChange={(event) => setUserNumber(event.target.value)}
            />
            <button type='submit' className="bg-blue-500 p-2 text-white rounded-md hover:border-white ...">
                Send OTP
            </button>
        </form>
    )
}

export default NumberInput;