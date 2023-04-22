import React from "react";
import img1 from "./image/logo1.png";
import "./header.css";
import { useState, useEffect } from "react";
import imgaze from "./image/azerbaijan (3).png";
import imgen from "./image/united-kingdom (3).png";
const Header = ({ content, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollDown =
        window.pageYOffset || document.documentElement.scrollTop;

      setScrolled(scrollDown > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isEvInView, setIsEvInView] = useState(true);
  const [isAboutUsInView, setIsAboutUsInView] = useState(false);
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isServiceInView, setServiceInView] = useState(false);
  const [isKaryeraInView, setKaryeraInView] = useState(false);
  const [isFooterInView, setFooterInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const ev = document.getElementById("Ev");
      const evPosition = ev.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (evPosition < windowHeight / 2 && evPosition > -windowHeight / 2) {
        setIsEvInView(true);
      } else {
        setIsEvInView(false);
      }

      const aboutUs = document.getElementById("AboutUs");
      const aboutUsPosition = aboutUs.getBoundingClientRect().top;
      const aboutUsHeight = aboutUs.offsetHeight;
      const aboutUsCenter = aboutUsPosition + aboutUsHeight / 2;

      if (
        aboutUsCenter < (windowHeight * 3) / 4 &&
        aboutUsCenter > windowHeight / 4
      ) {
        setIsAboutUsInView(true);
      } else {
        setIsAboutUsInView(false);
      }
      const OnfutureTv = document.getElementById("OnfutureTv");
      const OnfutureTvPosition = OnfutureTv.getBoundingClientRect().top;
      const OnfutureTvHeight = OnfutureTv.offsetHeight;
      const OnfutureTvCenter = OnfutureTvPosition + OnfutureTvHeight / 2;

      if (
        OnfutureTvCenter < (windowHeight * 3) / 4 &&
        OnfutureTvCenter > windowHeight / 4
      ) {
        setIsVideoInView(true);
      } else {
        setIsVideoInView(false);
      }
      const Services = document.getElementById("Services");
      const ServicesPosition = Services.getBoundingClientRect().top;
      const ServicesHeight = Services.offsetHeight;
      const ServicesCenter = ServicesPosition + ServicesHeight / 2;
      if (
        ServicesCenter < (windowHeight * 3) / 4 &&
        ServicesCenter > windowHeight / 4
      ) {
        setServiceInView(true);
      } else {
        setServiceInView(false);
      }
      const Karyera = document.getElementById("Karyera");
      const KaryeraPosition = Karyera.getBoundingClientRect().top;
      const KaryeraHeight = Karyera.offsetHeight;
      const KaryeraCenter = KaryeraPosition + KaryeraHeight / 2;

      if (
        KaryeraCenter < (windowHeight * 3) / 4 &&
        KaryeraCenter > windowHeight / 4
      ) {
        setKaryeraInView(true);
      } else {
        setKaryeraInView(false);
      }

      const Footer = document.getElementById("Contact");
      const FooterPosition = Footer.getBoundingClientRect().top;
      const FooterHeight = Footer.offsetHeight;
      const FooterCenter = FooterPosition + FooterHeight / 2;

      if (
        FooterCenter < (windowHeight * 3) / 4 &&
        FooterCenter > windowHeight / 4
      ) {
        setFooterInView(true);
      } else {
        setFooterInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header id="Ev">
        <section className="firstpart">
          <div className="container">
            <div className="item item-1">
              <a target={'_blank'} rel='noreferrer' href="https://www.facebook.com/groups/1187017308802438/user/100075870057856/">
                <span className="ic icon-facebook"></span>
              </a>
            </div>
            <div className="item item-2">
              <a target={'_blank'} rel='noreferrer' href="https://www.instagram.com/onfuture_consultancy/">
                <span className="ic icon-instagram"></span>
              </a>
            </div>
            <div className="item item-3">
              <a target={'_blank'} rel='noreferrer' href="https://www.linkedin.com/company/onfuture-consultancy/">
                <span className="ic icon-linkedin"></span>
              </a>
            </div>
          </div>
          <div className="container2">
            <div className="contactitem contactitem-1">
              <a href="tel:+994 70 434 74 24">
                <span className="icon-phone"></span>
                <span className="Contactspan">+994 70 434 74 24</span>
              </a>
            </div>
            <div className="contactitem contactitem-2">
              <a target={'_blank'} rel='noreferrer' href="mailto:onfuture.eu@gmail.com">
                <span className="icon-gmail"></span>
                <span className="Contactspan">onfuture.eu@gmail.com</span>
              </a>
            </div>
            <a href="/" className="Azdiv">
              
              <button onClick={() => setLanguage("aze")}>
                
                <img className="Azeflag" src={imgaze} alt="Aze flag" />
              </button>
            </a>
            <a href="en" className="Endiv">
              
              <button onClick={() => setLanguage("en")}>
                
                <img className="Engflag" src={imgen} alt="Eng flag" />
              </button>
            </a>
          </div>
        </section>

        <section
          className="secondpart"
          style={{
            position: scrolled ? "fixed" : "relative",
            top: scrolled ? 0 : "0",
          }}
        >
          <div className="Onfutureimg">
            <a href="/">
              <img className="Onfuturelogo" src={img1} alt="OnFuture Logo" />
            </a>
          </div>
          <div className="container3">
            <div>
              <span onClick={toggleMenu} className="menu-icon"></span>
            </div>

            <ul className={menuOpen ? "Containeritem3 " : "Containermenu "}>
              <li onClick={() => setMenuOpen(true)} className="X-icon"></li>
              <li className={isEvInView ? "active" : ""}>
                
                <a href="#Ev">
                  <span>{content.Ev}</span>
                </a>
              </li>
              <li className={isAboutUsInView ? "active" : ""}>
                
                <a href="#AboutUs">
                  <span>{content.Haqqimizda}</span>
                </a>
              </li>
              <li className={isVideoInView ? "active" : ""}>
                
                <a href="#OnfutureTv">
                  <span>{content.Videolar}</span>
                </a>
              </li>
              <li className={isServiceInView ? "active" : ""}>
                
                <a href="#Services">
                  <span>{content.Xidmetler}</span>
                </a>
              </li>
              <li className={isKaryeraInView ? "active" : ""}>
                
                <a href="#Karyera">
                  <span>{content.Karyera}</span>
                </a>
              </li>
              <li className={isFooterInView ? "active" : ""}>
                
                <a href="#Contact">
                  <span>{content.Elaqe}</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="thirdpart">
          <div className="OnfutureSlogan">{content.TehsilKaryera}</div>
          <div className="OnfutureSlogan2">
          {content.Onfuture1} <br/>
          {content.Onfuture2}
          </div>
          <div className="OnfutureContact">
            
            <a href="#Contact">
              <button>{content.BizimleElaqe}</button>
            </a>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
