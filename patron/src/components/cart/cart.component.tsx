import React, { useEffect, useMemo, useState } from 'react';
import './cart.component.scss';
import { CartItemComponent } from './cart-items/cart-items.component';
import { CartService } from '../../services/cart.service';
import { ItemEntity } from '../../models/firebase-data.model';
import { FirebaseService } from '../../services/firebase.service';

type CartProps = {
    cart: CartService;
    firebase: FirebaseService;
    cartChange: boolean;
    updateCartChange: () => void;
}

export const CartComponent = ({...props}: CartProps) => {
    const [currentCart, updateCurrentCart] = useState<ItemEntity[]>([]);

    function publishCart(){
        props.firebase.publishCartToOrder(currentCart);
    }

    useEffect(() => {
        updateCurrentCart(props.cart.getCart());
        console.log("Cart Updated", currentCart);
    },[props.cartChange]);

    return (
        <div>
            <div className='scroll'>
                { currentCart.map(item => {
                    return <CartItemComponent 
                        key={item.id} 
                        cart={props.cart} 
                        cartItem={item}
                        updateCartChange={props.updateCartChange}/>
                })}
                {currentCart.length > 0 && 
                    <button onClick={publishCart}>Publish Cart</button>
                }
            </div>
        </div>
    )
}