import React, { useState, useMemo } from 'react';
import './App.scss';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { FirebaseService } from '../../services/firebase.service';

type Restaurant = {
  test: string
}[]

export const App = () => {
  const [token, setToken] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant>([]);

  const firebaseService = new FirebaseService();

  useMemo(() => {
    firebaseService.setupAnonymouseAuth()
      .then(result => setToken(result))
      .catch(() => setToken(false));
  }, []);

  useMemo(() => {
    firebaseService.getCollection('restaurants')
      .then(result => {
        console.log(result)
        setRestaurant(result)
      })
      .catch(err => console.log(err));
  }, [])
  
  let canAccess = token ? <DashboardComponent/> : <LoginComponent/>

  return (
    <div className="wrapper">
      <HeaderComponent />
      {restaurant.map(data => <li>{data.test}</li>)}
    </div>
  );
}
