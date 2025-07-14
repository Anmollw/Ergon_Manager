import React, { createContext , useState , useEffect, Children} from "react";
import axiosInstance from "../utils/axiosinstance";
import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext();  //using this to avoid prop drilling

const UserProvider = ({children})=>{
     const [user,setUser] = useState(null);
    const [loading,setLoading]= useState(true);
    
    useEffect(()=>{
        if (user) return;   //used to exit early if user exists

        const accessToken = localStorage.getItem("token");
        if(!accessToken){
            setLoading(false); // early exit #2
            return;
        }

        const fetchUser = async()=>{
            try {
                const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
                setUser(response.data)
            } catch (error) {
                console.log("User not authenticated" , error);
                clearUser();
            } finally {
                setLoading(false);
            }
        }

        fetchUser(); // before calling -> checked for user existence and access token.

    },[]);

    const updateUser = (userdata) => {
        setUser(userdata);
        localStorage.setItem("token", userdata.token); //to save
        setLoading(false);
    }

    const clearUser = ()=>{
        setUser(null);
        localStorage.removeItem('token');
    }

    return (
        <UserContext.Provider value={{user, loading, updateUser, clearUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider