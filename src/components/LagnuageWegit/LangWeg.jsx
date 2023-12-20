import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import '../../cssFile/langWegit.css';

const FlagWidget = () => {
  const handleFlagSelect = (countryCode) => {
    // Handle flag selection
    console.log(`Selected country code: ${countryCode}`);
  };

  return (
    <ReactFlagsSelect
      countries={['US', 'GB', 'FR', 'DE', 'IT', 'ES']}
      customLabels={{ US: 'USA', GB: 'UK' }}
      onSelect={handleFlagSelect}
      defaultCountry="US"
      showSelectedLabel={false}
      placeholder="Launguage and Currency" // Set a custom button label
    />
  );
};

export default FlagWidget;






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
//       setTimeout(function() {
//         if (check===false) {
//           console.log("huzaifa");
//           console.log(abc.parentNode.removeChild(abc));
//           loadGoogleTranslateScript();
   
//         }
//         else{
          
//           console.log(abc,"huzaifa2222");

//         }
//       },5000)
      
//     };
//   }, [navigate]); 

//   return (
//     <>
//       <div ref={googleTranslateRef} />
//     </>
//   );
// };

// export default GoogleTranslate;
