import { useUser } from "@/context/userContext";
import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { ActiveContextProvider } from "@/context/activeContext";
import Context from "./Context";
export default function Admin() {
    const user = useUser();
    return (
        <ActiveContextProvider>
            <div className="w-full h-screen flex overflow-hidden">
                <Sidebar />
                <Context/>
            </div>
        </ActiveContextProvider>
    )
}