import { Client, Account, ID } from "appwrite";

export const client = new Client()
    // .setEndpoint(process.env.APPWRITE_ENDPOINT || "")
    .setProject(process.env.APPWRITE_PROJECT_ID || " ")

export const account = new Account(client);
export class appwriteConfig {
    private static instance: appwriteConfig;

    private constructor() {
        console.log("initialized...")
    }

    public static getInstance() {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new appwriteConfig;
        return this.instance;
    }

    async registerUsingEmailPassword(email: string, password: string) {
        try {
            const user = await account.create(ID.unique(), email, password);
            console.log("user : ", user);
        }
        catch (err) {
            throw new Error("there is an error")
        }
    }

    async loginUsingEmailPassword(email: string, password: string) {
        try {
            const session = await account.createEmailPasswordSession(email, password)
            if (session) {
                console.log("session : ", session);
            }
        }
        catch (err) {
            console.log("error in login  : ", err);
        }
    }

    async getCurrentUser() {
        const currentUser = await account.get();
        console.log("this is current user ", currentUser);
    }

    async isLoggedIn() {
        try {
            const user = await account.get();
            if (user) return true;
            return false;
        }
        catch (err) {
            return false;
        }
    }

    async logout(){
        try{
            await account.deleteSession("current");
        }
        catch (err) {
            console.log("error in logout : ",err)
        }

    }

}