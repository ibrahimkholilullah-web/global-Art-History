import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slider1 from "../../assets/Image/slider1.jpg"
import slider2 from "../../assets/Image/slider2.avif"
import slider3 from "../../assets/Image/slider3.jpg"
const Banner = () => {
    return (
        <Carousel className=" md:h-[80vh]">
        <div className="relative h-full w-full">
          <img
            src={slider1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                "Your Digital Gateway to Historical Artifact Management"
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
              Organize and explore historical treasures like never before. Our tracker ensures every artifact’s story is preserved, from its origin to its discovery, connecting the past to the present.
              </Typography>
              
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={slider2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Safeguarding History with Precision
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
               Track, manage, and showcase invaluable historical artifacts with ease. This tracker empowers historians, researchers, and enthusiasts to preserve the cultural heritage of humanity through detailed records and interactive features.
              </Typography>
              
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={slider3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Where Legacy Meets Technology
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
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