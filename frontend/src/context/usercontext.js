import React, { createContext , useState , useEffect, Children} from "react";
import axiosInstance from "../utils/axiosinstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();

const UserProvider = ({Children})=>{
     const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);
    
    useEffect(()=>{
        if (user) return;

        const accessToken = localStorage.getItem("token");
        if(!accessToken){
            setLoading(false);
        }
    })
}