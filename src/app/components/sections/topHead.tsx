


const imgs = 'https://i.pinimg.com/originals/fe/b8/29/feb82990ddd50a493528084369af8709.png'

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
