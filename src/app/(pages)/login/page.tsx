'use client'
/**
 * Create a login page styled with Tailwind css with the following inputs:
 * - Email - including validation for email
 * - Password - should mask the input
 * - Login button - should have a handler that POSTs to the login api
 * - Register button - should navigate to the register page
 */
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        // TODO: Implement login logic here
        // POST call to login api that sends email and password
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data here
                // redirect the user to the dashboard page
                if (data.success) {
                    // Assuming you have a dashboard page called "DashboardPage"
                    // You can use Next.js router to navigate to the dashboard page
                    router.push('/dashboard');
                } else {
                    // Handle login failure here
                    // Display an error message or take any other action
                }
            })
            .catch(error => {
                // Handle any errors here
            });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
            />
            <button
                onClick={handleLogin}
                className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4"
            >
                Login
            </button>
            <Link className="text-blue-500" href="/register">Register</Link>
        </div>
    );
};

export default LoginPage;
