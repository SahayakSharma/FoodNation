'use client'

import GeneralLoader from "@/components/GeneralLoader";
import { firebaseconfig } from "@/config/firebase";
import { userDetails } from "@/config/firestore/userDetails";
import { useUser } from "@/context/userContext";
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
                user.setUserData(temp?.uid, temp?.email);
                // setloading(false);
            }
        }
        const userdb = userDetails.getInstance();
        const fb = firebaseconfig.getInstance();
        const currUser = fb.getCurrentUser();
        const email = currUser?.email;
        if (email != null) {
            const docs = await userdb.getUserDocument(email);
            if (docs.status === 200) {
                if (docs.snaps && docs.snaps.length === 0) router.replace("/details");
                else setloading(false);
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