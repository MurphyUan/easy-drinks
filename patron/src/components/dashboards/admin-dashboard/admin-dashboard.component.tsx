import React, { useCallback, useEffect, useState } from 'react';
import { FireBaseModel } from '../../../models/firebase-data.model';
import { BarEntity } from '../../../models/shared-data.model';
import { FirebaseService } from '../../../services/firebase.service';
import { HeaderComponent } from '../../header/header.component';
import { MenuComponent } from '../../menu/menu.component';
import { OrderComponent } from '../../orders/orders.component';

type AdminDashBoardProps = {
    firebaseService: FirebaseService;
}

export const AdminDashBoardComponent = ({...props}: AdminDashBoardProps) => {

    let firebaseModel: FireBaseModel;
    const firebase = props.firebaseService;

    const [data, setData] = useState<BarEntity>();
    const [displayMenu, updateDisplayMenu] = useState(true);
    const [displayOrders, updateDisplayOrders] = useState(false);
    

    const UpdateDisplayMenu = () => {
        updateDisplayMenu(true);
        updateDisplayOrders(false);
    }

    const UpdateDisplayOrders = () => {
        updateDisplayMenu(false);
        updateDisplayOrders(true);
    }

    const reloadData = useCallback(() => {
        firebase.getSingleCollection('bars', firebase.FireBaseAuth)
            .then((result) => {
                firebaseModel = new FireBaseModel(result)
                setData(firebaseModel.Data[0].bar);
            })
            .catch((err) => console.log(err, 'From ReloadData'));
    },[]);

    useEffect(() => reloadData(),[]);

    return(
        <div>
            <HeaderComponent />
            <div className='front-panel'>
                <button onClick={UpdateDisplayMenu}>Menu</button>
                <button onClick={UpdateDisplayOrders}>Orders</button>
                <button onClick={reloadData}>Reload</button>
            </div>
            <div className='main-panel'>
                { displayMenu && <MenuComponent menu={data?.menu}/>}
                { displayOrders && <OrderComponent firebaseService={firebase}/>}
            </div>        
        </div>
    )
}