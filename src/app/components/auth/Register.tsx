'use client'
import Axios, { AxiosRequestConfig } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"




export default function Register({setLoggedIn, login, loading, setLoading}:{setLoading:any, setLoggedIn:any, login:boolean, loading:boolean}) {
    
    
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
  const onSubmitForm = async () => {
    if (password == '' || password == '') {
        return
      }
        setLoading(!loading)
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/register",
                data: JSON.stringify({username, email, password}),
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await Axios(config)

            if (res.status === 200) {
                setLoading(!loading)
                setLoggedIn(!login)
          }
            if (res) {
              setLoading(false)
            }

            console.log(res)
        } catch (error) {
           // const { message } = error
            console.log('this error:::', error)
        }
    }


  return (
      <div>
          
          <div className=" mt-2 flex flex-col gap-2">
          
              <input
                className=" w-[100%] border-2 border-[#252324] p-3"
                  placeholder="phone"
                  name="phone"
                  onChange={(e)=>setUserName(e.target.value)}
                  
            />
              <input
                  name="email"
                className="  w-[100%] border-2 border-[#252324] p-3"
                  placeholder="email"
                  onChange={(e)=>setEmail(e.target.value)}
            />
              <input
                  name="password"
                  className="  w-[100%] border-2 border-[#252324] p-3"
          placeholder="password"
          type={'password'}
                  onChange={(e)=>setPassword(e.target.value)}
              />
              
              <button onClick={onSubmitForm} className=' bg-[#161516] text-white p-3'>Register</button>
          </div>
          
          
      
      </div>
      
  )
}
