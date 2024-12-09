const About = () => {
    return (
        <div className="bg-base-100 py-12 px-6 lg:px-20">
            <h1 className="text-4xl font-bold text-center text-primary mb-8">About Movie Portal</h1>
            <div className="card bg-base-200 shadow-xl p-8">
                <p className="text-lg leading-relaxed text-justify mb-6">
                    Welcome to <span className="font-bold text-primary">Movie Portal</span>, your one-stop destination for everything related to movies! Whether you’re a film enthusiast, casual viewer, or someone looking for the next big hit, we’ve got you covered. Our platform is designed to make your movie-watching journey engaging, fun, and hassle-free.
                </p>

                <h2 className="text-2xl font-semibold text-secondary mb-4">What We Offer</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>
                        **Explore Movies:** Browse through an extensive collection of movies across various genres, languages, and regions.
                    </li>
                    <li>
                        **Curated Lists:** Discover trending movies, top-rated classics, and hidden gems curated just for you.
                    </li>
                    <li>
                        **User Reviews:** Read reviews from our community and share your thoughts on your favorite films.
                    </li>
                    <li>
                        **Personalized Watchlists:** Create your own movie watchlist to keep track of what you want to see next.
                    </li>
                    <li>
                        **Add & Share:** Contribute to our growing database by adding your favorite movies and sharing them with friends.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed text-justify mb-6">
                    At <span className="font-bold text-primary">Movie Portal</span>, we believe in connecting people through the power of storytelling. Our mission is to bring together a community of movie lovers where everyone can find, share, and celebrate the magic of cinema. Whether it’s blockbuster hits, indie masterpieces, or documentaries, we’re here to showcase the diversity and richness of the film world.
                </p>

                <h2 className="text-2xl font-semibold text-secondary mb-4">Why Choose Movie Portal?</h2>
                <p className="text-lg leading-relaxed text-justify mb-6">
                    Our platform is not just about movies; it’s about creating an experience. With a user-friendly interface, high-quality visuals, and regularly updated content, we ensure that your time on our website is both enjoyable and rewarding. Here are some reasons why you’ll love using Movie Portal:
                </p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Easy navigation and search options to quickly find movies you love.</li>
                    <li>Regularly updated content to keep you informed about the latest releases.</li>
                    <li>Community-driven recommendations and reviews for better decision-making.</li>
                    <li>Completely free to use, with no hidden charges!</li>
                </ul>

                <h2 className="text-2xl font-semibold text-secondary mb-4">Join the Community</h2>
                <p className="text-lg leading-relaxed text-justify">
                    Become a part of our growing community of movie lovers. Sign up today to enjoy all our features, create your watchlist, and start exploring. Together, let’s celebrate the beauty and magic of cinema!
                </p>
            </div>
        </div>
    );
};

export default About;
