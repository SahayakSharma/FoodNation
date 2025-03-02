import React from "react";
import Image from "next/image";
export default function SidebarCollapsed(){
    return(
        <div className="w-full h-full py-[20px]">
            <div className="w-full h-[50px] flex justify-center items-center cursor-pointer">
                <Image src="/sidebar/user.png" alt="" width={20} height={20} title="Profile"/>
            </div>
            <div className="w-full h-[50px] flex justify-center items-center cursor-pointer">
                <Image src="/sidebar/store.png" alt="" width={20} height={20} title="Store"/>
            </div>
            <div className="w-full h-[50px] flex justify-center items-center cursor-pointer">
                <Image src="/sidebar/items.png" alt="" width={20} height={20} title="Products"/>
            </div>
        </div>
    )
}