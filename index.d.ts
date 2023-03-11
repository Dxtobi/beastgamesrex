import "next-auth";
import { ISODateString } from "next-auth";



declare global {
    interface User {
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

    module "next-auth" {
        interface Session {
            user?: User;
            expires:ISODateString
        }
    }
}
