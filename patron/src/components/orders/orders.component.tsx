import React, { useState } from 'react';
import { FirebaseService } from '../../services/firebase.service';

type OrderProps = {
    firebaseService: FirebaseService;
}

export type Order = {
    name: string;
    quantity: number;
    price: number;
    destination: string;
}

export const OrderComponent = ({...props}:OrderProps) => {

    return (
        <></>
    )
}