import React, { useRef, useState } from "react";
import {LuUser, LuUpload, LuTrash} from "react-icons/lu";

const ProfilePhotoSelector = ({image,setImage})=>{
    const inputRef = useRef(null);
    const [previewUrl,setPreviewUrl] = useState(null);

    const handleImageChange = (event)=>{
        const file = event.target.files[0];
        if(file){
            setImage(file);

            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    }
    return (
        <div>
            pfp Selector
        </div>
    )
}

export default ProfilePhotoSelector