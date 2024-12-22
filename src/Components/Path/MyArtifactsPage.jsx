import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyAddCard from '../Page/MyAddCard';

const MyArtifactsPage = () => {
    const { user } = useContext(AuthContext);
    const [myAddArt, setMyAddArt] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email]);

    const fetchData = async () => {
        try {
            if (user?.email) {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/artifact/${user?.email}/status`);
                setMyAddArt(data);
            }
        } catch (error) {
            console.error("Error fetching liked artifacts:", error);
        } finally {
            setLoading(false);
        }
    };
    console.log(myAddArt.length)
    if (loading) {
        return <p>Loading liked artifacts...</p>;
    }
    // const formData = {
    //     artifactName,
    //     artifactImage,
    //     artifactType,
    //     historicalContext,
    //     createdAt,discoveredAt,
    //     discoveredBy,presentLocation,name,email,
    //     like_count : 0 
    // }
    return (
        <div className="overflow-x-auto">
            {myAddArt.length > 0 ? (
                <table className="table">
                    {/* Table Header */}
                    <thead>
                        <tr> 
                            <th>No</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Like Count</th>
                            <th>E & D</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        myAddArt.map((card, inx) => <MyAddCard key={inx} inx={inx} card={card}></MyAddCard>)
                       }
                    </tbody>
                </table>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500">You haven’t liked any artifacts yet.</p>
                </div>
            )}
        </div>
    );
};

export default MyArtifactsPage;