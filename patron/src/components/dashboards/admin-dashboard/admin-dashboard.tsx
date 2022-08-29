import React, { useState } from 'react';
import { FirebaseService } from '../../../services/firebase.service';

type AdminDashBoardProps = {
    firebaseService: FirebaseService;
}

export const AdminDashBoardComponent = ({...props}: AdminDashBoardProps) => {

    // Has Three Profiles: Menu, Restaurant Description, Orders
    return(
        <>Admin Dashboard</>
    )
}