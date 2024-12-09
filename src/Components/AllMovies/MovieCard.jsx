import { NavLink } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="flex flex-col border p-4 rounded-lg shadow-lg">
            {/* Movie Poster */}
            <div className="">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                />
            </div>

            {/* Movie Details */}
            <div className="flex-grow">
                <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
                <p className="mb-1">
                    <strong>Genre:</strong> {movie.genre}
                </p>
                <p className="mb-1">
                    <strong>Duration:</strong> {movie.duration} minutes
                </p>
                <p className="mb-1">
                    <strong>Year:</strong> {movie.year}
                </p>
                <p className="mb-4">
                    <strong>Rating:</strong> {movie.rating}/5
                </p>

                {/* Movie Summary */}
                <p className="mb-4">
                    <strong>Summary:</strong> {movie.summary ? movie.summary : "No summary available."}
                </p>

                {/* "See Details" Button */}
                <div className="flex gap-4">
                    <NavLink to={`/seedetails/${movie._id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </NavLink>

                    {/* "Update Movie" Button */}
                    <NavLink to={`/updateMovie/${movie._id}`}>
                        <button className="btn btn-secondary">Update Movie</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

