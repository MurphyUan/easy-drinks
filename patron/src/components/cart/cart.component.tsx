import React, { useEffect, useMemo, useState } from 'react';
import './cart.component.scss';
import { CartItemComponent } from './cart-items/cart-items.component';
import { CartService } from '../../services/cart.service';
import { ItemEntity, OrderItemEntity } from '../../models/shared-data.model';
import { FirebaseService } from '../../services/firebase.service';

type CartProps = {
    cart: CartService;
    firebase: FirebaseService;
    cartChange: boolean;
    updateCartChange: () => void;
    selectedBar: string;
}

export const CartComponent = ({...props}: CartProps) => {
    const [currentCart, updateCurrentCart] = useState<ItemEntity[]>([]);
    const [location, updateLocation] = useState<number>(1);

    const handleUpdateLocation = (e: any) => updateLocation(e.target.value);

    function publishToCart(){
        const cartInfo : OrderItemEntity = {
            items: currentCart, 
            location: location,
            total: props.cart.getTotal()
        }
        props.firebase.publishCartToOrder(cartInfo, props.selectedBar);
        props.cart.clearCart();
        props.updateCartChange();
    }

    useEffect(() => {
        updateCurrentCart(props.cart.getCart());
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
                {currentCart.length <= 0 &&
                    <div>
                        <a>No Items Inside Cart :(</a>
                    </div>
                }
                <input 
                    type='number' 
                    min={1} 
                    onChange={handleUpdateLocation} 
                    value={location} 
                    placeholder="Please Enter Table Number"/>
                {currentCart.length > 0 && (location != undefined  || location != 0) &&
                    <div>
                        <button onClick={publishToCart}>Publish Cart</button>
                    </div>
                }
            </div>
        </div>
    )
}