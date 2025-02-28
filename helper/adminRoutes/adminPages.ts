import { adminSidebarContentType } from "../types/sidebarContentType";


// to add : isSubchild, Component

export const adminSidebarOptions:adminSidebarContentType[]=[
    {
        title:"Profile",
        imageURL:"/sidebar/user.png",
        child:[]
    },
    {
        title:"Stores",
        imageURL:"/sidebar/store.png",
        child:[
            {
                title:"Create New Store",
                imageURL:"/sidebar/AddNew.png",
                child:[]
            },
            {
                title:"Manage Stores",
                imageURL:"/sidebar/manage.png",
                child:[]
            }
        ]
    },
    {
        title:"Products",
        imageURL:"/sidebar/items.png",
        child:[
            {
                title:"Add New Product",
                imageURL:"/sidebar/AddNew.png",
                child:[]
            },
            {
                title:"Manage Products",
                imageURL:"/sidebar/manage.png",
                child:[]
            }
        ]
    }

]