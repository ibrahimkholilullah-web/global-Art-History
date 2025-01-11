import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { IoBookmarksOutline } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
const FeaturedArtifacts = () => {
  const [artifact, setArtifact] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/artifact/home`);
      // Sort by like_count in descending order and take top 6
      // const sortedArtifacts = data.sort((a, b) => b.like_count - a.like_count).slice(0, 6);
      setArtifact(data);
    } catch (error) {
      toast.error("Error fetching artifacts:", error);
    }
  };

  return (
    <div className="featured-artifacts container mx-auto ibrahim">
      <div className="my-8">
      <p className="text-white uppercase text-sm font-style text-center border-b-2 border-l-2 border-[#D98855] w-56 mx-auto ">Most Populer Featured Artifacts</p>
      <h2 className="text-center my-4 text-lg md:text-4xl text-[#D98855]  py-2 font-bold ">Featured Artifacts</h2>
      </div>
      <div className="artifact-cards grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artifact.map((artifact) => (
          <div
         
          key={artifact._id} className=" bg-black/50 ibrahim border-b-2 border-[#D98855] shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="object-cover group-hover:scale-110 
                transition object-center w-full h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col text-white justify-between p-7 space-y-8">
              <div className="space-y-2">
              <div className="flex justify-start items-center gap-4 text-brown-200">
              <p className="bg-[#3D3D3D] w-10 flex rounded-full items-center justify-center h-10"><IoBookmarksOutline size={25} /></p>
              <h2 className="md:text-xl text-[#D1AF78] font-style text-lg font-semibold  tracking-wide">{artifact.artifactName}</h2>
              </div>
              <p className="pt-2">{artifact.historicalContext.slice(0,70)}...</p>
                <button type="button" className="flex rounded-md text-[#D1AF78] items-center space-x-1.5">
                <AiFillLike size={25}  />

				<span>{artifact.like_count}</span>
			</button>
              </div>

              <Link
                to={`/viewDitails/${artifact._id}`}
                className="flex items-center  font-style gap-4 hover:text-[#D1AF78]  w-full font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Keep Reading  <FaAngleDoubleRight className="text-[#D1AF78]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/allArtifacts" className="btn border-none pt-10 rounded-none mx-auto flex w-52 my-8  bg-[#D98855] hover:bg-[#D1AF78] text-white border-2">
        View More Artifact <FaAngleDoubleRight />
      </Link>
    </div>
  );
};

export default FeaturedArtifacts;
