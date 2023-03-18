'use client'
import Axios, { AxiosRequestConfig } from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"




export default function Register() {
    
    
    const [code, setUserName] = useState('')
    const [platform, setEmail] = useState('')
    const [club, setPassword] = useState('')
    const [ods, setOds] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
  const onSubmitForm = async () => {
    if (club == '' || ods == '' ) {
        return
      }
        setLoading(!loading)
        try {
          //  values.image = profile?.image;
            //console.log(values);
            const config: AxiosRequestConfig = {
                url: "/api/newods",
                data: JSON.stringify({ods, club, platform, code}),
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                }
            };

            const res = await Axios(config)

            if (res.status === 200) {
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


  return (
      <div>
          
          <div style={styles.container}>
          
              <input
                style={styles.input}
                  placeholder="CODE"
                  name="code"
                  onChange={(e)=>setUserName(e.target.value)}
                  
            />
              <input
                  name="platform"
                  style={styles.input}
                  placeholder="platform: 1xbet"
                  onChange={(e)=>setEmail(e.target.value)}
            />
              <input
                  name="clubs"
                  style={styles.input}
                    placeholder="clubs"
                    type={'text'}
                    onChange={(e)=>setPassword(e.target.value)}
              />
              <input
                  name="ods"
                  style={styles.input}
                    placeholder="ods"
                    type={'text'}
                    onChange={(e)=>setOds(e.target.value)}
              />
              <button onClick={onSubmitForm} style={styles.input}>send</button>
          </div>
          
          
      
      </div>
      
  )
}


const styles = {
    container: {
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column'
    },
    input: {
        padding: '1rem',
        border: '1px solid',
        fontSize: 'larger'
    }
}