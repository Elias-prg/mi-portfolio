
// import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';


// Lenguage.propTypes = {
//   language: PropTypes.string.isRequired,
//   currentLanguage: PropTypes.string.isRequired,
//   changeLanguage: PropTypes.func.isRequired,
// };


const LanguageButton = ({ language, currentLanguage, changeLanguage }) => {
        const isActive = language === currentLanguage;
        const className = isActive ? 'button active' : 'button';
      
        return (
          <button className={className} onClick={() => changeLanguage(language)}>
            {language}
          </button>
        );
      };
      
 export   const Lenguage = () => {

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

        return (
          <div>
            <LanguageButton language='en' currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
            <LanguageButton language='es' currentLanguage={currentLanguage} changeLanguage={changeLanguage} />
          </div>
        );
      };

    //   export default Lenguage
