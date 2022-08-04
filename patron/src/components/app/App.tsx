import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { SitePageComponent } from '../site-page/site-page.component';
import { LoginComponent } from '../login/login.component';


export function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <LoginComponent setToken={setToken} />
  }

  return (
    <div className="wrapper">
      {/* Header */}
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard'>

          </Route>
          <Route path='/cart'>
            
          </Route>
        </Routes>
      </BrowserRouter>
      <SitePageComponent></SitePageComponent>
    </div>
  );
}
