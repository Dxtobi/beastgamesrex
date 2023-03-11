





'use client'


    //import Others from "./Others";
    //const { data: session } = useSession();





export default function FormHero({text, header}:{text:string, header:string}) {
    
    return (
        <div className="flex flex-col gap-4">
            <div className=" text-3xl font-bold text-gray-700">
                {header}
                
            </div>
            <div className="">
             {text}
            </div>
        </div>
        
    )
  }
  

/***
 * 
 * 
 * 
 * 
 * 
 */