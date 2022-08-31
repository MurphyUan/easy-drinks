import React, { useState } from "react";
import { MenuItemEntity } from "../../../models/shared-data.model";
import { CartService } from "../../../services/cart.service";
import './menu-item.component.scss';

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

        <div className="menu-item">
                <div className="left">
                    <img src={menuItem.imageUri}></img>
                </div>
                <div className="right">
                    <h3>{menuItem.name} €{menuItem.price}</h3>
                    <p>{menuItem.description}</p>
                    <button onClick={addItemToCart}>Add Item</button>
                </div>
        </div>
    )
}