import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const AuthAxiose = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})
const UserAuthToken = () => {
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        AuthAxiose.interceptors.response.use(res =>{
            return res
        }, (error)=>{
            if(error.status === 401 || error.status === 401){
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                
            }
            return Promise.reject(error)
        })
    },[])
    return AuthAxiose
};

export default UserAuthToken;