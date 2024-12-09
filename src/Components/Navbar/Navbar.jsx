import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/Authprovider";

const Navbar = () => {

    const { user, handleSignOut } = useContext(authContext)
    const link = <>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? "text-purple-600 underline" : ""}`} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? "text-purple-600 underline" : ""}`} to='/allmovies'>All Movies</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? "text-purple-600 underline" : ""}`} to='/addmovies'>Add Movie</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? "text-purple-600 underline" : ""}`} to='/myfavourite'>My Favorites</NavLink>
        <NavLink className={({ isActive }) => `font-bold ${isActive ? "text-purple-600 underline" : ""}`} to='/about'>About</NavLink>




    </>
    return (
        <div>
            <div className="navbar bg-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {/* // for the mobile view  */}
                            {
                                link
                            }
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? "text-purple-600 underline" : ""}`} to="/login"></NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Movie Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {
                            link
                        }
                    </ul>
                </div>

                <div className="navbar-end ">
                    {
                        user ? (<div className="flex" title={user.displayName || "User"} >
                            <img className="rounded-full lg:w-[50px] md:w-[50px] w-[50px] h-[50px]" src={user.photoURL} alt="" srcset="" />
                            <NavLink onClick={handleSignOut} className={({ isActive }) =>
                                `btn bg-gray-300 ml-3 font-bold ${isActive ? " text-white " : ""}`
                            } to="/login">LogOut</NavLink>
                        </div>) :
                            (<div>
                                <NavLink className={({ isActive }) =>
                                    `btn bg-gray-300 ml-3 font-bold ${isActive ? " text-white " : ""}`
                                } to="/login">Login</NavLink>

                                <NavLink className={({ isActive }) =>
                                    `btn bg-gray-300 ml-3 font-bold ${isActive ? " text-white " : ""}`
                                } to="/register">Register</NavLink>

                            </div>)
                    }

                </div>


            </div>
        </div>
    );
};

export default Navbar;

{/* <div className="navbar-end ">
                {
                    user ? (<div className="flex" title={user.displayName || "User"} >
                        <img className="rounded-full lg:w-[50px] md:w-[50px] w-[50px] h-[50px]" src={user.photoURL} alt="" srcset="" />
                        <NavLink onClick={handleSignOut} className={({ isActive }) =>
                            `btn bg-green-500 ml-3 font-bold ${isActive ? " text-white " : ""}`
                        } to="/login">LogOut</NavLink>
                    </div>) :
                        (<div>
                            <NavLink className={({ isActive }) =>
                                `btn bg-green-500 ml-3 font-bold ${isActive ? " text-white " : ""}`
                            } to="/login">Login</NavLink>

                        </div>)
                }

            </div> */}

{/* <div className="navbar-end">
        <NavLink className={({ isActive }) =>
            `btn bg-gray-300 ml-3 font-bold ${isActive ? " text-white " : ""}`
        } to="/login">Login</NavLink>

        <NavLink className={({ isActive }) =>
            `btn bg-gray-300 ml-3 font-bold ${isActive ? " text-white " : ""}`
        } to="/register">Register</NavLink>
    </div> */}