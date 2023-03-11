
//import Auth from './components/auth/Auth'
import {  getSession } from "next-auth/react"


import Link from 'next/link'
import TopHeader from "../sections/topHead"


//const inter = Inter({ subsets: ['latin'] })

export default function Main(params: { session: any}) {

  const { session } = params

  console.log('-=-=-===-', session)
  
  return (
    <div className='w-[80%] m-auto'>
      
        <div>
            <TopHeader />
            <Link href='/form'>Get Started</Link>
          </div>
      
      
    </div>
  )
}

export async function getServerSideProps(context: any) {
  //const prisma = new PrismaClient();
  console.log('aloong')
  const session = await getSession(context);
  console.log(">>>>>",session);
  if (!session) {
    return {
      props: {
        session: null
      }, 
    }
  }

  
  //const sessionUser = session?.user as User;
  console.log(session);
  return {
    props: {
      session,
    },
  }
}