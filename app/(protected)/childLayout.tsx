'use client'

import GeneralLoader from "@/components/GeneralLoader";
import { firebaseconfig } from "@/config/firebase";
import { userDetails } from "@/config/firestore/userDetails";
import { useUser } from "@/context/userContext";
import { userType } from "@/helper/types/userDetailsTypes";
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"


export default function ChildLayout({ children }: { children: React.ReactNode }) {

    const [loading, setloading] = useState<boolean>(true);
    const user = useUser();
    const router=useRouter();
    async function fillcontext() {
        if (user?.emailId === null) {
            const fb = firebaseconfig.getInstance();
            const temp = fb.getCurrentUser();
            if (temp?.email && temp?.uid) {
                user.setuserid(temp?.uid);
                user.setuseremail(temp?.email);
            }
        }
        const userdb = userDetails.getInstance();
        const fb = firebaseconfig.getInstance();
        const currUser = fb.getCurrentUser();
        const email = currUser?.email;
        if (email != null) {
            const docs = await userdb.getUserDocument(email);
            let arr:DocumentData[]=[];
            docs.snaps?.forEach((data)=>{
                if(user?.docId==null) user?.setdocid(data.id);
                arr.push(data.data())
            });
            const userdetails=arr[0];
            if (docs.status === 200) {
                if (docs.snaps && arr.length === 0) router.replace("/details");
                else{
                    user?.setuserrole(userdetails.userRole)
                    setloading(false);
                }
            }
            else {
                alert(docs.message);
                fb.signout();
            }
        }
    }
    useEffect(() => {
        fillcontext();
    }, [])
    return (
        loading ? <GeneralLoader /> : <>{children}</>
    )
}