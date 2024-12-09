import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Allmovies from "../AllMovies/Allmovies";
import Addmovies from "../AddMovies/Addmovies";
import login from "../Login/Login"
import Login from "../Login/Login";
import Register from "../Register/Register";
import Home from "../Home/Home.jsx"
import Myfavourite from "../Myfavourit/Myfavourite.jsx";
import About from "../About/About.jsx";
import Details from "../AllMovies/Details.jsx";
import ForgetPassword from "../ForgetPassword/ForgetPassword.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Error from "../Error/Error.jsx";
import UpdateMovie from "../UpdatedMovie/UpdatedMovie.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/allmovies',
                element: <Allmovies></Allmovies>,
                loader: () => fetch('https://movie-portal-server-brown.vercel.app/allmovie')
            },
            {
                path: '/addmovies',
                element: <PrivateRoute><Addmovies></Addmovies></PrivateRoute>
            },

            {
                path: '/myfavourite',
                element: <PrivateRoute><Myfavourite></Myfavourite></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/seedetails/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    const res = await fetch('https://movie-portal-server-brown.vercel.app/allmovie')

                    const data = await res.json()

                    const singleData = data.find(single => single._id == params.id)

                    return singleData

                },


            },
            {
                path: '/updateMovie/:id',
                element: (
                    <PrivateRoute>
                        <UpdateMovie></UpdateMovie>
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    const res = await fetch(`https://movie-portal-server-brown.vercel.app/movie/${params.id}`);
                    return res.json();
                }, // Fetch movie details for updating
            },


        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }


]);

export default router;
