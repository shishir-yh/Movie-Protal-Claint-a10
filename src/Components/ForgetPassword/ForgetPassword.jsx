import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { NavLink } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const handlePasswordReset = (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('Password reset email sent! Check your inbox.');
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-700">Forgot Password</h2>
                <form onSubmit={handlePasswordReset} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Enter your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {message && <p className="text-sm text-green-500">{message}</p>}
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <button
                        type="submit"
                        className="btn btn-primary w-full hover:bg-blue-600"
                    >
                        Send Reset Link
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500">

                    <NavLink to="/login" className="text-blue-500 hover:underline" >Back to Login</NavLink>
                </p>
            </div>
        </div>
    );
};

export default ForgetPassword;



