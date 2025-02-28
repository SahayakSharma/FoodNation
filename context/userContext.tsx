import React, { useContext, createContext, useState } from "react";

type UserContextType = {
    userId?: string | null,
    emailId?: string | null,
    role?:string | null,
    docId?:string | null,
    setuserid:(userId:string)=>void, 
    setuseremail:(email:string)=>void,
    setuserrole:(userRole:string)=>void,
    setUserData: (userId: string, emailId: string,role:string) => void,
    setdocid:(docid:string)=>void
}
const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<string | null>(null);
    const [emailId, setEmailId] = useState<string | null>(null);
    const [role,setRole]=useState<string|null>(null);
    const [docId,setdocId]=useState<string | null>(null);
    function setUserData(userId: string, emailId: string,role:string) {
        setUserId(userId);
        setEmailId(emailId)
        setRole(role);
    }
    function setuseremail(email:string){
        setEmailId(email);
    }
    function setuserid(userid:string){
        setUserId(userid);
    }
    function setuserrole(userRole:string){
        setRole(userRole);
    }
    function setdocid(docid:string){
        setdocId(docid);
    }
    return (
        <UserContext.Provider value={{ userId,emailId,role,docId,setuseremail,setuserid,setuserrole,setUserData,setdocid}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser= () =>{
    const usercontext=useContext(UserContext);
    return usercontext;
}