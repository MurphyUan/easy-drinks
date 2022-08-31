import React, { useState } from 'react';
import { ItemEntity } from '../../../models/shared-data.model';

export const OrderItemComponent = ({...props}:ItemEntity) => {
    return (
        <a>{props.name} x{props.quantity} : €{props.price * props.quantity}</a>
    )
}