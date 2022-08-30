import React, { useState } from 'react';
import { FirebaseService } from '../../services/firebase.service';
import { OrderItemProps } from './order-item/order-item.component';

type OrderProps = {
    firebaseService: FirebaseService;
}

export type Order = {
    item: OrderItemProps[];
    total: number;
    destination: string;
}

export const OrderComponent = ({...props}:OrderProps) => {

    return (
        <></>
    )
}