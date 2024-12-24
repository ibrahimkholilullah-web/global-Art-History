import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MyAddCard from '../Page/MyAddCard';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import UserAuthToken from '../Page/UserAuthToken';
import Loading from '../PrivatedRouter/Loading';
import nodata from "../../assets/Image/Nodata.png"
const MyArtifactsPage = () => {
    const { user } = useContext(AuthContext);
    const [myAddArt, setMyAddArt] = useState([]);
    const [loading, setLoading] = useState(true);
    const useuseAuthAxiose = UserAuthToken()
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email]);

    const fetchData = async () => {
        try {
            if (user?.email) {
                const { data } = await useuseAuthAxiose.get(`/artifact/${user?.email}/status`);
                setMyAddArt(data);
            }
        } catch (error) {
            console.error("Error fetching liked artifacts:", error);
        } finally {
            setLoading(false);
        }
    };
    if (loading) {
        return <Loading></Loading>
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
       <div>
         <Helmet>
            <title>My Artifact sPage</title>
        </Helmet>
        <h1 className='text-2xl m-2 font-bold'>My Artifacts Page</h1>
        <p className='m-2 text-sm bg-[#D98855] w-20 text-center rounded-xl'>{myAddArt.length} Art</p>
         <div className="overflow-x-auto m-2 border p-2 rounded-lg ">
            {myAddArt.length > 0 ? (
                <table className="table">
                    {/* Table Header */}
                    <thead>
                        <tr className='text-[#D98855]'> 
                            <th className='hidden md:table-cell'>No</th>
                            <th>Name</th>
                            <th className='hidden md:table-cell '>Location</th>
                            <th className='hidden md:table-cell '>Like Count</th>
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
                    <img className='mx-auto w-full md:h-[80vh]' src={nodata} alt="" />
                </div>
            )}
        </div>
       </div>
    );
};

export default MyArtifactsPage;