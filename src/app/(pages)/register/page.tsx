'use client'
import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');

    const handleRegister = () => {
        // Handle register logic here
    };

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="text"
                    placeholder="License Number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                />
                <button className="p-2 bg-blue-500 text-white rounded" onClick={handleRegister}>
                    Register
                </button>
                <button className="p-2 bg-blue-500 text-white rounded" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default RegisterPage;