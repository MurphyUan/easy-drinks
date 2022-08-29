import React, { useState, useMemo } from 'react';
import './App.scss';
import { DashboardComponent } from '../dashboards/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FirebaseService } from '../../services/firebase.service';
import { AdminDashBoardComponent } from '../dashboards/admin-dashboard/admin-dashboard';
import { ClientDashBoardComponent } from '../dashboards/client-dashboard/client-dashboard';

export const App = () => {
  const [auth, updateAuth] = useState(false);
  const [admin, updateAdmin] = useState(false);

  const firebaseService = new FirebaseService();

  function checkAuth(hasAuth: boolean, hasAdmin: boolean){
    updateAuth(hasAuth);
    updateAdmin(hasAdmin);
  }

  // useMemo(() => {
  //   firebaseService.setupAnonymouseAuth()
  //     .then(result => setToken(result))
  //     .catch(() => setToken(false));
  // }, []);

  // useMemo(() => {
  //   firebaseService.getCollection('restaurants')
  //     .then(result => {
  //       console.log(result)
  //       setRestaurant(result)
  //     })
  //     .catch(err => console.log(err));
  // }, [])
  
  let canAccess = auth ? <HeaderComponent/> : <LoginComponent setToken={checkAuth} firebaseService={firebaseService}/>
  let isAdmin = admin ? <AdminDashBoardComponent firebaseService={firebaseService}/> : <ClientDashBoardComponent firebaseService={firebaseService}/>

  return (
    <div className="wrapper">
      { canAccess }
      { isAdmin }
    </div>
  );
}
