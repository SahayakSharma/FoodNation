export type newUser={
    authID:string | null,
    email:string| null,
    userRole:string | null,
    fullName:string | null,
    phoneNumber:number | null,
}

export type userType={
    authId:string,
    createdAt:Date,
    email:string,
    fullName:string,
    phoneNumber:number,
    updatedAt:Date,
    userRole:string
}