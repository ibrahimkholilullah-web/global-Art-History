import React, { useEffect, useState } from "react";
import ArtifactCart from "../Page/ArtifactCart";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import UserAuthToken from "../Page/UserAuthToken";
import axios from "axios";

const AllArtifacts = () => {
  const useAuthAxios = UserAuthToken(); // Assuming this provides an Axios instance with auth
  const [artifact, setArtifact] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const { data } = await useAuthAxios.get(`/artifact?searchParams=${encodeURIComponent(search)}`
        );
        setArtifact(data);
      } catch (err) {
        toast.error("Failed to load artifacts. Please try again.");
      }
    };

    fetchArtifacts();
  }, [search, useAuthAxios]); // Dependency array includes `search` and `useAuthAxios`

  return (
    <div>
      <Helmet>
        <title>All Artifacts | Your Website</title>
      </Helmet>
      <div className="md:flex items-center px-4 justify-between">
        <p className="text-sm bg-[#D98855] w-24 rounded-3xl text-center p-1 ibrahim">
          {artifact?.length || 0} Art{artifact?.length !== 1 && "s"}
        </p>
        <div>
          <label className="input ibrahim my-4 mx-auto text-black border border-[#D98855] input-bordered flex items-center gap-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artifact.length > 0 ? (
          artifact.map((artifactCart) => (
            <ArtifactCart key={artifactCart._id} card={artifactCart} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No artifacts found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
