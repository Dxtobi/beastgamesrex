import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import LoanForm from "../forms/forms"
import GamesOds from "../games"
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
      <div className='w-full m-auto '>
          <div className=" w-full text-center text-2xl font-bold p-10">GET SURE ODS FOR LOW PRICE</div>
          <div className="  my-4">
              <button onClick={()=>setMenuHandler(5)} className="p-4 my-4 rounded-xl flex w-full uppercase border-2 border-blue-500 text-blue-500 items-center justify-between">
                  
                  <div >5+ ods</div>
                  <div>NGN5000</div>
              </button>
              <button onClick={()=>setMenuHandler(15)} className=" p-4 my-4 rounded-xl flex w-full uppercase border-2 border-blue-500 text-blue-500 items-center justify-between">
               
                  <div >10+ ods</div>
                  <div>NGN15000</div>
              </button>
              <button onClick={()=>setMenuHandler(25)} className="p-4 my-4 rounded-xl flex w-full uppercase border-2 border-blue-500 text-blue-500 items-center justify-between">
                 
                  <div >15+ ods</div>
                  <div>NGN25000</div>
              </button>

              <button onClick={()=>setMenuHandler(50)} className=" p-4 my-4 rounded-xl flex w-full uppercase border-2 border-blue-500 text-blue-500 items-center justify-between">

                  <div >30+ ods</div>
                  <div>NGN50000</div>
              </button>
          </div>
          <a href="https://ng.1x001.com?bf=64158a08ca442_4236730751">
          <div className=" mb-4 relative">
              <Image width={200} height={200} src="/1xbet3.png"  alt='' className="w-full  object-contain " />
              <div className=" absolute left-3 bottom-3 flex  items-center">
                <div className=" text-3xl text-white font-bold">
                    Beast Games Tips Subscriptions
                </div>
              </div>
          </div>
          </a>

          <div className=" font-bold text-2xl text-center my-4">Brokers</div>
          <a href="https://ng.1x001.com?bf=64158a08ca442_4236730751">
              <br />
              
              <Image width={200} height={200} src="/1xbet1.png" alt='' className="w-full  object-contain " />

              <br/>
              <Choise />
          </a>
          
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
          
          <div className=" font-bold text-2xl text-center my-4">free Games</div>
          <div className="w-full flex justify-center items-center rounded-lg flex-col ">
              <GamesOds />
          </div>

          <div className=" font-bold text-2xl text-center my-4">Games On Telegram</div>
          <br/>
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
