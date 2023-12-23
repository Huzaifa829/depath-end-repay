import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import cb from '../../assets/images/icons8-cambodia-flag-48.png';
import ii from '../../assets/images/icons8-indonesia-48.png';
import vv from '../../assets/images/icons8-vietnam-flag-48.png';
import en from '../../assets/images/icons8-usa-flag-48.png';
import ll from '../../assets/images/icons8-laos-48.png';
import mm from '../../assets/images/icons8-malaysia-flag-48.png';
import mb from '../../assets/images/icons8-myanmar-48.png';

const ImageDropdown = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation('global');
  const options = [
    { value: 'en', label: <img src={en} alt="myanmar" /> },
    { value: 'cb', label: <img src={cb} alt="cambodia" /> },
    { value: 'ii', label: <img src={ii} alt="Indonesia" /> },
    { value: 'vv', label: <img src={vv} alt="vietnam" /> },
    { value: 'll', label: <img src={ll} alt="laos" /> },
    { value: 'mm', label: <img src={mm} alt="malaysia" /> },
    { value: 'mb', label: <img src={mb} alt="myanmar" /> },
  ];

  const customStyles = {
    control: (base) => ({
      ...base,
      height: '48px',
      zIndex: 4,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 4, // Set the z-index for the options dropdown
    }),
  };

  const handleSelectChange = (selectedOption) => {
    const lowerCountryCode = selectedOption.value;
    i18n.changeLanguage(lowerCountryCode);
    console.log('Selected Value:', lowerCountryCode);
  };

  const defaultOption = {
    value: i18n.language, // Use the current language or default to 'en'
    label: <img src={en} alt="Default" />,
  };
  
  useEffect(() => {
    // Update the default flag based on the current language when the component mounts
    defaultOption.label = <img src={getFlagImage(i18n.language)} alt="Default" />;
  }, [i18n.language]);

  const getFlagImage = (language) => {
    switch (language) {
      case 'cb':
        return cb;
      case 'ii':
        return ii;
      // case 'en':
      //   return en;
      case 'vv':
        return vv;
      case 'll':
        return ll;
      case 'mm':
        return mm;
      case 'mb':
        return mb;
      default:
        return en; // Default to 'en' if the language is not found
    }
  };

  return (
    <div>
      <Select
        options={[...options]}
        defaultValue={defaultOption}
        styles={customStyles}
        isSearchable={false}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default ImageDropdown;


















//   import React, { useState } from 'react';
// import ReactFlagsSelect from 'react-flags-select';
// import  {useTranslation}  from 'react-i18next';

// import '../../cssFile/langWegit.css';

// const FlagWidget = () => {
//   const [t, i18n] = useTranslation("global")
//   const [selectedFlag, setSelectedFlag] = useState('US'); // Initialize with the default country code

//   const handlechange = (lang)=>{
//     i18n.changeLanguage(lang)
//   }

//   const handleFlagSelect = (countryCode) => {
//     const lowerCountryCode = countryCode.toLowerCase();

//     const languageCode = lowerCountryCode === "us" ? "en" : lowerCountryCode;

//     console.log(`Selected country code: ${lowerCountryCode}`);
    
//     i18n.changeLanguage(languageCode);
// };



//   return (
//     <div>

//     <ReactFlagsSelect
//       countries={['US','ES']}
//       customLabels={{ US: 'USA', GB: 'UK' }}
//       onSelect={handleFlagSelect}
//       defaultCountry="US"
//       showSelectedLabel={false}
//       placeholder={t("langweg1.message")}
//     />
//     </div>
//   );
// };

// export default FlagWidget;








// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';

// const GoogleTranslate = () => {
//   const navigate = useNavigate();
//   const googleTranslateRef = useRef();
//   var check = false
//   var abc= document.getElementById("google-translate-script")

//   useEffect(() => {
//     const scriptId = 'google-translate-script';
//     const loadGoogleTranslateScript = () => {
//       if (!document.getElementById(scriptId)) {
// check= true
//         console.log(check,'working');
//         window.googleTranslateElementInit = () => {
//           console.log('googleTranslateElementInit called');
//           try {
//             new window.google.translate.TranslateElement({ pageLanguage: 'en' }, googleTranslateRef.current);
//           } catch (error) {
//             console.error('Error in Google Translate callback:', error);
//           }
//         };

//         console.log('Script loading...');
//         const addScript = document.createElement('script');
//         addScript.id = scriptId;
//         addScript.setAttribute('async', '');
//         addScript.setAttribute(
//           'src',
//           'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
//         );
//         document.body.appendChild(addScript);
//       } 
//     };
  
//     loadGoogleTranslateScript();

//     return () => {
//         setTimeout(function() {
//       if (check===false) {
//         console.log("huzaifa");
//         console.log(abc.parentNode.removeChild(abc));
//         loadGoogleTranslateScript();
 
//       }
//       else{
        
//         console.log(abc,"huzaifa2222");

//       }
//     },5000)
//     };
//   }, [navigate]); 

//   return (
//     <>
//       <div ref={googleTranslateRef} />
//     </>
//   );
// };

// export default GoogleTranslate;











  