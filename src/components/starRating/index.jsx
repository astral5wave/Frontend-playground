import React from 'react'
import { FaStar } from "react-icons/fa";
 const star=[<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />] 
const Index = () => {
    const [rating,setrating]=React.useState(0);
    
  return (
    <div className='h-screen w-screen bg-cyan-50 flex flex-col items-center justify-center gap-10'>
        <div className='flex gap-4 text-8xl'>
            {star.map((item,i)=>{
                return <span key={i+1} className={`${i+1<=rating?"text-yellow-400":"text-black"}`}
                onClick={()=>{
                    if(i+1==rating){
                        setrating(0);
                        return;
                    }
                    setrating(i+1)}
                }
                >{item}</span>
            })}
        </div>
        <div className='font-sans text-2xl font-bold'>
            {rating} Stars
        </div>
    </div>
  )
}

export default Index