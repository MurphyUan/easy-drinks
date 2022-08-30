import React , { useMemo, useState } from 'react';
import { FireBaseEntity, MenuItemEntity } from '../../models/firebase-data.model';
import { CartComponent } from '../cart/cart.component';
import { MenuComponent } from '../menu/menu.component';
import { BarItemComponent} from './bar-item/bar-item.component';

interface Bars {
    bars: FireBaseEntity[];
}

export const BarComponent = ({bars}:Bars) => {
    const [selectedBar, updateSelectedBar] = useState<string>(''); 
    const [menu, updateMenu] = useState<MenuItemEntity[]>([]);

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
                    <MenuComponent menu={menu}/>
                    <CartComponent />
                </div>
            }
        </div>
    )
}