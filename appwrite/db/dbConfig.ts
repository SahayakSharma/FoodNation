import { Client,Databases } from "appwrite";
// import { client } from "../auth/authConfig";
export const client = new Client()
    // .setEndpoint(process.env.APPWRITE_ENDPOINT || "")
    .setProject("67b8c80200282242b739")
export const db=new Databases(client);

export const dbconfig={
    DATABASE_ID:process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
    USER_COLLECTION_ID:process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID || ""
}