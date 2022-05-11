import React from 'react'
import Ariel from '../assets/ariel.jpg'
import Nicolas from '../assets/Nico.jpg'
import '../Styles/about.css'

function Artists() {
  return (
    <div className='about'>
        <div className='artistOne'>
            <div 
            className='imageLeft'
            style={{backgroundImage: `url(${Ariel})`}}>
            </div>
          <div className='about-one-info'>
              <h1> Ariel Gallegos</h1>
              <p></p>
          </div>
        </div>
        <div className='artistTwo'>
            <div 
            className='imageRight'
            style={{backgroundImage: `url(${Nicolas})`}}>  
            </div>
          <div className='about-two-info'>
            <h1> Nicolas</h1>
            <p></p>
            </div>
        </div>
    </div>
  )
}

export default Artists