import React, { useState, useEffect } from "react";
import FeaturedMovies from "./FeaturedMovies";
import Banner from "./Banner";
import Faq from "./Faq";
import Partner from "./Partner";

const Carousel = () => {
    const [isDark, setIsDark] = useState(() => {
        // Get the initial theme from local storage or default to light
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        // Update the `dark` class on the root element
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            {/* Theme Toggle Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded bg-blue-500 text-white dark:bg-yellow-400 dark:text-black transition-colors duration-300"
                >
                    {isDark ? "Light Mode" : "Dark Mode"}
                </button>
            </div>

            {/* Banner */}
            <Banner></Banner>

            {/* Featured Movies */}
            <FeaturedMovies></FeaturedMovies>

            {/* FAQ */}
            <Faq></Faq>

            {/* Partner */}
            <Partner></Partner>
        </div>
    );
};

export default Carousel;

