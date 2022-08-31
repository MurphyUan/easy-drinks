import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
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
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={menuItem.imageUri}/>
            <Card.Body>
                <Card.Body>
                    <Card.Title>{menuItem.name} €{menuItem.price}</Card.Title>
                    <Button onClick={addItemToCart}>Add Item</Button>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}