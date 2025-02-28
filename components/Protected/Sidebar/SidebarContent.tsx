import React from "react";
import SidebarContentMapper from "./SidebarContentMapper";
import { adminSidebarOptions } from "@/helper/adminRoutes/adminPages";


export default function SidebarContent(){
    return(
        <div className="w-full h-full p-[20px]">
            <SidebarContentMapper content={adminSidebarOptions}/>
        </div>
    )
}