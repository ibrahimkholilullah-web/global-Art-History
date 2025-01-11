import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import UserAuthToken from '../Page/UserAuthToken';
 import nodata  from "../../assets/Image/Nodata.png"
import toast from 'react-hot-toast';
import Loading from '../PrivatedRouter/Loading';
const LikedArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState([]);
    const [loading, setLoading] = useState(true);
    const useAuthAxiose = UserAuthToken()
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email]);

    const fetchData = async () => {
        try {
            if (user?.email) {
                const { data } = await useAuthAxiose.get(`/likes/${user?.email}`);
                setLikes(data);
            }
        } catch (error) {
            toast.error('Error fetching liked artifacts')
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='min-h-screen container mx-auto'>
             <Helmet>
            <title>Liked Artifacts | G. art H. </title>
        </Helmet>
        <h1 className='text-2xl border-b-2 border-l-2 border-[#D98848] p-2 w-60 mx-auto my-8 text-[#D1AF78] m-2 font-bold'>My Liked Artifacts</h1>
        <p className='m-2 text-sm bg-[#D98855] text-white font-style w-20 text-center rounded-xl'>{likes.length} Like</p>
            <div className="overflow-x-auto m-2 border p-2 rounded-lg">
            {likes.length > 0 ? (
                <table className="table">
                    {/* Table Header */}
                    <thead>
                        <tr className='text-[#D98855]'> 
                            <th>No</th>
                            <th>Name</th>
                            <th className="hidden md:table-cell">Location</th>
                            <th className="hidden md:table-cell">User Email</th>
                            <th className="hidden md:table-cell">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {likes.map((like,inx) => (
                            <tr key={like._id} className='font-style'>
                                <td className='text-[#D98855] '>{inx + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3 text-white">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={like.artifactImage}
                                                    alt="Artifact"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{like.artifactName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className=' hidden md:table-cell text-white'>
                                    {like.presentLocation}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{like.AuthEmail}</span>
                                </td>
                                <td className=' hidden md:table-cell text-white'>{like.email}</td>
                                <td className=' hidden md:table-cell '>
                                    <Link
                                        to={`/viewDitails/${like.artId}`}
                                        className="btn btn-ghost btn-xs text-[#D98855]"
                                    >
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center py-10">
                    <p className='text-[#D98848] uppercase font-style'>No More DAta</p>
                 </div>
            )}
        </div>
        </div>
    );
};

export default LikedArtifacts;
