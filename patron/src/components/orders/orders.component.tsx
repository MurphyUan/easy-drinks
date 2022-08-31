import React, { useCallback, useEffect, useState } from 'react';
import { OrderItemEntity } from '../../models/shared-data.model';
import { OrderModel } from '../../models/order-data.model';
import { FirebaseService } from '../../services/firebase.service';
import { OrderItemComponent } from './order-item/order-item.component';

type OrderProps = {
    firebaseService: FirebaseService;
}

export const OrderComponent = ({...props}:OrderProps) => {

    const firebase = props.firebaseService;
    let orderModel: OrderModel;

    const [orders, updateOrders] = useState<OrderItemEntity[]>([]);

    const getOrders = useCallback(() => {
        firebase.getCollection(`bars/${firebase.FireBaseAuth}/orders`)
            .then((result) => {
                orderModel = new OrderModel(result);
                updateOrders(orderModel.Data);
            })
            .catch( err => console.log(err));
    }, []);

    useEffect(() => {
        getOrders();
    },[]);

    return (
        <div>
            { orders.map( order => {
                return order.items.map( item => {
                    return <OrderItemComponent key={item.id} {...item}/>
                })
            })}
        </div>
    )
}