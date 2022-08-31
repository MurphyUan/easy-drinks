import { useState, useCallback, useEffect } from 'react';
import { FireBaseEntity } from '../../../models/shared-data.model';
import { FireBaseModel } from '../../../models/firebase-data.model';
import { CartService } from '../../../services/cart.service';
import { FirebaseService} from '../../../services/firebase.service';
import { BarComponent } from '../../bar/bar.component';
import { HeaderComponent } from '../../header/header.component';
import './client-dashboard.component.scss'

type ClientDashBoardProps = {
    firebaseService: FirebaseService;
}

export const ClientDashBoardComponent = ({...props}:ClientDashBoardProps) => {

    let firebaseModel: FireBaseModel;
    const cartService = new CartService();

    const [data, setData] = useState<FireBaseEntity[]>([]);

    const reloadData = useCallback(() => {
        props.firebaseService.getCollection('bars')
            .then((result) => {
                firebaseModel = new FireBaseModel(result);
                setData(firebaseModel.Data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <div className='dashboard'>
            <HeaderComponent />
            <div className='front-panel'>
                <button onClick={reloadData}>Reload</button>
            </div>
            <div className='main-panel'>
                <BarComponent bars={data} cart={cartService} firebase={props.firebaseService}/>
            </div>
        </div>
    )
}