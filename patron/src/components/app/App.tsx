import React, { useState } from 'react';
import { SitePageComponent } from '../site-page/site-page.component';
import { LoginComponent } from '../login/login.component';
import './App.scss';

export function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <LoginComponent setToken={setToken} />
  }

  return (
    <div className="App">
      <SitePageComponent></SitePageComponent>
    </div>
  );
}
