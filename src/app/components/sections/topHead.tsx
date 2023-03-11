


const imgs = 'https://www.zenithbank.com/media/1600/zenith-page-header-2-aspire-2500x1000.jpg?anchor=center&mode=crop&width=2500&height=1000&rnd=132014925800000000'

//const inter = Inter({ subsets: ['latin'] })

export default function TopHeader() {

  

  return (
      <div className='w-full m-auto'>
          <div className=" text-center">
            <div className=" font-semibold text-3xl">Login/Sign up</div>
              <div>
                  Your are Logged Out please login
              </div>
          </div>
          <br/>
        <img src={imgs} alt='' className=" w-full"/>
    </div>
  )
}
