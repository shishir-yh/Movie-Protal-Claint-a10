
import React, { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Addmovies = () => {
    const [rating, setRating] = useState(0); // State for dynamic rating
    const [userEmail, setUserEmail] = useState("");

    // Get the logged-in user's email
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(""); // Clear the email if the user logs out
            }
        });

        return () => unsubscribe(); // Clean up the listener
    }, []);

    // Handle dynamic rating selection
    const handleRating = (rate) => {
        setRating(rate); // Set the rating
    };

    const validateUrl = (url) => {
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        return urlRegex.test(url);
    };

    const handleAddMovie = (e) => {
        e.preventDefault();
        const form = e.target;

        const poster = form.poster.value;
        const title = form.title.value.trim();
        const genre = form.genre.value;
        const duration = parseInt(form.duration.value, 10);
        const year = form.year.value;
        const summary = form.summary.value.trim();

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
            Swal.fire(
                "Error",
                "Summary must have at least 10 characters!",
                "error"
            );
            return;
        }

        const movieAdd = {
            poster,
            title,
            genre,
            duration,
            year,
            rating,
            summary,
            email: userEmail,
        };

        console.log(movieAdd);

        //Send the data to the server

        fetch("https://movie-portal-server-brown.vercel.app/addmovie", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(movieAdd),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire("Success", "Movie added successfully!", "success");
                form.reset();
                setRating(0); // Reset the rating
            })
            .catch((err) => {
                Swal.fire("Error", "Failed to add movie!", "error");
            });




    };

    return (
        <div>
            <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Add a Movie</h1>
                <form onSubmit={handleAddMovie} className="space-y-4">
                    {/* Movie Poster */}
                    <div className="form-control">
                        <label className="label font-medium">Movie Poster URL</label>
                        <input
                            type="text"
                            name="poster"
                            placeholder="Enter Poster URL"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Movie Title */}
                    <div className="form-control">
                        <label className="label font-medium">Movie Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter Movie Title"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Genre */}
                    <div className="form-control">
                        <label className="label font-medium">Genre</label>
                        <select
                            name="genre"
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Genre</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                            <option value="horror">Horror</option>
                        </select>
                    </div>

                    {/* Duration */}
                    <div className="form-control">
                        <label className="label font-medium">Duration (minutes)</label>
                        <input
                            type="number"
                            name="duration"
                            placeholder="Enter Duration"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Release Year */}
                    <div className="form-control">
                        <label className="label font-medium">Release Year</label>
                        <select
                            name="year"
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>

                    {/* Dynamic Rating */}
                    <div className="form-control">
                        <label className="label font-medium">Rating</label>
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating}
                            size={25}
                            fillColor="gold"
                            emptyColor="gray"
                        />
                    </div>

                    {/* Summary */}
                    <div className="form-control">
                        <label className="label font-medium">Summary</label>
                        <textarea
                            name="summary"
                            placeholder="Enter Movie Summary"
                            className="textarea textarea-bordered w-full"
                        ></textarea>
                    </div>

                    {/* Email */}
                    <div className="form-control">
                        <label className="label font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="User Email"
                            value={userEmail}
                            readOnly
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary w-full">
                        Add Movie
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addmovies;
