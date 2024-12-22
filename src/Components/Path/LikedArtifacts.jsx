import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LikedArtifacts = () => {
    const { user } = useContext(AuthContext);
    const [likes, setLikes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email]);

    const fetchData = async () => {
        try {
            if (user?.email) {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/likes/${user?.email}`);
                setLikes(data);
            }
        } catch (error) {
            console.error("Error fetching liked artifacts:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading liked artifacts...</p>;
    }

    return (
        <div>
             <Helmet>
            <title>Liked Artifacts | G. art H. </title>
        </Helmet>
            <div className="overflow-x-auto">
            {likes.length > 0 ? (
                <table className="table">
                    {/* Table Header */}
                    <thead>
                        <tr> 
                            <th>No</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>User Email</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {likes.map((like,inx) => (
                            <tr key={like._id}>
                                <td>{inx + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={like.artifactImage}
                                                    alt="Artifact"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{like.artifactName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {like.presentLocation}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{like.AuthEmail}</span>
                                </td>
                                <td>{like.email}</td>
                                <td>
                                    <Link
                                        to={`/viewDitails/${like.artId}`}
                                        className="btn btn-ghost btn-xs"
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
                    <p className="text-gray-500">You haven’t liked any artifacts yet.</p>
                </div>
            )}
        </div>
        </div>
    );
};

export default LikedArtifacts;
