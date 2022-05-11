import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
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