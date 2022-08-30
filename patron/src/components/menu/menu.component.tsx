import React, { useState } from 'react';
import { MenuItemEntity } from '../../models/firebase-data.model';
import { MenuItemComponent } from './menu-item/menu-item.component';

interface MenuProps {
    menu: MenuItemEntity[];
}

export const MenuComponent = ({...props}: MenuProps) => {

    console.log("Current Menu:", props.menu);

    return (
        <div>
            { props.menu && props.menu.map( menuItem => <MenuItemComponent key={menuItem.id} {...menuItem}/>)}
        </div>
    )
}