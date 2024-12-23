import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdatePage = () => {
    const updateData = useLoaderData()
    const navigate = useNavigate()
    const [update, setUpdate] = useState(updateData)
    const {
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        createdAt,discoveredAt,
        discoveredBy,presentLocation,
        _id
    } = update || {}
    const {user} = useContext(AuthContext)
    const handleUpdate = async (e) => {
        e.preventDefault();
        const from = e.target;
        const artifactName = from.artifactName.value
        const artifactImage = from.artifactImage.value
        const discoveredAt = from.discoveredAt.value
        const createdAt = from.createdAt.value
        const historicalContext = from.historicalContext.value
        const artifactType = from.artifactType.value
        const discoveredBy = from.discoveredBy.value
        const presentLocation = from.presentLocation.value
        const name = from.name.value
        const email = from.email.value
    
        const formData = {
            artifactName,
            artifactImage,
            artifactType,
            historicalContext,
            createdAt,discoveredAt,
            discoveredBy,presentLocation,name,email,
            
        }
            try{
                 await axios.patch(`${import.meta.env.VITE_APP_URL}/artifact/${_id}`, formData)
                toast.success("Update Data Suscfully",{
                    position:"top-center"
                })
                navigate("/myartifactpage")
            }catch(err) {
                toast.error(err.message)
            }

    }
    return (
        <div className=" mx-auto p-6 bg-[#302E2F] rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-white mb-6">Update Artifact</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Artifact Name
          </label>
          <input
            type="text"
            defaultValue={artifactName}
            name="artifactName"
            required
            placeholder="Enter artifact name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Artifact Image (URL)
          </label>
          <input
            type="url"
            defaultValue={artifactImage}
            name="artifactImage"
            required
            placeholder="Enter image URL"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

        <div className="md:flex gap-5 items-center">
        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Artifact Type
          </label>
          {
            artifactType && <select
            name="artifactType"
            defaultValue={artifactType}
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
          }
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            defaultValue={historicalContext}
            required
            placeholder="Enter historical context"
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        </div>

       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Created At
          </label>
          <input
            type="text"
            defaultValue={createdAt}
            name="createdAt"
            required
            placeholder="E.g., 100 BC"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Discovered At
          </label>
          <input
            type="text"
            defaultValue={discoveredAt}
            name="discoveredAt"
            required
            placeholder="E.g., 1799"
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Discovered By
          </label>
          <input
            type="text"
            defaultValue={discoveredBy}
            name="discoveredBy"
            required
            placeholder="Enter discoverer's name"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Present Location
          </label>
          <input
            type="text"
            name="presentLocation"
            defaultValue={presentLocation}
            required
            placeholder="Enter present location"
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

        <div className="md:flex gap-5 items-center">
        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Artifact Adder
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className="w-full mt-1 px-4 py-2 border border-gray-300 text-black bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D98855]">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#D98855] text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Update Artifact
        </button>
      </form>
    </div>
    );
};

export default UpdatePage;