import React, { useState } from 'react';
import { FirebaseService } from '../../services/firebase.service';
import './login.component.scss';

type LoginComponentProps = {
    firebaseService: FirebaseService;
    setToken: (value: boolean) => void;
}

export const LoginComponent = ({firebaseService, setToken}:LoginComponentProps) => {

    const [ email, updateEmail] = useState('');
    const [ password, updatePassword] = useState('');
    const [ invalidCredentials, updateInvalid] = useState(false);

    const displayError = invalidCredentials ? <><a className='error'>Invalid Credentials</a><br/></> : undefined ;

    const handleEmailChange = ((e: any) => updateEmail(e.target.value));
    const handlePassChange = ((e: any) => updatePassword(e.target.value));

    function checkEmailAuth(){
        firebaseService.setupEmailAuth(email, password)
            .then((result: boolean) => setToken(result))
            .catch((err) => {
                console.log(err);
                updateInvalid(true);
            });
    }

    function checkAnonymousAuth(){
        firebaseService.setupAnonymouseAuth()
            .then((result: boolean) => setToken(result))
            .catch((err) => console.log(err));
    }

    return(
        <div className='login wrapper'>
            <h1>Sign in</h1>
            <input type="text" value={email} onChange={handleEmailChange} placeholder='Email'/><br/>
            <input type="password" value={password} onChange={handlePassChange} placeholder='Password'/><br/>
            <button className='admin' onClick={checkEmailAuth}>Submit</button><br/><br/>
            {displayError}
            <button className='default' onClick={checkAnonymousAuth}>Continue As Guest</button>
        </div>
    )
}