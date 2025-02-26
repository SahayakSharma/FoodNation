'use client'
import GeneralLoader from "@/components/GeneralLoader";
import { auth, firebaseconfig } from "@/config/firebase";
import { userDetails } from "@/config/firestore/userDetails";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function DetailLayout({ children }: { children: React.ReactNode }) {
    const [loading, setloading] = useState<boolean>(true);
    const router = useRouter();
    async function getuserdetails() {
        const userdb = userDetails.getInstance();
        const fb=firebaseconfig.getInstance();
        const user=fb.getCurrentUser();
        const email=user?.email;
        if (email!=null) {
            const docs = await userdb.getUserDocument(email);
            if (docs.status === 200) {
                console.log(docs);
                if (docs.snaps && docs.snaps.length > 0) router.replace("/home");
                else setloading(false);
            }
            else {
                alert(docs.message);
                fb.signout();
            }
        }
    }
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (!data) {
                router.replace("/auth/signin");
                return;
            }
            else{
                getuserdetails();
            }
        })
        
    }, [onAuthStateChanged])
    return (
        loading ? <GeneralLoader /> : <>{children}</>
    )
}