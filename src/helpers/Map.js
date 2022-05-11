import React from "react"

function Map() {
  return (
    <div className="Map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.453901847722!2d-67.51929417078698!3d-45.87499859869421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde455b7ee4be89f%3A0x349badc78aaada60!2sneighborhood%20tattoo%20studio!5e0!3m2!1ses-419!2sar!4v1648890219702!5m2!1ses-419!2sar" 
        width="80%" 
        height="500px" 
        style={{ border: "0" }}
        allowfullscreen="" 
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  )
}

export default Map