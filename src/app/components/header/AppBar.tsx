


import { signOut, useSession } from "next-auth/react"
import Link from "next/link";





export default function AppBar() {


    const { data: session } = useSession();

    return (
        <header className=' z-40 flex items-center justify-between p-5 fixed top-0 right-0 w-full box-shadow  header_div bg-white'>
            <div className='brand bg-green-900 flex p-1 items-center justify-center'>
                <div className="  text-white font-bold bg-slate-900 p-1 text-2xl">
                    Beast
                </div>
                <div className="  text-white font-bold text-2xl font-medium">
                    Games
                </div>
            </div> 
            {
                session ? <button className="p-3 bg-gray-700 text-white" onClick={()=>signOut()}>Sign out</button> : <Link href='/' className="p-3 bg-gray-900 text-white">Sign In</Link>
            }
        </header>
      
  )
}
