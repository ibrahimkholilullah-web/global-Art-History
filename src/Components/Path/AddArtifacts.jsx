
const AddArtifact = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Artifact Added Successfully!");
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add Artifact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Name
          </label>
          <input
            type="text"
            name="artifactName"
            required
            placeholder="Enter artifact name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Image (URL)
          </label>
          <input
            type="url"
            name="artifactImage"
            required
            placeholder="Enter image URL"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

        <div className="md:flex gap-5 items-center">
        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Type
          </label>
          <select
            name="artifactType"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Historical Context
          </label>
          <textarea
            name="historicalContext"
            required
            placeholder="Enter historical context"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        </div>

       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Created At
          </label>
          <input
            type="text"
            name="createdAt"
            required
            placeholder="E.g., 100 BC"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Discovered At
          </label>
          <input
            type="text"
            name="discoveredAt"
            required
            placeholder="E.g., 1799"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

       <div className="md:flex gap-5 items-center">
       <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Discovered By
          </label>
          <input
            type="text"
            name="discoveredBy"
            required
            placeholder="Enter discoverer's name"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Present Location
          </label>
          <input
            type="text"
            name="presentLocation"
            required
            placeholder="Enter present location"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       </div>

        <div className="md:flex gap-5 items-center">
        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Artifact Adder
          </label>
          <input
            type="text"
            readOnly
            className="w-full mt-1 px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:w-6/12">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            readOnly
            className="w-full mt-1 px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifact;
