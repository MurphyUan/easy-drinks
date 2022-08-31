import React , { useMemo, useState } from 'react';
import { FireBaseEntity, MenuItemEntity } from '../../models/shared-data.model';
import { CartService } from '../../services/cart.service';
import { FirebaseService } from '../../services/firebase.service';
import { CartComponent } from '../cart/cart.component';
import { MenuComponent } from '../menu/menu.component';
import { BarItemComponent} from './bar-item/bar-item.component';
import Accordion from 'react-bootstrap/Accordion';

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
            <Accordion defaultActiveKey={['0', '1', '2']} flush alwaysOpen>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Bars</Accordion.Header>
                    <Accordion.Body>
                        {bars.map((bar: FireBaseEntity) => {
                            return <BarItemComponent key={bar.id} base={bar} selectBar={updateSelectedBar} />
                        })}
                    </Accordion.Body>
                </Accordion.Item>
                { selectedBar !== '' && 
                    <div>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Menu</Accordion.Header>
                            <Accordion.Body>
                                <MenuComponent 
                                    menu={menu} 
                                    cart={cart} 
                                    updateCartChange={forceCartChange}/>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Cart</Accordion.Header>
                            <Accordion.Body>
                                <CartComponent 
                                    cart={cart} 
                                    cartChange={cartChange}
                                    updateCartChange={forceCartChange}
                                    firebase={firebase}
                                    selectedBar={selectedBar}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                }
                
            </Accordion>
        </div>
    )
}