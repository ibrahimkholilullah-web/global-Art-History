import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import UserAuthToken from "../Page/UserAuthToken";

const AddArtifact = () => {
const {user} = useContext(AuthContext)
const navigate = useNavigate()
const useAuthAxiose = UserAuthToken() 
  const handleSubmit = async (e) => {
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
        like_count : 0 
    }
    try{
    const res =  await useAuthAxiose.post(`/artifact`, formData)
    if(!res.statusText === "OK") return
    from.reset()
    navigate('/allArtifacts')
    toast.success('success Fully Add Artifact data',{
     position: "top-left"
   })
    } catch (error) {
        toast.error('Failed to load artifacts. Please try again.')
    }


   }
  return (
    <div className="px-4 min-h-screen">
       <Helmet>
            <title>Add Artifact | G. art H. </title>
        </Helmet>
        <h2 className="text-2xl font-bold text-[#D1AF78] font-style text-center border-b-2 w-44 mx-auto border-r-2 border-[#D1AF78] mb-6">Add Artifact</h2>

      <div className=" container mx-auto p-6  bg-blue-gray-900 border text-[#D1AF78] rounded-lg shadow-md mt-10">
      <form onSubmit={handleSubmit} className="space-y-4 font-style">
       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Artifact Name
          </label>
          <input
            type="text"
            name="artifactName"
            required
            placeholder="Enter artifact name"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Artifact Image (URL)
          </label>
          <input
            type="url"
            name="artifactImage"
            required
            placeholder="Enter image URL"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

        <div className="md:flex gap-5 items-center">
        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Artifact Type
          </label>
          <select
            name="artifactType"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            required
            placeholder="Enter historical context"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        </div>

       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Created At
          </label>
          <input
            type="text"
            name="createdAt"
            required
            placeholder="E.g., 100 BC"
            className="w-full mt-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Discovered At
          </label>
          <input
            type="text"
            name="discoveredAt"
            required
            placeholder="E.g., 1799"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Discovered By
          </label>
          <input
            type="text"
            name="discoveredBy"
            required
            placeholder="Enter discoverer's name"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Present Location
          </label>
          <input
            type="text"
            name="presentLocation"
            required
            placeholder="Enter present location"
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

        <div className="md:flex gap-5 items-center">
        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
            Artifact Adder
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            readOnly
            className="w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-[#D1AF78]">
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
          className="w-full px-4 py-2 bg-[#302E2F] hover:bg-blue-gray-900 text-white font-semibold rounded-lg hover:border"
        >
          Add Artifact
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddArtifact;
