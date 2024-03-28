import '/src/style/home.css' ;

import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';



export const Home = () => {
  const { t } = useTranslation();
  const videoPrueba = 'SeOdffs9T6w' ; 

  return (
      <>
    <section className="home" id="home" >
     
     
      <div className="home-content">
        <h1>{t('Hi i\'m')} <span>{t('Pollito')}</span></h1>
        <div className="text-animated">
          <h3>{t('Coach about sex in Fornite')}</h3>
        </div>
        <p>{t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cum omnis dolore mque animi commodi sapiente, sed officiis porro beatae iusto dolorem pariatur dicta obcaecati, nisi facere ex!')}</p>
        <div className="btn-box">
          <a href="#" className="btn">{t('Hire me')}</a>
          {/* <a href="#" className="btn">{t('Let\'s Tack')}</a> */}
        </div>
      </div>

      <div className="home-sci">
        <a href="#"><i className='bx bxl-facebook-circle'></i></a>
        <a href="#"><i className='bx bxl-instagram'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
      </div>

      <div className="home-imgHov bg-transparent"> 
        <img id="img"   /> {/* <img id="img" src="/src/assets/home.jpg" alt={t('blabla')} /> */}
      </div>
    </section>
    {/* <section className='d-flex'>
     <YouTube className="p-2 flex-grow-1" videoId={videoPrueba} />
     <div className='p-9 '> 
      Chachin purrum blablalbalbal 
     </div>
    </section> */}
    </>
  )
}
