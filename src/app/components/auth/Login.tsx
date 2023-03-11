'use client'
import Axios, { AxiosRequestConfig } from "axios"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"




export default function Register({loading, setLoading}:{setLoading:any, loading:boolean}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()
  const onSubmitForm = async () => {
    if (password == '' || password == '') {
      return
    }
        setLoading(true)
        const res: any =await signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
            callbackUrl: `${window.location.origin}`
        }) 
      if (res) {
        setLoading(false)
      }
    }


  return (
      <div>
          
          <div className=" mt-2 flex flex-col gap-2">
            <input
                className="  w-[100%] border-2 border-[#252324] p-3"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name='email'
            />
              <input
                  name="password"
                  className="  w-[100%] border-2 border-[#252324] p-3"
          placeholder="password"
          type={'password'}
                  onChange={(e)=>setPassword(e.target.value)}
              />
              
              <button onClick={onSubmitForm} className=' bg-[#151415] text-white p-3'>Login</button>
          </div>

      </div>
      
  )
}
