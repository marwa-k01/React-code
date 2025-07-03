import React, { useState } from "react";

const PasswordToggle = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="m-4">
           <input type='email' className="w-full border border-blue-600 outline-none p-3 rounded-lg my-2" placeholder='Enter your email'/>
            
           <input type={showPassword ? 'text' : 'password'}
           value={password}
           onChange={handleChange}
           placeholder="Enter your password"
           className="p-3 w-[305px] border border-blue-600 outline-none rounded-lg my-2"
            />
            <button onClick={toggleShowPassword}
            className="ml-2 text-slate-700">
                {showPassword ? "Hide" : "Show"}
            </button>
        </div>
    );     
};


export default PasswordToggle;