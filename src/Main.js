import React from "react";
import "./Main.css";
import img1 from "./image/slogann.gif";
import vid1 from "./image/OnFutureGeneral.mp4";
import img2 from "./image/youtubeimage2.jpg";
import img3 from "./image/youtubeimage1.jpg";
import img4 from "./image/youtubeimage3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay as PlayIcon } from "@fortawesome/free-solid-svg-icons";

const Main = ({content}) => {
  return ( 
    <div>
      <main id="AboutUs">
        <p>{content.Haqqimizda}</p>
        <div className="Haqqimizda">
          <div className="LeftAbout">
            <img className="Aboutimage" src={img1} alt='Onfuture slogan' />
          </div>
          <div className=" RightAbout">
            <h1>{content.Bizkimik}</h1>
            <span>
              <b>OnFuture </b>{content.Onfuturesizin1} <br />
             {content.Onfuturesizin2}
            </span>
            <h1>{content.Missiyamiz}</h1>
            <span>
             {content.Missiya1}
              <br /> {content.Missiya2}
            </span>
            <h1>{content.Hedefimiz}</h1>
            <span>
             {content.Hedef1} <br /> {content.Hedef2}
            </span>
          </div>
        </div>
      </main>
      <section id="OnfutureTv" className="OnfutureTv">
        <h1>OnFuture TV</h1>
        <div className="OnfutureVideos">
          <div className="Video_item">
            <a
              href="https://www.youtube.com/watch?v=0lNhByi73eQ"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img src={img3} alt='Poland education' />
              <FontAwesomeIcon className="Playicon" icon={PlayIcon} />
            </a>
            <p>{content.Polsadatehsil}</p>
          </div>
          <div className="Video_item">
            <a
              href="https://www.youtube.com/watch?v=e6E4-XcnBV8"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src={img2} alt='Scholarship in Poland' />
              <FontAwesomeIcon className="Playicon" icon={PlayIcon} />
            </a>
            <p>{content.Polsadateqaud}</p>
          </div>
          <div className="Video_item">
            <a
              href="https://www.youtube.com/watch?v=kBWnMwoaVJg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img4} alt='Microsoft Azerbaijan' />
              <FontAwesomeIcon className="Playicon" icon={PlayIcon} />
            </a>
            <p>{content.MicrosoftdaAze}</p>
          </div>
        </div>
      </section>
      <section id="Services" className="Services">
        <h1>{content.Xidmetler}</h1>
        <div className="MainServices">
          <div className="flex_item">
            <span>{content.Polsadatehsil1}</span>
          </div>
          <div className="flex_item">
            <span>{content.Tehsilveturistlik}</span>
          </div>
          <div className="flex_item">
            <span>{content.Polsadaoturum}</span>
          </div>
          <div className="flex_item">
            <span>{content.Yasamyeri}</span>
          </div>
          <div className="flex_item">
            <span>{content.Istapilmasi}</span>
          </div>
          <div className="flex_item">
            <span>{content.Avropabiznes}</span>
          </div>
        </div>
      </section>
      <section  id="Services" className="EducationServices">
        <ul className="Education_container">
         <li className="Education_flItem"> <h3>{content.UniPaket}</h3>
         <ul className="University_container">
         <li> <p className="University_item"><strong>Past</strong> {content.istenilen} <strong>{content.bir}</strong> {content.uniyeqebul}</p></li>
         <li> <p className="University_item"><strong>Present</strong> {content.istenilen} <strong>{content.iki}</strong>  {content.uniyeqebul} </p></li>
          <li><p className="University_item"><strong>Future </strong> {content.istenilen} <strong>{content.uc}</strong>  {content.uniyeqebul}</p></li>
        </ul></li>
         <li className="Education_flItem"> <h3>{content.Onfutureozel}</h3>
         <ul className="University_container">
         <li> <p className="University_item"><strong>Past </strong> {content.Polsadayerl}</p></li>
         <li> <p className="University_item"><strong>Present</strong> {content.Polsadayerl1}</p></li>
        </ul></li>
         <li className="Education_flItem flitem1"> <h3>{content.Vizadestek}</h3>
         <ul className="University_container cont1">
         <li> <p className="University_item">{content.Vizayamuraciet}</p></li>
         <li> <p className="University_item">{content.Vizayayer} </p></li>
         <li><p className="University_item">{content.Biletbronu}</p></li>
         <li><p className="University_item">{content.Yasayisyeri}</p></li>
         <li><p className="University_item">{content.Birillik}</p></li>

        </ul></li> 
        </ul>
      </section>
      <section id="Karyera" className="VideoServices">
        <div className="video-wrapper">
          <div className="TitleVideo">
            <h3>{content.Polsadstehsilinustunlukleri}:</h3>
            <span className="HandDown"></span>
          </div>
          <div className="Video_items">
          <video  controls muted loop type="video/mp4">
            <source src={vid1} />
            Bu brauzer HTML5'i dəstəkləmir
          </video>
          <div className="Video_items1">
            <ul >
              <li>{content.Euro800}</li>
              <li>{content.Muxtelifteqaudler}</li>
              <li>{content.Cemi2}</li>
              <li>{content.Digeravropa}</li>
              <li>{content.Telebelereheftelik}</li>
              <li>{content.Munasibyasam}</li>
              <li>{content.GenisErasmus}</li>
              <li>{content.Kanadave}</li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
