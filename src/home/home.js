import React from 'react'
import home1 from '../assests/assests/home1.jpg'

const Home = () => {
  return (
    <div>
      <h1 style={{color:'#0285CC'}}>WELCOME SQUAD!</h1>
      <div className='flex'>
        <p style={{color:'white'}}>
          <h2 ><b>Dress to Impress</b></h2>
          <h3 className='centre '>
            
"Dress to Impress at ELIVE. Our meticulously curated collection offers timeless classics and trendsetting pieces, ensuring you make a lasting, confident impression wherever life takes you."
          </h3>

        </p>
        <img src={home1} alt='none' className='rounded-full'></img>
      </div>
    </div>
  )
}

export default Home
