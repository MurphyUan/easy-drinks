import React, { useState } from "react";
import { MenuItemEntity } from "../../../models/firebase-data.model";
import { CartService } from "../../../services/cart.service";

export type MenuItemProps = {
    menuEntity: MenuItemEntity;
    canBeDisabled?: boolean;
    cart?: CartService;
    updateCartChange?: () => void;
}

export const MenuItemComponent = ({...props}:MenuItemProps) => {

    const menuItem = props.menuEntity;

    function addItemToCart(){
        if(props.cart && props.updateCartChange){
            props.cart.addToCart({
                id: menuItem.id,
                name: menuItem.name,
                price: menuItem.price, 
                quantity: 1
            });
            props.updateCartChange();
        }
    }

    return(
        <button onClick={addItemToCart}>
            <img src={menuItem.imageUri}></img>
            <h5>{menuItem.name}</h5>
            <h5>{menuItem.price}</h5>
            <p>{menuItem.description}</p>
        </button>
    )
}