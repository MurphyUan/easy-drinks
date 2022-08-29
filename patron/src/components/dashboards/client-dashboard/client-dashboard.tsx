import { useState, useCallback, useMemo, useEffect } from 'react';
import { FirebaseService } from '../../../services/firebase.service';
import { BarComponent, BarProps } from '../../bar/bar.component';
import { CartComponent } from '../../cart/cart.component';
import { HeaderComponent } from '../../header/header.component';
import { MenuComponent } from '../../menu/menu.component';

type ClientDashBoardProps = {
    firebaseService: FirebaseService;
}

export const ClientDashBoardComponent = ({...props}:ClientDashBoardProps) => {
    const [bar, selectBar] = useState(true);
    const [menu, selectMenu] = useState(false);
    const [cart, selectCart] = useState(false);

    const [data, setData] = useState<any>([]);

    const getData = useCallback(() => {
        props.firebaseService.getCollection('bars')
            .then((result) => {
                console.log(result);
                setData(result);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    useEffect(() => getData(), []);

    const showBar = () => {
        selectBar(true);
        selectCart(false);
        selectMenu(false);
    }

    const showCart = () => {
        selectBar(false);
        selectCart(true);
        selectMenu(false);
    }
    
    const showMenu = () => {
        selectBar(false);
        selectCart(false);
        selectMenu(true);
    }

    return (
        <div>
            <HeaderComponent />
            <div className='front-panel'>
                <button onClick={showBar}>Bar</button>
                <button onClick={showMenu}>Menu</button>
                <button onClick={showCart}>Cart</button>
                <button onClick={getData}>Reload</button>
            </div>
            <div className='main-panel'>
                {bar && <BarComponent data={data}/>}
                {menu && <MenuComponent/>}
                {cart && <CartComponent/>}
            </div>
        </div>
    )
}