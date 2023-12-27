import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import LandingPage from './Pages/LandingPage.js';
import HomePage from './Pages/HomePage.js';
import global_en from './components/LagnuageWegit/en/global.json'; // Fix typo in the path
import global_vv from './components/LagnuageWegit/Viretnam vietamamese (vv)/global.json'
import global_cb from './components/LagnuageWegit/cambodia Burma (cb)/global.json'
import global_ii from './components/LagnuageWegit/indonesia idonesian (ii)/global.json'
import global_ll from './components/LagnuageWegit/laos lao (ll)/global.json'
import global_mm from './components/LagnuageWegit/malaysia malay (mm)/global.json'
import global_mb from './components/LagnuageWegit/myanmar Burmese(mb)/global.json'

import i18next from 'i18next';
import NoteState from './context/check/NoteState.js';
import { Provider } from 'react-redux';
import { store } from './state/store.js';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en, // Fix key name to 'global'
    },
    vv: {
      global: global_vv, // Fix key name to 'global'
    },
    cb: {
      global: global_cb, // Fix key name to 'global'
    },
    ii: {
      global: global_ii, // Fix key name to 'global'
    },
    ll: {
      global: global_ll, // Fix key name to 'global'
    },
    mm: {
      global: global_mm, // Fix key name to 'global'
    },
    mb: {
      global: global_mb, // Fix key name to 'global'
    },
  },
});

function App() {
  return (
    <NoteState>
    <Router>
      <Provider store={store}>
      <I18nextProvider i18n={i18next}> {/* Provide the i18n instance to I18nextProvider */}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </I18nextProvider>
      </Provider>
    </Router>
    </NoteState>
  );
}

export default App;
