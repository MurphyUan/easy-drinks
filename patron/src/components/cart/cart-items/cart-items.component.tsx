import { useEffect, useState } from "react";
import { ItemEntity } from "../../../models/shared-data.model";
import { CartService } from "../../../services/cart.service";

interface CartitemProps {
    cart: CartService;
    cartItem: ItemEntity;
    updateCartChange: () => void; 
}

export const CartItemComponent = ({...props}:CartitemProps) => {

    const item = props.cartItem;

    function removeItemFromCart(){
        props.cart.removeFromCart(item);
        props.updateCartChange();
    }

    return(
        <div>
            <a>{item.id}/{item.name} x{item.quantity}: €{item.price}</a>
            <button onClick={removeItemFromCart}>X</button>
        </div>
    )
}