import { FunctionComponent } from "react"

export type adminSidebarContentType={
    title:string,
    imageURL:string,
    ischild:boolean,
    child:adminSidebarContentType[]
}