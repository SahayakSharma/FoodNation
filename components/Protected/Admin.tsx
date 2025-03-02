import { useUser } from "@/context/userContext";
import React from "react";
import Sidebar from "./Sidebar";
import { ActiveContextProvider } from "@/context/activeContext";
import Content from "./Content";
export default function Admin() {
    const user = useUser();
    return (
        <ActiveContextProvider>
            <div className="w-full h-screen flex overflow-hidden">
                <Sidebar />
                <Content/>
            </div>
        </ActiveContextProvider>
    )
}