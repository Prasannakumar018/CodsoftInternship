import React from 'react'
import Marquee from "react-fast-marquee";

const Nav = () => {

  return (
    <> 
    <div className='flex space-x-4 .. bg-black text-sky-400 place-content-center mt-6 '>
    <div className=" hover:bg-sky-700 hover:font-semibold ">Home</div>
    <div className="hover:font-semibold hover:bg-sky-700">About</div>
    <div className="hover:font-semibold hover:bg-sky-700">Contact</div>
    <div className='hover:font-semibold hover:bg-sky-700'>License</div>
    </div>
    <Marquee className="bg-black text-red-400 p-4 " bgcolor="green"
                 pauseOnHover= 'true'
                 direction="alternate"
                 loop='' speed='150'>PING IN: Ambattur, Avadi, Thirumangalam, Anna nagaCoimbatore, Madurai, Trichy and soon more...</Marquee>
    </>
  )
}

export default Nav
