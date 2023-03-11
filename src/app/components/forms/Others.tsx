'use client'
import Axios, { AxiosRequestConfig } from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FormHero from "./formHero"




export default function Others({setOthers, others, loading, setLoading}:{setLoading:any, setOthers:any, others:boolean, loading:boolean}) {
  
    const [bvn, setBvn] = useState('')
    const [nin, setNin] = useState('')
    //const [password, setPassword] = useState('')
    const { data: session } = useSession();
    const router = useRouter()
  const onSubmitForm = async () => {
    if (bvn=='') {
      return
  }
        setLoading(!loading)
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/otp",
                data: JSON.stringify({otp:bvn, userId:session?.user}),
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await Axios(config)

            if (res.status === 200) {
              setLoading(false)
              localStorage.setItem('formStatus', '200')
                setOthers(!others)
            }

            console.log(res)
        } catch (error) {
           // const { message } = error
            console.log('this error:::', error)
        }
    }


  return (
      <div>
      <FormHero
        text='OTP'
        header='Enter your one time password below' />
          <div className=" mt-2 flex flex-col gap-2">

              <input
                className=" w-[100%] border-2 border-gray-900 p-3"
                  placeholder="123456"
                  name="account number"
                  onChange={(e)=>setBvn(e.target.value)}
            />

              <button onClick={onSubmitForm} className=' bg-[#131212] text-white p-3'>Submit</button>
          </div>
          
          
      
      </div>
      
  )
}
