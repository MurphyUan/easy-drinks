import React, { useState } from 'react';

export function LoginComponent( 
    setToken: any
    ){

    return(
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p></p>
                    <input type="text"/>
                </label>
                <label>
                    <p></p>
                    <input type="password"/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}