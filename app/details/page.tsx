'use client'
import React, { useEffect, useState } from "react";
import { newUser } from "@/helper/types/userDetailsTypes";
import { firebaseconfig } from "@/config/firebase";
import { userDetails } from "@/config/firestore/userDetails";

export default function Details() {
    const [details, setdetails] = useState<newUser>({
        authID: null,
        fullName: null,
        phoneNumber: null,
        userRole: "admin",
        email: null
    })
    async function handledetailsubmit() {
        try {
            
            if (details.email && details.authID) {
                const userdb = userDetails.getInstance();
                const newuser = await userdb.createUserDocument(details);
                console.log(newuser);
            }
            else{
                console.log(details.authID,details.email)
                console.log("emial and id not there")
            }
        }
        catch (err) {
            if (err instanceof Error) alert(err.message)
            else alert("unknown error occured")
        }
    }

    useEffect(()=>{
        const fb = firebaseconfig.getInstance();
            const user = fb.getCurrentUser();
            const userid = user?.uid;
            const email = user?.email;
            if (userid && email) {
                setdetails(() => ({ ...details, email: email, authID: userid }))
            }
    },[])
    return (
        <div>
            <input type="text" placeholder="full name" onChange={(e) => {
                setdetails(() => ({ ...details, fullName: e.target.value }))
            }} />
            <input type="text" placeholder="phone number" onChange={(e) => {
                setdetails(() => ({ ...details, phoneNumber: parseInt(e.target.value) }))
            }} />
            <button onClick={handledetailsubmit}>submit details</button>
        </div>
    )
}