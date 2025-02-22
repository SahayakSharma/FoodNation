import React, { useContext, createContext, useState } from "react";

type UserContextType = {
    userId?: string | null,
    emailId?: string | null,
    full_name?: string | null,
    phone_number?: number | null,
    user_role?: string | null,
    username?: string | null,
    setUserData: (userId: string, emailId: string, full_name: string, phone_number: number, user_role: string, username: string) => void
}
const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [emailId, setEmailId] = useState<string | null>(null);
    const [full_name, setFullName] = useState<string | null>(null);
    const [phone_number, setPhoneNumber] = useState<number | null>(null);
    const [user_role, setUserRole] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);

    function setUserData(userId: string, emailId: string, full_name: string, phone_number: number, user_role: string, username: string) {
        setUserId(userId);
        setUsername(username)
        setFullName(full_name)
        setEmailId(emailId)
        setPhoneNumber(phone_number)
        setUserRole(user_role)
    }
    return (
        <UserContext.Provider value={{ userId,emailId,full_name,phone_number,user_role,username,setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser= () =>{
    const usercontext=useContext(UserContext);
    return usercontext;
}