import React, { useContext, useState } from 'react';
import { authContext } from '../Authprovider/Authprovider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(() => navigate(location.state?.from || '/'))
            .catch((err) => setError(err.message));
    };

    const googleLoginHandler = () => {
        handleGoogleLogin()
            .then(() => navigate(location.state?.from || '/'))
            .catch((err) => setError(err.message));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}

                    {/* forget password  */}

                    <div className="mt-2 text-left">
                        <NavLink to="/forgetPassword">
                            <div className="text-red-500 text-xxl hover:underline">
                                Forget password
                            </div>
                        </NavLink>
                    </div>

                    {/* button of submitted */}
                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <div className="divider">OR</div>

                <button
                    onClick={googleLoginHandler}
                    className="btn btn-outline btn-accent w-full flex items-center justify-center"
                >
                    <img
                        src="https://img.icons8.com/color/24/google-logo.png"
                        alt="Google logo"
                        className="mr-2"
                    />
                    Continue with Google
                </button>

                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <NavLink to="/register" className="text-blue-500 hover:underline">
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;














// import React, { useContext, useState } from 'react';
// import { authContext } from '../Authprovider/Authprovider';
// import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const contextValue = useContext(authContext);
//     const { handleGoogleLogin, handleLogin } = contextValue;
//     const [error, setError] = useState("");

//     // to goto the desire path we have to declared the location

//     const location = useLocation();
//     console.log("logine", location);

//     const navigate = useNavigate()


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const name = e.target.name.value
//         const email = e.target.email.value
//         const password = e.target.password.value

//         console.log(name, email, password)
//         handleLogin(email, password)
//             .then(res => { navigate(location.state.from) })
//             .catch(err => {
//                 setError(err.message)
//             })
//     }

//     const googleLoginHandler = () => {
//         handleGoogleLogin()
//             .then(res => { navigate(location.state.from) })
//             .catch(err => {
//                 setError(err.message)
//             })
//     }

//     return (

//         <div>

//             <div className="w-10/12 mx-auto">
//                 <form action="" onSubmit={handleSubmit}>

//                     <div> Email
//                         <input
//                             type="text"
//                             placeholder="Type here"
//                             className="input input-bordered input-error w-full max-w-xs"
//                             name="email" required />
//                     </div>
//                     <div>Password
//                         <input
//                             type="text"
//                             placeholder="Type here"
//                             className="input input-bordered input-error w-full max-w-xs"
//                             name="password" required />
//                     </div>
//                     <div>
//                         <button className="btn ">Submitted</button>
//                     </div>

//                 </form>
//             </div>
//             {/* log in is finished here  */}
//             {error && <p>{error}</p>}
//             <button onClick={googleLoginHandler} className='btn'>Google login</button>
//             <NavLink to={"/register"} className="text-blue-600"> go to register </NavLink>
//         </div>
//     );
// };

// export default Login;
