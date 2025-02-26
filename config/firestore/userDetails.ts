import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./dbConfig";

import { newUser } from "@/helper/types/userDetailsTypes";


export class userDetails{
    private static instance:userDetails;

    private constructor() {}

    public static getInstance(){
        if(!this.instance){
            this.instance=new userDetails();
        }
        return this.instance;
    }

    async createUserDocument(details:newUser){
        try{
            const newuser=await addDoc(collection(db,"users"),{
                authId:details.authID,
                fullName:details.fullName,
                userRole:details.userRole,
                phoneNumber:details.phoneNumber,
                email:details.email,
                createdAt:Date.now(),
                updatedAt:Date.now()
            })
            return{
                status:200,
                message:"Document written successfully",
                docId:newuser.id
            }
        }
        catch(err){
            if(err instanceof Error){
                return{
                    status:400,
                    message:err.message
                }
            }
            return{
                status:401,
                message:"Unknown Error"
            }
        }
    }

    async getUserDocument(email:string){
        try{
            const q=query(collection(db,"users"),where("email","==",email));
            const snapshot=await getDocs(q);
            snapshot.forEach((data)=>console.log(data))
            return{
                status:200,
                snaps:snapshot.docs,
                message:"document retrieved successfully"
            }
        }
        catch(err){
            if(err instanceof Error){
                return{
                    status:400,
                    message:err.message
                }
            }
            return{
                status:401,
                message:"Unknown Error"
            }
        }
    }
}