'use client'
import Axios, { AxiosRequestConfig } from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


interface ods {
  code:string,
  ods: string,
  platform: string,
}

export default function GamesOds() {
    
    
    
    const [ods, setOds] = useState(Array<ods>)
    const [loading, setLoading] = useState(true)
    
  const getOds = async () => {
        setLoading(!loading)
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/getods",
                method: "GET",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await Axios(config)

            if (res.status === 200) {
              console.log(res.data)
              setOds(res.data)
              
                setLoading(!loading)
              
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

    useEffect(() => {
        getOds()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (
      <div className="w-full flex flex-col gap-3" >
      {
        ods.length !== 0 && ods.map((e, i) => (
          <div className="w-full" key={i}>
            <div className="flex justify-between items-center w-full">
              <div className="text-xl font-bold text-blue-500">{e.platform}</div>
              <div>ODDS: {e.ods}</div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="text-xl font-bold text-blue-500">{e.code}</div>
              <a className="text-xl font-bold bg-blue-500 p-3 rounded-xl text-white" href="https://ng.1x001.com?bf=64158a08ca442_4236730751">BET</a>
            </div>
          </div>
        ))
      }
      
      <a className="text-xl w-full font-bold bg-blue-500 p-3 rounded-xl text-white my-2 text-center" href="https://t.me/beastgametips">GET FIXED PREDICTIONS</a>
      </div>
      
  )
}


