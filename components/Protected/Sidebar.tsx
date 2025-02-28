import React,{useState} from "react";
import Image from "next/image";
import SidebarContent from "./Sidebar/SidebarContent";
export default function Sidebar(){
    const [sidebarOpen, setsidebarOpen] = useState<boolean>(true);
    return(
        <div className={`${sidebarOpen ? 'w-[20%]' : 'w-[50px]'} h-full shadow-sm shadow-black flex flex-col justify-end py-[10px]`} >
                {
                    sidebarOpen ? <SidebarContent/> : null
                }
                {
                    sidebarOpen ? 
                    <div className="w-full h-[50px] flex justify-end px-[20px] items-center border-t-2 border-[#d6d6d6]">
                        <Image src="/sidebar/collapse.png" alt="image here" className="w-[30px] h-[30px] cursor-pointer" width={50} height={50} onClick={() => setsidebarOpen(!sidebarOpen)} title="Collapse"/>
                    </div> :
                    <div className="w-full h-[50px] flex items-center justify-center border-t-2 border-[#d6d6d6]">
                        <Image src="/sidebar/expand.png" alt="image here" className="w-[30px] h-[30px] cursor-pointer" width={50} height={50} onClick={() => setsidebarOpen(!sidebarOpen)} title="Expand"/>
                    </div>
                }
            </div>
    )
}