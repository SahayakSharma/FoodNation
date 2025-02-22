import { Client, Databases, Query } from "appwrite";
import { db, dbconfig } from "./dbConfig";
export class userConfig{
    private static instance:userConfig;

    private constructor(){}

    public static getInstance(){
        if(!this.instance){
            this.instance = new userConfig();
        }
        return this.instance;
    }

    async listUserDetails(){
        const userdetails=await db.listDocuments(
            dbconfig.DATABASE_ID,
            dbconfig.USER_COLLECTION_ID,
            [
                Query.equal('email','sahayaksharma3@gmail.com')
            ]
        )
        return userdetails;
    }
}