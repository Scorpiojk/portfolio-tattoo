import React from 'react'
import '../Styles/Contact.css'
import Map from '../helpers/Map.js'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import handleWhatsAppPress from '../helpers/wppPress'

function Contact() {
  return (
    <div className='container'>
        <div className="contact">
            <h2> Contactanos</h2>
            <span onClick={handleWhatsAppPress} >  
            <WhatsAppIcon className="wppIcon" /> WhatsApp
            </span>
        </div>
        <Map />
    </div>
  )
}

export default Contact