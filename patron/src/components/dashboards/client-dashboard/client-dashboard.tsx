import React, { useState, useEffect } from 'react';
import { FirebaseService } from '../../../services/firebase.service';
import { CartComponent } from '../../cart/cart.component';
import { HeaderComponent } from '../../header/header.component';
import { MenuComponent } from '../../menu/menu.component';

type ClientDashBoardProps = {
    firebaseService: FirebaseService;
}

export const ClientDashBoardComponent = ({...props}:ClientDashBoardProps) => {
    const [menu, updateMenu] = useState(true);
    const [cart, updateCart] = useState(false);

    const showMenu = () => {
        updateCart(false);
        updateMenu(true);
    }

    const showCart = () => {
        updateCart(true);
        updateMenu(false);
    }

    const displayMenu = menu ? <MenuComponent/>: undefined;
    const displayCart = cart ? <CartComponent/>: undefined;

    return (
        <div>
            <HeaderComponent />
            <div className='front-panel'>
                <button onClick={showMenu}>Show Menu</button>
                <button onClick={showCart}>Show Cart</button>
            </div>
            <div className='main-panel'>
                {displayMenu}
                {displayCart}
            </div>
        </div>
    )
}