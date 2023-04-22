import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './header';
import Main from './Main';
import Translate from './Translate.json'
function App() {
  const [language,setLanguage]= useState(
    localStorage.getItem('language') || 'aze'
  )
  const [content,setContent] = useState({})

  useEffect(() => {
    if(language==="en"){
      setContent(Translate.en)
    } else if(language==="aze"){
      setContent(Translate.aze)
    } 
    localStorage.setItem('language', language);
  },  [language] )
  return (

    <div className="App">
      <Header content={content} language={language} setLanguage={setLanguage}/>
      <Main content={content}/>
      <Footer content={content}/>
    </div>
  );
}

export default App;
