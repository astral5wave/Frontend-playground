    import React from 'react'

    const randomRGB=()=>{
      let r=Math.ceil(Math.random()*256);
      let g=Math.ceil(Math.random()*256);
      let b=Math.ceil(Math.random()*256);
      return `rgb(${r},${g},${b})`;
    }
    const randomHSL=()=>{
      let h=Math.ceil(Math.random()*361);
      let s=Math.ceil(Math.random()*101);
      let l=Math.ceil(Math.random()*101);
      return `hsl(${h},${s}%,${l}%)`;
    }
    const randomHEX=()=>{
      let r=Math.ceil(Math.random()*256);
      let g=Math.ceil(Math.random()*256);
      let b=Math.ceil(Math.random()*256);
      const toHex=(n)=>n.toString(16).padStart(2,"0");
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    const RandomColor = () => {
      const [colorSchema,setColorSchema]=React.useState({schema:"Default",color:"bg-white"});
      return (
        <div className="h-screen w-screen"
        style={{
          backgroundColor:colorSchema.color
        }}>
          <div className='flex w-full items-center justify-around pt-6 text-black/70 font-bold text-4xl'>
            <button className='bg-gray-200 px-4 py-2 rounded-lg'
            onClick={()=>{
              setColorSchema({
                schema:"RGB",
                color:randomRGB(),
              })
            }}
            >
              RGB
            </button>
            <button className='bg-gray-200 px-4 py-2 rounded-lg'
            onClick={()=>{
              setColorSchema({
                schema:"HEX",
                color:randomHEX(),
              })
            }}>
              HEX
            </button>
            <button className='bg-gray-200 px-4 py-2 rounded-lg'
            onClick={()=>{
              setColorSchema({
                schema:"HSL",
                color:randomHSL(),
              })
            }}>
              HSL
            </button>
          </div>

          <div className='flex flex-col gap-y-20 items-center justify-around h-[620px] text-6xl font-bold'>
            <span>
              {colorSchema.schema}
            </span>
            <span>
              {
                colorSchema.color
              }
            </span>
          </div>
        </div>
      )
    }

    export default RandomColor;