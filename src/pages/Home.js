import React from 'react'
import BannerImage from "../assets/studio.jpg"
import "../Styles/Home.css"
// import { BrowserRouter as Router, Link } from 'react-router'



const Home = () => {

  return (

    <div className='Home' style={{ backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer' >
          <h1> Neighborhood Tattoo Studio </h1>
          <hr />
          <p> Antiguo como el tiempo moderno como el mañana</p>
        </div>
        {/* <Router className='Toppings'>
        <Link className="toppings-first" to='src\Extras\Cuadros\CuadrosApp.js'><p className='toppings-text'>PRODUCTOS</p></Link>
        <Link className='toppings-second'><p className='toppings-text'>CUADROS</p></Link>
        <Link className='toppings-third'><p className='toppings-text'>CUIDADOS</p></Link>
        </Router> */}
    </div>
  )
}

export default Home
