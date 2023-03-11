'use client'
import Auth from './components/auth/Auth'
import {  useSession } from "next-auth/react"
import TopHeader from './components/sections/topHead'
import { useEffect, useState } from 'react'
import LoanForm from './components/forms/forms'
import Loading from './components/loading'
import Landing from './components/landing/Landing'


//const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {data:session}= useSession()
  //const { session } = params

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 1000)
  },[])
  //console.log(session)
  
  return (
    <div className='w-[90%] m-auto'>
      {
        loading && <Loading /> 
      }
      {
        session ? <div>
          <Landing />
        </div>
          :
          (<div>
            <TopHeader />
            
            <Auth/>
          </div>)
      }
      
    </div>
  )
}

