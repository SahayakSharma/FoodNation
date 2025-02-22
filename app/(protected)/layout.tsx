'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { appwriteConfig } from "@/appwrite/auth/authConfig";
import GeneralLoader from "@/components/GeneralLoader";
import { UserContextProvider, useUser } from "@/context/userContext";
import ChildLayout from "./childLayout";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    const usercontext = useUser();
    const [loader, setloader] = useState<boolean>(true);
    const router = useRouter();
    async function checkAuthStatus() {
        const temp = appwriteConfig.getInstance();
        const status = await temp.isLoggedIn();
        if (status === false) {
            router.replace("/auth/signin");
            return;
        }
        else setloader(false);
    }
    useEffect(() => {
        checkAuthStatus();

    })
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