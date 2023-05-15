import React from 'react'

const SocialMediaIcons = (props) => {

  return (
    <div className="flex  justify-center md:justify-start my-10 gap-7">
      
      <a
        className="hover:opacity-50 transition text-center duration-500"
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
<div className='text-2xl '><i className={props.icon}></i></div> 
<p className='text-lg'>{props.alt}</p>       
      </a>
    </div>
  );
};

export default SocialMediaIcons;
