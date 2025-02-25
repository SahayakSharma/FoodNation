import React, { useContext, createContext, useState } from "react";

type UserContextType = {
    userId?: string | null,
    emailId?: string | null,
    setUserData: (userId: string, emailId: string) => void
}
const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [emailId, setEmailId] = useState<string | null>(null);

    function setUserData(userId: string, emailId: string) {
        setUserId(userId);
        setEmailId(emailId)
    }
    return (
        <UserContext.Provider value={{ userId,emailId,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser= () =>{
    const usercontext=useContext(UserContext);
    return usercontext;
}