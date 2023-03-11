'use client'
import { useState } from "react";
import Loading from "../loading";
import Login from "./Login";
import Register from "./Register";

    //import Register from "./Register";
    //const { data: session } = useSession();





export default function Auth() {
    const [login, setLoggedIn] = useState(true)
    const [loading, setLoading] = useState(false)
    console.log(loading)
    return (
        <div className="flex flex-col gap-4">
            {
                loading && <Loading />
            }
            {
                !login ? <Register loading={loading} setLoading={setLoading} setLoggedIn={setLoggedIn} login={login} />  :<Login loading={loading} setLoading={setLoading}/>
            }
            <div className="text-center w-[100%] p-3">
                OR
            </div>
            {
                login ? <button className="bg-[#868786] text-white w-[100%] p-3" onClick={() => setLoggedIn(!login)}>Register</button>
                      : <button className="bg-[#868786] text-white w-[100%] p-4" onClick={() => setLoggedIn(!login)}>Login</button>
            }
        </div>
        
    )
  }
  