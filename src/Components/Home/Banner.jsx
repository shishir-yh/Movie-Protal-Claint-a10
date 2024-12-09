import React from 'react';

const Banner = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <div className="carousel w-full">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="https://i.ibb.co/K9xSBH1/900w-Cgw2-Js-Wbz-PY.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 1 Image 1"
                        />
                        <img
                            src="https://i.ibb.co/pxYSBhB/1131w-GG58-WASM1-E.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 1 Image 2"
                        />
                        <img
                            src="https://i.ibb.co/K6MBJbH/1131w-0-OZ8-QXub3-I8.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 1 Image 3"
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 hidden sm:flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="https://i.ibb.co/tqywfdX/1131w-6r-Jq-X4g1-Mew.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 2 Image 1"
                        />
                        <img
                            src="https://i.ibb.co/7kNp7SV/1131w-8mm0-ZPa-PBfo.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 2 Image 2"
                        />
                        <img
                            src="https://i.ibb.co/sKxHr0R/1131w-AOBSIAm-LWOs.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 2 Image 3"
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 hidden sm:flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="https://i.ibb.co/JK9W2k1/1131w-L8p5t-Gj-Rpj8.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 3 Image 1"
                        />
                        <img
                            src="https://i.ibb.co/jkfL6HY/1131w-O62l-Nf-Sw-F8w.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 3 Image 2"
                        />
                        <img
                            src="https://i.ibb.co/Q9NKTH8/1131w-qk48mt0mosc.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 3 Image 3"
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 hidden sm:flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="grid grid-cols-3 gap-4">
                        <img
                            src="https://i.ibb.co/t8cXX2X/1131w-r-Lty9dwh-GG4.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 4 Image 1"
                        />
                        <img
                            src="https://i.ibb.co/QnCLD63/1131w-x-GUFM83-DMu-U.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 4 Image 2"
                        />
                        <img
                            src="https://i.ibb.co/dLRmnnW/1200w-YVSJ1-V1-BJec.webp"
                            className="w-auto h-[400px] mx-auto object-contain"
                            alt="Slide 4 Image 3"
                        />
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 hidden sm:flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;
