import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

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
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/artifact/${user?.email}`);
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
    return (
        <div>
            <h1>Ibrahim</h1>
        </div>
    );
};

export default MyArtifactsPage;