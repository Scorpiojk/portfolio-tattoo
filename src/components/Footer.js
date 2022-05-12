import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon onClick={() => window.open('https://www.instagram.com/neighborhoodtattoostudio/?hl=es', '_blank')} />
        {/* <LibraryMusicIcon onClick={() => window.open('https://www.instagram.com/neighborhoodtattoostudio/?hl=es', '_blank')} />         */}
      </div>
      <p> &copy; 2021 neighborhoodtattoostudio.com</p>
    </div>
  );
}

export default Footer;