import React,{createContext,useContext,useState} from "react";

export type activeType={
    activeState?:string|null,
    activePage?:string|null,
    setactiveState:(state:string | null)=>void,
    setactivePage:(page:string | null)=>void
}

const ActiveContext=createContext<activeType | null>(null);

export const ActiveContextProvider=({children}:{children:React.ReactNode})=>{
    const [activeState,setactiveState]=useState<string|null>("Profile");
    const [activePage,setactivePage]=useState<string|null>("View Public Profile");

    return(
        <ActiveContext.Provider value={{activeState,activePage,setactivePage,setactiveState}}>
            {children}
        </ActiveContext.Provider>
    )
}

export const useActiveState=()=>{
    const activestate=useContext(ActiveContext);
    return activestate;
}