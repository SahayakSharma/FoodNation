import { Databases } from "appwrite";
import { client } from "../auth/authConfig";

export const db=new Databases(client);

export const dbconfig={
    DATABASE_ID:process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
}