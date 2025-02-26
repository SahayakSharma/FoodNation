'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import GeneralLoader from "@/components/GeneralLoader";
import { UserContextProvider, useUser } from "@/context/userContext";
import ChildLayout from "./childLayout";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const usercontext = useUser();
    const [loader, setloader] = useState<boolean>(true);
    const router = useRouter();
    async function checkAuthStatus() {

    }
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                setloader(false);
            }
            else {
                router.replace("/auth/signin");
            }
        })
    }, [onAuthStateChanged])
    return (
        loader ? <GeneralLoader /> : <>
            <UserContextProvider>
                <ChildLayout>
                    {children}
                </ChildLayout>
            </UserContextProvider>
        </>
    )
}