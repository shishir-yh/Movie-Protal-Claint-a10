import { NavLink, useLoaderData } from "react-router-dom";
import MovieCard from "./MovieCard";

const Allmovies = () => {

    const movies = useLoaderData();

    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    movies.map((movie) => (
                        <MovieCard key={movie._id} movie={movie}></MovieCard>
                    ))
                }
            </div>



        </div>
    );
};

export default Allmovies;