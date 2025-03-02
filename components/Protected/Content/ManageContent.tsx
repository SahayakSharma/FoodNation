import { useActiveState } from "@/context/activeContext";
import React from "react";
import ViewProfile from "./Profile/ViewProfile";
import EditProfile from "./Profile/EditProfile";
import Settings from "./Profile/Settings";
import CreateNewStore from "./Store/createnewstore/CreateNewStore";
import ManageStore from "./Store/ManageStore";
import CreateNewProduct from "./Products/CreateNewProduct";
import ManageProducts from "./Products/ManageProducts";


export default function ManageContent(){
    const active=useActiveState();

    switch (active?.activePage) {
        case "View Public Profile":
            return <ViewProfile/>
        case "Update Profile":
            return <EditProfile/>
        case "Settings":
            return <Settings/>;
        case "Create New Store":
            return <CreateNewStore/>;
        case "Manage Stores":
            return <ManageStore/>;
        case "Add New Product":
            return <CreateNewProduct/>;
        case "Manage Products":
            return <ManageProducts/>;
        default:
            break;
    }
}