import React, { useState } from 'react';
import { FirebaseService } from '../../../services/firebase.service';
import { HeaderComponent } from '../../header/header.component';

type AdminDashBoardProps = {
    firebaseService: FirebaseService;
}

export const AdminDashBoardComponent = ({...props}: AdminDashBoardProps) => {

    // Has Three Profiles: Menu, Restaurant Description, Orders
    return(
        <>
            <div className='front-panel'>
                <HeaderComponent/>
            </div>
            <div className='left-panel'>
                
            </div>
            <div className='right-panel'>
                
            </div>        
        </>
    )
}