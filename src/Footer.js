import React from "react";
import "./Footer.css";
import img1 from './image/poland-flag-icon-64.png'
import img2 from './image/azerbaijan-flag-icon-128.png'

const Footer = ({content}) => {

  return (
    <div>
      <footer id="Contact">
        <h1>{content.Elaqe}</h1>
        <div className="Contact_container">
          <form >
            <h3>{content.Elaqeformu}</h3>
            <div className="Contact_item">
              <div>
                <label>{content.Ad}</label>
                <br />
                <input
                  type={"text"}
                />
              </div>
              <div>
                <label>{content.Soyad}</label>
                <br />
                <input
                  type={"text"}
                />
              </div>
            </div>
            <div className="Epoct">
              <label>{content.epoct}</label>
              <br />
              <input
                type={"text"}
              />
            </div>
            <div className="Item_contact">
              <label>{content.Mesaj}:</label>
              <br />
              <textarea
                placeholder={content.Suallar}
                type={"text"}
              />
            </div>
            <a className="Wpbtn" target="blank" href="https://api.whatsapp.com/message/HZGGECLXLVOKI1?autoload=1&app_absent=0">
            {content.Mesajgonder}</a>
          </form>

          <div className="Container_item">
            <div className="Item_first">
              <p>{content.Unvan}</p>
              <ul>
             <li> <span>UL Przemyslowa 13, Krakow, Poland</span> </li>
             <li><span>{content.Afbusiness}</span></li> 
              </ul>
            </div>
            <div className="Item_second">
              <p>{content.Telefon}</p>
              <ul> 
            <li> <a href="tel:+48 573 817 967">+48 573 817 967</a> <img className="Plimg" src={img1} alt='Poland flag'/><br/></li> 
             <li><a href="tel:+994 70 434 74 24">+994 70 434 74 24</a>  <img className="Azeimg" src={img2} alt='Azerbaijan flag'/></li> 
              </ul>
            </div>
            <div className="Item_third">
              <p>{content.epoctunvan}</p>
              <a href="mailto:onfuture.eu@gmail.com">onfuture.eu@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="Footer_Container">
          <div className="Footer_Esas">
          <div className="Footer_item1">
            <p>{content.Suret}</p>
            <div>
              <a href="#AboutUs"><span>{content.Haqqimizda}</span></a>
              <a href="#Karyera"><span>{content.Karyera}</span></a>
              <a href="#Services"><span>{content.Xidmetler}</span></a>
              <a href="#Footer"><span>{content.Elaqe}</span></a>
              <a href="#OnfutureTv"><span>Onfuture Tv</span></a>
            </div>
          </div>
          <div className="Footer_item2">
            <p>{content.Bizimle}</p>
            <div>
            <a target={'_blank'} rel="noopener noreferrer" href="https://www.facebook.com/groups/1187017308802438/user/100075870057856/"><span className="icon-facebook1"></span></a>
            <a target={'_blank'} rel="noopener noreferrer" href="https://www.instagram.com/onfuture_consultancy/"><span className="icon-instagram1"></span></a>
            <a target={'_blank'} rel="noopener noreferrer" href="https://www.linkedin.com/company/onfuture-consultancy/"><span className="icon-linkedin1"></span></a>
            <a target={'_blank'} rel="noopener noreferrer" href="https://www.youtube.com/@onfutureconsultancy8292"><span className="icon-youtube"></span></a>
            <a target={'_blank'} rel="noopener noreferrer" href="https://api.whatsapp.com/message/HZGGECLXLVOKI1?autoload=1&app_absent=0"><span className="icon-whatsapp"></span></a>
            </div>
          </div>
          <div className="Footer_item3">
          <a href="tel: +48 573 817 967" className="Phone"><span>+48 573 817 967</span></a>
          <a target={'blank'}  rel="noopener noreferrer" href="https://goo.gl/maps/u64dxc8KuPYrsXN2A" className="icon-map"><span>{content.Unvanxerite}</span></a>

          </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
