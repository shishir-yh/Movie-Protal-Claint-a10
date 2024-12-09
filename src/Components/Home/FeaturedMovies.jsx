import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedMovies = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch top 6 highest rated movies
        fetch('https://movie-portal-server-brown.vercel.app/featuredMovies')
            .then((res) => res.json())
            .then((data) => setFeaturedMovies(data))
            .catch((error) => console.error("Error fetching featured movies:", error));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">Featured Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {featuredMovies.map((movie) => (
                    <div key={movie._id} className="card w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
                        <figure className="relative">
                            <img src={movie.poster} alt={movie.title} className="w-full h-64 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl font-semibold text-black dark:text-gray-300">{movie.title}</h2>
                            <p className="text-gray-800 dark:text-gray-400"><strong>Genre:</strong> {movie.genre}</p>
                            <p className="text-gray-800 dark:text-gray-400"><strong>Duration:</strong> {movie.duration} minutes</p>
                            <p className="text-gray-800 dark:text-gray-400"><strong>Release Year:</strong> {movie.year}</p>
                            <p className="text-gray-800 dark:text-gray-400"><strong>Rating:</strong> {movie.rating}/5</p>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate(`/seedetails/${movie._id}`)} // Navigate to movie details page
                                >
                                    See Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate('/allmovies')} // Navigate to the All Movies page
                >
                    See All Movies
                </button>
            </div>
        </div>
    );
};

export default FeaturedMovies;
