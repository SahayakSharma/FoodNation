import { adminSidebarContentType } from "../types/sidebarContentType";


// to add : isSubchild, Component

export const adminSidebarOptions: adminSidebarContentType[] = [
    {
        title: "Profile",
        imageURL: "/sidebar/user.png",
        ischild: false,
        child: [
            {
                title: "View Public Profile",
                imageURL: "/sidebar/view.png",
                ischild: true,
                child: []
            },
            {
                title: "Update Profile",
                imageURL: "/sidebar/edit.png",
                ischild: true,
                child: []
            },
            {
                title: "Settings",
                imageURL: "/sidebar/settings.png",
                ischild: true,
                child: []
            },
        ]
    },
    {
        title: "Stores",
        imageURL: "/sidebar/store.png",
        ischild: false,
        child: [
            {
                title: "Create New Store",
                imageURL: "/sidebar/AddNew.png",
                ischild: true,
                child: []
            },
            {
                title: "Manage Stores",
                imageURL: "/sidebar/manage.png",
                ischild: true,
                child: []
            }
        ]
    },
    {
        title: "Products",
        imageURL: "/sidebar/items.png",
        ischild: false,
        child: [
            {
                title: "Add New Product",
                imageURL: "/sidebar/AddNew.png",
                ischild: true,
                child: []
            },
            {
                title: "Manage Products",
                imageURL: "/sidebar/manage.png",
                ischild: true,
                child: []
            }
        ]
    }

]