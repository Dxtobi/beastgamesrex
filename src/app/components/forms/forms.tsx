'use client'
import { useState, useEffect } from "react";
import Loading from "../loading";
import EndPoint from "./endpage";

import Loan from "./loan";
import Others from "./Others";

    //import Others from "./Others";
    //const { data: session } = useSession();





export default function LoanForm({setMenuHandler}:{setMenuHandler:any}) {
    const [loan, setLoggedIn] = useState(true)
    const [go_next, setNext] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
       const check = () => {
           const data = localStorage.getItem('formStatus') 
           if(data)setNext(true)
        }
        check()
    },[])
    //console.log(loading)
    if (go_next) {
        return <EndPoint />
    }
    return (
        <div className="flex flex-col gap-4">
            
            {
                loading && <Loading />
            }
            {
                !loan ? <Others loading={loading} setLoading={setLoading} setOthers={setNext} others={go_next} />  :<Loan setOthers={setLoggedIn} others={loan} loading={loading} setLoading={setLoading}/>
            }
            <button onClick={setMenuHandler} className=' bg-slate-600 text-white p-4'>Cancel</button>
        </div>
        
    )
  }
  