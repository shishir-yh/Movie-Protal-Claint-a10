import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateMovie = () => {
    const { id } = useParams(); // Get the movie ID from URL
    const [movie, setMovie] = useState({});
    const [rating, setRating] = useState(0);
    const navigate = useNavigate();

    // Function to validate the poster URL
    const validateUrl = (url) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    // Fetch movie data by ID
    useEffect(() => {
        fetch(`https://movie-portal-server-brown.vercel.app/movie/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setRating(data.rating); // Set the initial rating
            })
            .catch((err) => console.error(err));
    }, [id]);

    // Handle form submission with validation
    const handleUpdateMovie = (e) => {
        e.preventDefault();
        const form = e.target;

        const poster = form.poster.value;
        const title = form.title.value;
        const genre = form.genre.value;
        const duration = form.duration.value;
        const year = form.year.value;
        const summary = form.summary.value;

        // Validation
        if (!validateUrl(poster)) {
            Swal.fire("Error", "Poster must be a valid URL!", "error");
            return;
        }

        if (title.length < 2) {
            Swal.fire("Error", "Title must have at least 2 characters!", "error");
            return;
        }

        if (!genre) {
            Swal.fire("Error", "Please select a genre!", "error");
            return;
        }

        if (!duration || duration <= 60) {
            Swal.fire("Error", "Duration must be greater than 60 minutes!", "error");
            return;
        }

        if (!year) {
            Swal.fire("Error", "Please select a release year!", "error");
            return;
        }

        if (rating === 0) {
            Swal.fire("Error", "Please provide a rating!", "error");
            return;
        }

        if (summary.length < 10) {
            Swal.fire("Error", "Summary must have at least 10 characters!", "error");
            return;
        }

        const updatedMovie = {
            poster,
            title,
            genre,
            duration,
            year,
            rating, // Use the updated rating
            summary,
        };

        fetch(`https://movie-portal-server-brown.vercel.app/updateMovie/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedMovie),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire("Success", "Movie updated successfully!", "success");
                navigate("/"); // Redirect to home or movie list
            })
            .catch((err) => {
                Swal.fire("Error", "Failed to update movie!", "error");
            });
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4">Update Movie</h1>
            {movie ? (
                <form onSubmit={handleUpdateMovie} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-medium">Movie Poster URL</label>
                        <input
                            type="text"
                            name="poster"
                            defaultValue={movie.poster}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-medium">Movie Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={movie.title}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-medium">Genre</label>
                        <select
                            name="genre"
                            defaultValue={movie.genre}
                            className="select select-bordered w-full"
                        >
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label font-medium">Duration (minutes)</label>
                        <input
                            type="number"
                            name="duration"
                            defaultValue={movie.duration}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-medium">Release Year</label>
                        <select
                            name="year"
                            defaultValue={movie.year}
                            className="select select-bordered w-full"
                        >
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label font-medium">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-medium">Summary</label>
                        <textarea
                            name="summary"
                            defaultValue={movie.summary}
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Update Movie
                    </button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UpdateMovie;
