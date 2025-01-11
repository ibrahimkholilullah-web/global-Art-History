import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const UpdatePage = () => {
  const { id } = useParams(); // Extract the artifact ID from the URL
  const navigate = useNavigate();
  const [singleData, setSingleData] = useState({}); // State to hold artifact data
  const { user } = useContext(AuthContext); // Fetch the logged-in user's data

  // Fetch artifact details
  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/artifact/${id}/viewDitaisl`);
        setSingleData(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchArtifact();
  }, [id]);

  // Handle artifact update form submission
  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const artifactName = form.artifactName.value;
    const artifactImage = form.artifactImage.value;
    const discoveredAt = form.discoveredAt.value;
    const createdAt = form.createdAt.value;
    const historicalContext = form.historicalContext.value;
    const artifactType = form.artifactType.value;
    const discoveredBy = form.discoveredBy.value;
    const presentLocation = form.presentLocation.value;
    const name = form.name.value;
    const email = form.email.value;

    const updatedArtifact = {
      artifactName,
      artifactImage,
      artifactType,
      historicalContext,
      createdAt,
      discoveredAt,
      discoveredBy,
      presentLocation,
      name,
      email,
    };

    try {
      await axios.patch(`${import.meta.env.VITE_APP_URL}/artifact/${id}`, updatedArtifact);
      toast.success("Artifact updated successfully!");
      navigate("/myartifactpage");
    } catch (err) {
      console.error("Error updating artifact:", err);
      toast.error("Failed to update artifact. Please try again.");
    }
  };

  return (
    <div className="mx-auto container min-h-screen p-6 bg-[#263238] font-style rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-[#D1AF78] font-style text-center border-b-2 w-52 mx-auto border-r-2 border-[#D1AF78] mb-6">
        Update Artifact
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="md:flex gap-5 items-center">
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Artifact Name</label>
            <input
              type="text"
              defaultValue={singleData.artifactName}
              name="artifactName"
              required
              placeholder="Enter artifact name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg"
            />
          </div>
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Artifact Image (URL)</label>
            <input
              type="url"
              defaultValue={singleData.artifactImage}
              name="artifactImage"
              required
              placeholder="Enter image URL"
              className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="md:flex gap-5 items-center">
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Artifact Type</label>
            {singleData.artifactType && (
              <select
                name="artifactType"
                defaultValue={singleData.artifactType}
                className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg"
              >
                <option value="Tools">Tools</option>
                <option value="Weapons">Weapons</option>
                <option value="Documents">Documents</option>
                <option value="Writings">Writings</option>
              </select>
            )}
          </div>
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Historical Context</label>
            <textarea
              name="historicalContext"
              defaultValue={singleData.historicalContext}
              required
              placeholder="Enter historical context"
              className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg"
            ></textarea>
          </div>
        </div>
        <div className="md:flex gap-5 items-center">
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Created At</label>
            <input
              type="text"
              defaultValue={singleData.createdAt}
              name="createdAt"
              required
              placeholder="E.g., 100 BC"
              className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg"
            />
          </div>
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Discovered At</label>
            <input
              type="text"
              defaultValue={singleData.discoveredAt}
              name="discoveredAt"
              required
              placeholder="E.g., 1799"
              className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg"
            />
          </div>
        </div>
        <div className="md:flex gap-5 items-center">
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Discovered By</label>
            <input
              type="text"
              defaultValue={singleData.discoveredBy}
              name="discoveredBy"
              required
              placeholder="Enter discoverer's name"
              className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg"
            />
          </div>
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Present Location</label>
            <input
              type="text"
              defaultValue={singleData.presentLocation}
              name="presentLocation"
              required
              placeholder="Enter present location"
              className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg"
            />
          </div>
        </div>
        <div className="md:flex gap-5 items-center">
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Artifact Adder</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              className="w-full mt-1 px-4 py-2 border border-gray-300 text-black bg-gray-100 rounded-lg"
            />
          </div>
          <div className="md:w-6/12">
            <label className="block text-sm font-medium text-[#D1AF78]">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email || ""}
              readOnly
              className="w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-gray-100 rounded-lg"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#D98855] text-white font-semibold rounded-lg hover:bg-[#263238] hover:border"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdatePage;
