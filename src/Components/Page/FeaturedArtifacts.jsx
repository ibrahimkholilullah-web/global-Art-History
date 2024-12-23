import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
  const [artifact, setArtifact] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/artifact`);
      // Sort by like_count in descending order and take top 6
      const sortedArtifacts = data.sort((a, b) => b.like_count - a.like_count).slice(0, 6);
      setArtifact(sortedArtifacts);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    }
  };

  return (
    <div className="featured-artifacts">
      <h2 className="text-center my-4 text-lg md:text-3xl text-[#D98855] font-bold border-b-2 py-2">Featured Artifacts</h2>
      <div className="artifact-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {artifact.map((artifact) => (
          <div key={artifact._id} className="max-w-xs border-2 border-white p-1 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="md:text-3xl text-lg font-semibold text-[#D98855] tracking-wide">{artifact.artifactName}</h2>
                <button type="button" className="flex items-center p-1 space-x-1.5">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-4 h-4 fill-current dark:text-violet-600">
					<path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
					<path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
				</svg>
				<span>{artifact.like_count}</span>
			</button>
              </div>
              <div className="divider divider-accent">Accent</div>

              <Link
                to={`/viewDitails/${artifact._id}`}
                className="flex items-center justify-center  w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/allArtifacts" className="btn my-2 bg-[#D98855] text-white border-2">
        View All Artifacts <FaAngleDoubleRight />
      </Link>
    </div>
  );
};

export default FeaturedArtifacts;
