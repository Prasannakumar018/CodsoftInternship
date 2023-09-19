import React from 'react'
import abt from '../assests/assests/about.png'

const About = () => {
  return (
    <section id='about'>
      <div className='space-x-4'>
        <h1 className='text-white'><center>ABOUT</center></h1>
      <div className='flex '>
      <img src={abt} alt='none' className='rounded-full'></img>
      <p className='text-white'> 
Welcome to OUR DRESS, where your fashion dreams come to life! We understand that choosing the perfect dress is a special moment in every person's life, whether it's for a wedding, a prom, a cocktail party, or any other event. Our dress shop is committed to helping you find the ideal dress that not only complements your style but also makes you feel confident and beautiful.
      </p>
      </div>
 
      </div>
      </section>

  )
}

export default About
