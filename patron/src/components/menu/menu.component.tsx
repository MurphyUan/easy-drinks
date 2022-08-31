import React, { useState } from 'react';
import { MenuItemEntity } from '../../models/shared-data.model';
import { CartService } from '../../services/cart.service';
import { MenuItemComponent } from './menu-item/menu-item.component';

interface MenuProps {
    menu?: MenuItemEntity[];
    canBeDisabled?: boolean;
    cart?: CartService;
    updateCartChange?: () => void;
}

export const MenuComponent = ({...props}: MenuProps) => {

    return (
        <div>
            { props.menu && 
                props.menu.map( menuItem => 
                    <MenuItemComponent 
                        key={menuItem.id} 
                        menuEntity={menuItem} 
                        canBeDisabled={props.canBeDisabled} 
                        cart={props.cart}
                        updateCartChange={props.updateCartChange}/>
                )}
        </div>
    )
}