import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const images = [
  "https://www.tallengestore.com/cdn/shop/products/BeautyAndTheBeast-LiveAction-HollywoodEnglishMoviePoster_3f70710e-5d7c-4b01-8aa3-ee9b40961e58.jpg?v=1625220679?text=Slide+1",
  "https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg?text=Slide+2",
  "https://i2-prod.liverpoolecho.co.uk/incoming/article9593610.ece/ALTERNATES/s1227b/MPP_LEC_060715_Gerrard_014.jpg?text=Slide+3",
  "https://c4.wallpaperflare.com/wallpaper/869/847/751/movies-hollywood-movies-wallpaper-preview.jpg?text=Slide+4",
  "https://e0.pxfuel.com/wallpapers/267/497/desktop-wallpaper-movie-tv-series-posters-tv-series-hollywood.jpg?text=Slide+5",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            {/* Image */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-xl shadow-lg h-[600px]"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40 text-white text-center px-6 pointer-events-none rounded-xl">
              <h1 className="text-[12vw] md:text-[6vw] font-extrabold drop-shadow-lg leading-tight">
                BIOSCOPE
              </h1>
              <p className="text-[4vw] md:text-[2vw] font-semibold mt-4 drop-shadow-md">
                One Platform. Endless Entertainment.
              </p>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
