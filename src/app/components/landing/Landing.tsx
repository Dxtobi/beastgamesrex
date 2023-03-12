import Link from "next/link"
import { useState } from "react"
import LoanForm from "../forms/forms"
import Choise from "./comps/choise"



const imgs = 'https://www.zenithbank.com/media/1600/zenith-page-header-2-aspire-2500x1000.jpg?anchor=center&mode=crop&width=2500&height=1000&rnd=132014925800000000'

//const inter = Inter({ subsets: ['latin'] })

export default function Landing() {

    const [menu, setMenu] = useState(false)
    const [amount, setAmount] = useState(5)

    function setMenuHandler(arg0: number): void {

        setAmount(arg0)
        setMenu(!menu)
    }

    if (menu) {
        return <LoanForm setMenuHandler={setMenuHandler} />
    }
  return (
      <div className='w-full m-auto'>
          <div className=" mb-4 relative">
              <img src="hero.webp" alt='' className="w-full  object-contain " />
              <div className=" absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center">
                <div className=" text-3xl text-white font-bold text-center">
                    Beast Games Tips Subscriptions
                </div>
              </div>
          </div>
          <div className=" font-bold text-2xl text-center my-4">Supporters</div>
          <Choise />
          <div className=" font-bold text-2xl text-center my-4">Available Subscriptions</div>
          <div className="grid grid-cols-2 gap-4 mt-4">
              <button onClick={()=>setMenuHandler(5)} className=" text-center w-full rounded-lg p-4 bg-green-800 text-white">
                  <div className="font-bold text-xl">NGN5k</div>
                  <div >5+ ods</div>
                  <div>One day</div>
              </button>
              <button onClick={()=>setMenuHandler(15)} className=" text-center w-full rounded-lg p-4 bg-yellow-800 text-white">
                  <div className="font-bold text-xl">NGN15k</div>
                  <div >10+ ods</div>
                  <div>One day</div>
              </button>
              <button onClick={()=>setMenuHandler(25)} className=" text-center w-full rounded-lg p-4 bg-red-800 text-white">
                  <div className="font-bold text-xl">NGN25k</div>
                  <div >15+ ods</div>
                  <div>One day</div>
              </button>

              <button onClick={()=>setMenuHandler(50)} className=" text-center w-full rounded-lg p-4 bg-gray-800 text-white">
                  <div className="font-bold text-xl">NGN50k</div>
                  <div >30+ ods</div>
                  <div>One month</div>
              </button>
          </div>
          
          <div className=" font-bold text-2xl text-center my-4">VIP Games</div>
          <div className=" h-[300px] w-full bg-green-400 flex justify-center items-center rounded-lg flex-col text-white">
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
              <div> loading..</div>
              <div>Subscribe to a package to get games</div>
          </div>

          <div className=" font-bold text-2xl text-center my-4">Games On Telegram</div>
          <a href='https://t.me/beastgametips'>
            <div className=" h-[300px] w-full bg-red-400 flex justify-center items-center rounded-lg flex-col text-white">
                  <div>
                      <img src="https://thumbs.dreamstime.com/b/telegram-logo-icon-voronezh-russia-january-light-blue-round-soft-shadow-171161253.jpg" alt='' className=" w-full"/>
                </div>
            </div>
          </a>
          

          <div className="my-2 w-full flex flex-col ">
            <a href='https://t.me/beastgametips' className="w-full p-3 text-center rounded-lg bg-slate-900 text-white my-4">JOIN TELEGRAM</a>
          </div>
          

          
          
      </div>
  )
}
