import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";

const Myfavourite = () => {
    const [favorites, setFavorites] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const auth = getAuth();

    // Get the logged-in user's email
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
        // return () => unsubscribe();
    }, [auth]);

    // Fetch favorite movies for the logged-in user
    useEffect(() => {
        if (userEmail) {
            fetch(`https://movie-portal-server-brown.vercel.app/favorites?userEmail=${userEmail}`)
                .then((res) => res.json())
                .then((data) => setFavorites(data))
                .catch((error) =>
                    console.error("Error fetching favorite movies:", error)
                );
        }
    }, [userEmail]);

    // Delete a favorite movie
    const handleDeleteFavorite = (id) => {
        Swal.fire({
            title: "Do you want to remove this movie from favorites?",
            showCancelButton: true,
            confirmButtonText: "Remove",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://movie-portal-server-brown.vercel.app/.app/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setFavorites((prevFavorites) =>
                                prevFavorites.filter((movie) => movie._id !== id)
                            );
                            Swal.fire("Removed!", "The movie was removed from favorites.", "success");
                        } else {
                            Swal.fire("Error!", "Failed to remove the movie.", "error");
                        }
                    });
            }
        });
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-center mb-8">My Favorite Movies</h1>
            {!userEmail ? (
                <p className="text-center">Please log in to view your favorite movies.</p>
            ) : favorites.length === 0 ? (
                <p className="text-center">You haven't added any favorite movies yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((movie) => (
                        <div
                            key={movie._id}
                            className="card bg-base-100 shadow-xl rounded-lg overflow-hidden"
                        >
                            <figure>
                                <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="p-4">
                                <h2 className="text-xl font-bold">{movie.title}</h2>
                                <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
                                <p className="text-sm text-gray-600">Year: {movie.year}</p>
                                <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
                                <p className="mt-2 text-gray-700">{movie.summary}</p>
                                <button
                                    className="btn btn-error mt-4"
                                    onClick={() => handleDeleteFavorite(movie._id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Myfavourite;

