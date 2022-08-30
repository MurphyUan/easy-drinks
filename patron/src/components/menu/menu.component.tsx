import React, { useState } from 'react';
import { MenuItemEntity } from '../../models/firebase-data.model';
import { CartService } from '../../services/cart.service';
import { MenuItemComponent } from './menu-item/menu-item.component';

interface MenuProps {
    menu: MenuItemEntity[];
    cart: CartService;
    updateCartChange: () => void;
}

export const MenuComponent = ({...props}: MenuProps) => {

    console.log("Current Menu:", props.menu);

    return (
        <div>
            { props.menu && 
                props.menu.map( menuItem => 
                    <MenuItemComponent 
                        key={menuItem.id} 
                        menuEntity={menuItem} 
                        canBeDisabled={false} 
                        cart={props.cart}
                        updateCartChange={props.updateCartChange}/>
                )}
        </div>
    )
}