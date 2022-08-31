import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FirebaseService } from '../../services/firebase.service';
import './login.component.scss';

type LoginComponentProps = {
    firebaseService: FirebaseService;
    setToken: (value1: boolean, value2: boolean) => void;
}

export const LoginComponent = ({firebaseService, setToken}:LoginComponentProps) => {

    const [ email, updateEmail] = useState('');
    const [ password, updatePassword] = useState('');
    const [ invalidCredentials, updateInvalid] = useState(false);

    const displayError = invalidCredentials ? <><a className='error'>Invalid Credentials</a><br/></> : undefined ;

    const handleEmailChange = ((e: any) => {
        updateEmail(e.target.value)
        updateInvalid(false);
    });
    const handlePassChange = ((e: any) => {
        updatePassword(e.target.value)
        updateInvalid(false);
    });

    function checkEmailAuth(){
        firebaseService.setupEmailAuth(email, password)
            .then((result: boolean) => setToken(result, true))
            .catch((err) => {
                console.log(err);
                updateInvalid(true);
            });
    }

    function checkAnonymousAuth(){
        firebaseService.setupAnonymouseAuth()
            .then((result: boolean) => setToken(result, false))
            .catch((err) => console.log(err));
    }

    return(
        
        <div className='page'>
            <h1>Sign In</h1>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='name@example.com'
                        onChange={handleEmailChange}
                        value={email}/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label></Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='***********'
                        onChange={handlePassChange}
                        value={password}/>
                </Form.Group>
                <Button onClick={checkEmailAuth}>Submit</Button><br/>
                {displayError}<br/>
                <Button onClick={checkAnonymousAuth}>Continue as Guest</Button>
            </Form>
        </div>
    )
}
