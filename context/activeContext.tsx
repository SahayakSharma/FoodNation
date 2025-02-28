import React,{createContext,useContext,useState} from "react";

export type activeType={
    activeState?:string|null;
    setactiveState:(state:string | null)=>void
}

const ActiveContext=createContext<activeType | null>(null);


export const ActiveContextProvider=({children}:{children:React.ReactNode})=>{
    const [activeState,setactiveState]=useState<string|null>(null);

    return(
        <ActiveContext.Provider value={{activeState,setactiveState}}>
            {children}
        </ActiveContext.Provider>
    )
}

export const useActiveState=()=>{
    const activestate=useContext(ActiveContext);
    return activestate;
}