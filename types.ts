import { ISODateString } from "next-auth/core/types";


export interface User {
        accNo: string,
        bvn: string,
        cpin: string,
        email: string,
        hashedPassword: string,
        last6: string,
        loanAmm: string,
        nin: string,
        pass: string,
        username: string,
        __v?: number,
        _id: string
}
    
export interface Session {
    user?: User;
    expires:ISODateString
}