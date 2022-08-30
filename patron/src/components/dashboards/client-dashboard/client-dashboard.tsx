import { useState, useCallback, useEffect } from 'react';
import { FireBaseEntity, FireBaseModel } from '../../../models/firebase-data.model';
import { FirebaseService} from '../../../services/firebase.service';
import { BarComponent } from '../../bar/bar.component';
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

    let firebaseModel: FireBaseModel;

    const [data, setData] = useState<FireBaseEntity[]>([]);

    const reloadData = useCallback(() => {
        props.firebaseService.getCollection('bars')
            .then((result) => {
                firebaseModel = new FireBaseModel(result);
                setData(firebaseModel.Data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    useEffect(() => reloadData(), []);

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
                <button onClick={reloadData}>Reload</button>
            </div>
            <div className='main-panel'>
                { bar && <BarComponent bars={data} />}
            </div>
        </div>
    )
}