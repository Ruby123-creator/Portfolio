import React from 'react'
 const Tech=(props)=>{
      return(
        <div className="container m-4 w-28 p-5 text-center border  border-cyan-700 rounded-md shadow-lg shadow-cyan-700  hover:shadow-pink-500 transition-all ">
            
                <div className='flex justify-center  items-center '>
                <button className='px-4'>
                    <div className='text-2xl font-extrabold' >{props.image}
</div>
                    <p className='text-xl'>{props.tech}</p>
                    </button>
                </div>
                
            </div>
        
      )
 }
 export default Tech;
