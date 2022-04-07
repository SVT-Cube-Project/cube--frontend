import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { TopNavigationBarContainer } from './layouts/topNavigationBar/TopNavigationBar.container';
import { HeaderBarContainer } from './layouts/headerBar/HeaderBar.container';
import { HomePageContainer } from './pages/homePage/HomePage.container';

function App() {
  return (
    <div className="App">
      <HeaderBarContainer />
      <TopNavigationBarContainer />
      <Routes>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/home" element={<HomePageContainer />} />
        <Route path="/accueil" element={<HomePageContainer />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
