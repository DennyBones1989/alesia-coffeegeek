import logo from './logo.svg';
import s from './App.module.css';
import './fonts/ObjectSansRegular.otf';
import HeaderLogos from './components/HeaderLogos/HeaderLogos';
import ProgramsList from './components/Program/Program';
import Teacher from './components/Teacher/Teacher';
import CertificatesList from './components/Certificate/Certificate';
import CoursesList from './components/Course/Course';
import ReviewsPrimary from './components/ReviewsPrimary/ReviewsPrimary';
import ReviewsSecondary from './components/ReviewsSecondary/ReviewsSecondary';
import Gallery from './components/Gallery/Gallery';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  return (
    <div className={s.App}>
      <header className={s.appHeader}>
        <div className={s.headerInner}>
          <h4 className={s.logoName}>Alesia</h4>
          <div className={s.headerContainer}>
            <div className={s.headerLeft}>
              <h1>Learn to make the best coffee</h1>
              <div className={s.headerDescription}>Private coaching from a certified coffee trainer</div>
              <div>
                <Link to="https://www.instagram.com/alesia_zhvirblia/" target="_blank">
                  <button className={s.buttonRed}>  <FaInstagram/> Contact</button>
                </Link>
              </div>
              <HeaderLogos />
            </div>
            <div className={s.headerRight}>
              <ReviewsSecondary/>
            </div>
          </div>
        </div>
      </header>
      <div className={s.content}>
        <ProgramsList/>
        <Teacher/>
        <CertificatesList/>
        <CoursesList/>
        <Gallery/>
        <ReviewsPrimary/>
      </div> 
      
      <footer>
        <div className={s.footerContainer}>
          <div className={s.footerTop}>
            <div className={s.footerNameContainer}>
              <h2>ALESIA</h2>
            </div>
            <div className={s.socialNetworks}>
              <Link to="https://www.instagram.com/alesia_zhvirblia/" target="_blank"><FaInstagram/></Link>
              <Link to="https://wa.me/+351910323423"><FaWhatsapp/></Link>
              <Link to="mailto:allitender7@gmail.com"><FaRegEnvelope/></Link>
            </div>  
          </div>
          
        </div>
        <div className={s.footerBottom}>
          <div className={s.footerBottomInner}>
            <span>@ 2023 ALESIA. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
