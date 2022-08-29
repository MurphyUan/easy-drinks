import { useState } from 'react';
import './App.scss';
import { LoginComponent } from '../login/login.component';
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

  let isAdmin = admin ? <AdminDashBoardComponent firebaseService={firebaseService}/> : <ClientDashBoardComponent firebaseService={firebaseService}/>
  let mainDisplay = auth ? isAdmin : <LoginComponent setToken={checkAuth} firebaseService={firebaseService}/>
  

  return (
    <div className="wrapper">
      { mainDisplay }
    </div>
  );
}
