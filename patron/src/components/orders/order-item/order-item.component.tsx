import React, { useState } from 'react';

export type OrderItemProps = {
    name: string;
    price: number;
    quantity: number;
}

export const OrderItemComponent = ({...props}:OrderItemProps) => {
    return (
        <a>{props.name} x{props.quantity} : €{props.price}</a>
    )
}