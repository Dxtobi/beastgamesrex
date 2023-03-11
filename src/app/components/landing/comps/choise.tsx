import Image from "next/image"



const imgs = 'https://www.zenithbank.com/media/1600/zenith-page-header-2-aspire-2500x1000.jpg?anchor=center&mode=crop&width=2500&height=1000&rnd=132014925800000000'

//const inter = Inter({ subsets: ['latin'] })

export default function Choise() {

  

  return (
      <div className='w-full m-auto grid grid-cols-3 gap-2 bg-slate-900 p-4 rounded-lg text-white'>
          <div className="w-full flex flex-col items-center">
              <img src="msport.png" alt='jj' className="w-full h-[50px] object-contain" />
              <div>
                  Msport 
              </div>
          </div>
          
          <div className="w-full flex flex-col items-center">
              <img src="sportybet.png" alt='jj' className="w-full h-[50px] object-contain" />
              <div>
                  Sporty 
              </div>
          </div>

          <div className="w-full flex flex-col items-center">
              <img src="Bet365.svg" alt='jj' className="w-full h-[50px] object-contain" />
              <div>
                  365 
              </div>
          </div>
          
          <div className="w-full flex flex-col items-center">
              <img src="bet9ja.jpg" alt='jj' className="w-full h-[50px] object-contain" />
              <div>
                  Bet9ja 
              </div>
          </div>
          <div className="w-full flex flex-col items-center">
              <img src="Betking.jpg" alt='jj' className="w-full h-[50px] object-contain" />
              <div>
                  Betking 
              </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center">
              <div>
                  + 29 Others 
              </div>
          </div>
          
          
      </div>
  )
}
