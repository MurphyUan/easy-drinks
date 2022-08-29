import React, { useState } from 'react';
import './cart.component.scss';
import { CartItemComponent } from './cart-items/cart-items.component';

type CartProps = {
    
}

export const CartComponent = ({...props}: CartProps) => {
    return (
        <div>
            <div className='scroll'>
                {}
            </div>
        </div>
    )
}