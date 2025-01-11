import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import UserAuthToken from './UserAuthToken';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import Loading from '../PrivatedRouter/Loading';
import ditailsImg from "../../assets/Update Photo/ditails page.jpg"
const ViewDetails = () => {
    const { user } = useContext(AuthContext);
    const [artifact, setArtifact] = useState({});
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state
    const { id } = useParams();
    const useAuthAxios = UserAuthToken();

    useEffect(() => {
        fetchData();
        checkLikedState();
    }, [id]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { data } = await useAuthAxios.get(`/artifact/${id}`);
            setArtifact(data);
        } catch (error) {
            toast.error("Failed to fetch artifact data.");
        } finally {
            setLoading(false);
        }
    };

    const checkLikedState = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/likes/check`, {
                params: { email: user?.email, artId: id },
            });
            setLiked(data.liked);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const toggleLike = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_URL}/likes/toggle`, {
                artifactImage: artifact.artifactImage,
                artifactName: artifact.artifactName,
                presentLocation: artifact.presentLocation,
                artId: artifact._id,
                email: user?.email,
                AuthEmail: artifact.email,
            });

            setLiked(response.data.liked);
            fetchData();
            toast.success(response.data.message, {
                position: "top-center",
            });
        } catch (error) {
            toast.error(error.response?.data || "An error occurred.");
        }
    };

    const {
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
        like_count,
    } = artifact || {};

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <div className='min-h-screen container mx-auto'>
            <Helmet>
                <title>Artifact Details</title>
            </Helmet>
             <div >
             <div
                className="hero h-64  mx-auto"
                style={{
                  backgroundImage: `url(${ditailsImg})`,
                }}>
                <div className="hero-overlay bg-black/75"></div>
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Products Ditails</h1>
                    <p className="mb-5">
                     <Link to='/allArtifacts'>All Products</Link> / <span className='text-[#CCAB75] font-style border-b-2 border-[#CCAB75]'>Products Ditails</span>
                    </p>
                  </div>
                </div>
              </div>
             <section className="p-6 dark:bg-gray-100 text-white bg-gray-800 dark:text-gray-800">
                <div className="container lg:flex gap-6 mx-auto  items-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="lg:w-1/2   py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                        <div className='md:w-11/12 rounded-xl shadow-2xl mx-auto bg-[#302E2F] p-6'>
                        <span className="block text-[#BD9E6D] text-lg mb-2 dark:text-violet-600">{artifactName}</span>
                        <h1 className="md:text-3xl text-[#777274] font-style font-bold dark:text-gray-900">
                            {createdAt}, {discoveredAt}
                        </h1>
                        <p className="my-8 text-left text-[#CCAB75]">
                            <span className="font-medium dark:text-gray-900">{historicalContext}</span>
                        </p>
                        <div className='text-[#D98853] space-y-2 font-style '>
                            <p className="text-sm text-left">Artifact Type: {artifactType}</p>
                            <p className="text-sm text-left">Discovered By: {discoveredBy}</p>
                            <p className="text-sm text-left">Present Location: {presentLocation}</p>
                            <p className="text-sm text-left">Name: {name}</p>
                            <p className="text-sm text-left">Email: {email}</p>
                            <button
                                onClick={toggleLike}
                                type="button"
                                className={`flex items-center p-1 my-4 space-x-1.5 ${
                                    liked ? "text-red-500" : "text-gray-500"
                                }`}
                            >
                                {liked ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        aria-label="Unlike"
                                        className="w-4 h-4 fill-current"
                                    >
                                        <path d="M462.3 62.7C407 7.4 324.8 24 256 79.3 187.2 24 105 7.4 49.7 62.7-16.6 128.9 23.1 230.8 91.6 285.3L239 430.7a24 24 0 0034 0l147.4-145.4c68.5-54.5 108.2-156.4 42.9-222.6z"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        aria-label="Like"
                                        className="w-4 h-4 fill-current"
                                    >
                                        <path d="M256 469.3c-9.1 0-17.8-3.3-24.6-9.4L24.6 256.9C-27 211.2-12.6 136.4 44.4 95.6 92.5 60.6 156.7 71.5 204.8 114.2L256 160l51.2-45.8c48.1-42.7 112.3-53.6 160.4-18.6 57 40.8 71.4 115.6 19.8 161.3L280.6 459.9c-6.8 6.1-15.5 9.4-24.6 9.4z"></path>
                                    </svg>
                                )}
                                <span>{like_count}</span>
                            </button>
                            </div>
                        </div>
                    </div>
                    <img src={artifactImage} alt="" className="object-cover lg:w-1/2 h-[490px] rounded-md object-center p-2 xl:col-span-3" />
                </div>
                
            </section>
             </div>
        </div>
    );
};

export default ViewDetails;
