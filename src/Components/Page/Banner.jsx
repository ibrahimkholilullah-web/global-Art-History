import React from 'react';
import { Carousel, Typography } from "@material-tailwind/react";
import slider1 from "../../assets/Image/slider1.jpg";
import slider2 from "../../assets/Image/slider2.avif";
import slider3 from "../../assets/Image/slider3.jpg";

const Banner = () => {
  return (
    <Carousel className="h-[60vh] md:h-[80vh] border-2 border-[#D98855] p-1 rounded-xl">
      {/* Slide 1 */}
      <div className="relative h-full w-full">
        <img
          src={slider1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40">
          <div className="w-11/12 text-center md:w-2/3 lg:w-1/2">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl font-bold"
            >
              "Your Digital Gateway to Historical Artifact Management"
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-sm md:text-lg lg:text-xl opacity-90"
            >
              Organize and explore historical treasures like never before. Our tracker ensures every artifact’s story is preserved, from its origin to its discovery, connecting the past to the present.
            </Typography>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative h-full w-full">
        <img
          src={slider2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/40">
          <div className="w-11/12 pl-4 md:w-2/3 md:pl-12 lg:pl-16">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl font-bold"
            >
              Safeguarding History with Precision
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-sm md:text-lg lg:text-xl opacity-90"
            >
              Track, manage, and showcase invaluable historical artifacts with ease. This tracker empowers historians, researchers, and enthusiasts to preserve the cultural heritage of humanity through detailed records and interactive features.
            </Typography>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative h-full  w-full">
        <img
          src={slider3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/40">
          <div className="w-11/12 pl-4 pb-4 md:w-2/3 md:pl-12 md:pb-12 lg:pl-16 lg:pb-16">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl font-bold"
            >
              Where Legacy Meets Technology
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 text-sm md:text-lg lg:text-xl opacity-90"
            >
              Seamlessly catalog artifacts, visualize historical data, and engage with heritage in a modern, intuitive way. Let technology bring history’s wonders closer to you.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
