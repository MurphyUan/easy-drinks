import React , { useMemo, useState } from 'react';
import { FireBaseEntity, MenuItemEntity } from '../../models/shared-data.model';
import { CartService } from '../../services/cart.service';
import { FirebaseService } from '../../services/firebase.service';
import { CartComponent } from '../cart/cart.component';
import { MenuComponent } from '../menu/menu.component';
import { BarItemComponent} from './bar-item/bar-item.component';

interface Bars {
    bars: FireBaseEntity[];
    firebase: FirebaseService;
    cart: CartService;
}

export const BarComponent = ({bars, cart, firebase}:Bars) => {
    const [selectedBar, updateSelectedBar] = useState<string>(''); 
    const [menu, updateMenu] = useState<MenuItemEntity[]>([]);
    const [cartChange, updateCartChange] = useState<boolean>(false);

    const forceCartChange = () => updateCartChange(!cartChange);

    useMemo(() => {
        if(bars === [])return;
        const listMenu = bars.findIndex(bar => bar.id === selectedBar);
        if(listMenu >= 0) updateMenu(bars[listMenu].bar.menu);
    },[bars, selectedBar]);

    return (
        <div>
            {bars.map((bar: FireBaseEntity) => {
                return <BarItemComponent key={bar.id} base={bar} selectBar={updateSelectedBar} />
            })}

            { selectedBar !== '' && 
                <div>
                    <MenuComponent 
                        menu={menu} 
                        cart={cart} 
                        updateCartChange={forceCartChange}/>
                    <CartComponent 
                        cart={cart} 
                        cartChange={cartChange}
                        updateCartChange={forceCartChange}
                        firebase={firebase}
                        selectedBar={selectedBar}/>
                </div>
            }
        </div>
    )
}