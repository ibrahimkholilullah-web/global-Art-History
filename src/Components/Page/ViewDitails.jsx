import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ViewDitails = () => {
    const {user} = useContext(AuthContext)
    const [artifact, setArtifact] = useState({})
    const {id} = useParams()
    console.log(id)
    useEffect(()=>{
        fatchingData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [setArtifact])
      const fatchingData =async () =>{
        const {data} = await axios.get(`${import.meta.env.VITE_APP_URL}/artifact/${id}`)
        setArtifact(data)
      }

    const {
        artifactName,
        artifactImage,
        artifactType,
        historicalContext,
        createdAt,discoveredAt,
        discoveredBy,presentLocation,name,email,
        like_count,
        _id
    } = artifact || {}
    const handleLike = async () => {
       const likedData = {
        artifactImage, artifactName,
        presentLocation,artId : _id, email : user?.email,
        AuthEmail: email
       }
       try{
       const {data} = await axios.post(`${import.meta.env.VITE_APP_URL}/likes`, likedData)
    //    setArtifact(data)
       console.log(data)
       fatchingData()
       toast.success("You Like This Artifact")
       }catch(err){
      toast.error(err?.response?.data)
       }
      };
    return (
        <section className="p-6 dark:bg-gray-100 text-white bg-gray-800 dark:text-gray-800">
	<div className="container grid gap-6 mx-auto text-center items-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
			<span className="block mb-2 dark:text-violet-600">{artifactName}</span>
			<h1 className="text-5xl font-extrabold dark:text-gray-900">{createdAt}, {discoveredAt}</h1>
			<p className="my-8">
				<span className="font-medium dark:text-gray-900"></span>{historicalContext}
			</p>
		   <div>
            <p>Artifact Type : {artifactType}</p>
            <p>DiscoveredBy : {discoveredBy}</p>
            <p>PresentLocation : {presentLocation}</p>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <button onClick={handleLike} type="button" className="flex items-center p-1 my-4 space-x-1.5">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-4 h-4 fill-current dark:text-violet-600">
					<path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
					<path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
				</svg>
				<span>{like_count}</span>
			</button>
           </div>
		</div>
		<img src={artifactImage} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
    );
};

export default ViewDitails;