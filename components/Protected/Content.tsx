import { useActiveState } from "@/context/activeContext";
import React from "react";
import ViewProfile from "./Content/Profile/ViewProfile";
import Settings from "./Content/Profile/Settings";
import ManageContent from "./Content/ManageContent";


export default function Content(){

    const active=useActiveState();
    
    return(
        <div className="flex-1 p-[20px]">
            <ManageContent/>
        </div>
    )
}