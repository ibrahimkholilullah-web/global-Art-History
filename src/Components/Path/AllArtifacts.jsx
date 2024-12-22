import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ArtifactCart from "../Page/ArtifactCart";

const AllArtifacts = () => {
  const artifactData = useLoaderData();
  const [artifact, setArtifact] = useState(artifactData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_URL}/artifact?searchParams=${search}`
        );
        const data = await response.json();
        setArtifact(data);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };

    fetchArtifacts();
  }, [search]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-sm bg-blue-gray-200 w-24 rounded-3xl text-center p-1">
          {artifact.length} Artifact{artifact.length !== 1 && "s"}
        </p>
        <div>
          <label className="input my-4 mx-auto input-bordered flex items-center gap-2">
            <input
              type="text"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artifact?.map((artifactCart) => (
          <ArtifactCart key={artifactCart._id} card={artifactCart} />
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
