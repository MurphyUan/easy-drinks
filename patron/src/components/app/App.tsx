import React, { useState } from 'react';
import './App.scss';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';


export function App() {
  const [token, setToken] = useState();

  let canAccess = token ? <DashboardComponent/> : <LoginComponent/>

  return (
    <div className="wrapper">
      {canAccess}
    </div>
  );
}
