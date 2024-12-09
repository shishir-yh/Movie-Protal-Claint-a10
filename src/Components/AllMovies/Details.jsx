import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Details = () => {
    const seeDetails = useLoaderData();
    const navigate = useNavigate();

    const {
        _id,
        poster,
        title,
        genre,
        duration,
        year,
        rating,
        summary,
        email
    } = seeDetails;

    // we are the delete the specific movie:
    const handleDelete = (_id) => {
        console.log('the id is', _id)

        Swal.fire({
            title: "Do you want Delete the item",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://movie-portal-server-brown.vercel.app/seedetails/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "The item has been deleted.", "success")
                                .then(() => {
                                    navigate('/allmovies'); // Use only the relative path
                                });
                        } else {
                            Swal.fire("Error!", "Failed to delete the item.", "error");
                        }
                    })


            } else if (result.isDenied) {
                Swal.fire("item is not deleted", "", "info");
            }
        });
    }


    // we are here contro the my-favourite movie

    const handleFavourite = (_id, poster, title, genre, duration, year, rating, summary, email) => {
        console.log("Adding to favorites:", _id, title, email);

        // Prepare the favorite data
        const favoriteData = {
            movieId: _id,
            poster: poster,
            title: title,
            genre: genre,
            duration: duration,
            year: year,
            rating: rating,
            summary: summary,
            userEmail: email,
            addedAt: new Date().toISOString(),
        };

        // Send POST request to the server
        fetch("https://movie-portal-server-brown.vercel.app/addToFavorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(favoriteData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Added!", "The movie has been added to your favorites.", "success")
                        .then(() => {
                            navigate('/allmovies'); // Use only the relative path
                        });
                } else {
                    Swal.fire("Error!", "Failed to add the movie to your favorites.", "error");
                }
            })

    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
                {/* Movie Poster */}
                <div className="mb-4">
                    <img
                        src={poster}
                        alt={title}
                        className="w-full rounded-lg h-64 object-cover"
                    />
                </div>

                {/* Movie Details */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <p className="text-gray-600 mb-2">
                        <strong>Genre:</strong> {genre}
                    </p>
                    <p className="text-gray-600 mb-2">
                        <strong>Duration:</strong> {duration} minutes
                    </p>
                    <p className="text-gray-600 mb-2">
                        <strong>Release Year:</strong> {year}
                    </p>
                    <p className="text-gray-600 mb-4">
                        <strong>Rating:</strong> {rating}/5
                    </p>
                    <p className="text-gray-700 mb-6">
                        <strong>Summary:</strong> {summary}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleFavourite(_id,
                            poster,
                            title,
                            genre,
                            duration,
                            year,
                            rating,
                            summary,
                            email)}
                    >
                        Add to Favourite
                    </button>
                    <button
                        className="btn btn-error bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
