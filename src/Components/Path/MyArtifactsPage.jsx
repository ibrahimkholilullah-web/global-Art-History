import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyAddCard from '../Page/MyAddCard';
import toast from 'react-hot-toast';

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
    const handleDelete = async (id) =>{
        try{
           const {data} =  await axios.delete(`${import.meta.env.VITE_APP_URL}/artifact/${id}`)
           toast.success('Sucessfully Delete Data')
           fetchData()
        }catch(err){
            toast.error(err.message)
        }
        
       }
       const updateDelete =  (id) =>{
           toast(
               (t) => (
                 <div className='flex gap-5 items-center'>
                   <div>
                     <p>Are You <b>Sure ? </b></p>
                   </div>
                   <div className='flex gap-2'>
                     <button className='bg-red-500 text-white py-2 rounded-md px-3'
                     onClick={()=> {
                       toast.dismiss(t.id)
                       handleDelete(id)}
                     }
                     >Yes</button>
                     <button className='bg-green-500 text-white py-2 rounded-md px-3'
                      onClick={() => toast.dismiss(t.id)}>Dismiss</button>
                     </div>
                 </div>
               ),
              
             );
   
       }
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
                        myAddArt.map((card, inx) => <MyAddCard updateDelete={updateDelete} key={inx} inx={inx} card={card}></MyAddCard>)
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