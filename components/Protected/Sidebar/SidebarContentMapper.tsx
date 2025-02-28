import { useActiveState } from "@/context/activeContext";
import { adminSidebarContentType } from "@/helper/types/sidebarContentType";
import React from "react";
import Image from "next/image";

export default function SidebarContentMapper({ content }: { content: adminSidebarContentType[] }) {
    const active=useActiveState();
    return (
        <div className="w-full h-full">
            {
                content.map((data, index) => {
                    return (
                        <div key={index} className="w-full mt-[10px] overflow-hidden font-light">
                            <div className="w-full h-[50px] rounded-md flex items-center pl-[10px] cursor-pointer" style={{backgroundColor:active?.activeState===data.title ? "#d6d6d6":""}} onClick={()=>active?.setactiveState(data.title)}>
                                <Image src={data.imageURL} alt="image here" width={30} height={30} className="w-[20px] h-[20px]"/>
                                <p className="pl-[10px]">{data.title}</p>
                            </div>
                            <div className="ml-[20px]">
                                {
                                    data.child.length > 0 && active?.activeState===data.title ? <SidebarContentMapper content={data.child} /> : null
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}