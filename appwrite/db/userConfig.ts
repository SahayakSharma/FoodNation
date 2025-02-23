import { Client, Databases, Query,ID } from "appwrite";
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

    async listUserDetails(email:string){
        const userdetails=await db.listDocuments(
            dbconfig.DATABASE_ID,
            dbconfig.USER_COLLECTION_ID,
            [
                Query.equal('email',email)
            ]
        )
        return userdetails;
    }

    async createNewUser(userName:string,userRole:string,fullName:string,phoneNumber:number,email:string){
        const newuser=await db.createDocument(
            dbconfig.DATABASE_ID,
            dbconfig.USER_COLLECTION_ID,
            ID.unique(),
            {username:userName,user_role:userRole,full_name:fullName,phone_number:phoneNumber,email:email}
        )
        return newuser;
    }
}