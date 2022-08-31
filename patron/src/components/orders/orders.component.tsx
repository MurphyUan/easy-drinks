import React, { useCallback, useEffect, useState } from 'react';
import { ItemEntity, OrderEntity, OrderItemEntity } from '../../models/shared-data.model';
import { OrderModel } from '../../models/order-data.model';
import { FirebaseService } from '../../services/firebase.service';
import { OrderItemComponent } from './order-item/order-item.component';
import { Alert, Button } from 'react-bootstrap';
import './orders.component.scss';

type OrderProps = {
    firebaseService: FirebaseService;
}

export const OrderComponent = ({...props}:OrderProps) => {

    const firebase = props.firebaseService;
    let orderModel: OrderModel;

    const completeOrder = (event: React.MouseEvent ,docId: string): any => {
        event.preventDefault();
        firebase.removeFromCollection(`bars/${firebase.FireBaseAuth}/orders/`, docId)
            .then(() => {
                getOrders();
            })
            .catch( err => console.log(err))
    }

    const [orders, updateOrders] = useState<OrderEntity[]>([]);

    const getOrders = useCallback(() => {
        firebase.getCollection(`bars/${firebase.FireBaseAuth}/orders`)
            .then((result) => {
                orderModel = new OrderModel(result);
                updateOrders(orderModel.Data);
                console.log(orders);
            })
            .catch( err => console.log(err));
    }, []);

    const calculateTotal = (items: ItemEntity[]) => {
        return items.reduce((sum, obj) => {
            return sum + (obj.price * obj.quantity);
        }, 0);
    }

    useEffect(() => {
        getOrders();
    },[]);

    return (
        <div>
            { 
                orders.map(order => {
                    return (
                        <div className='row'>
                            <Alert variant='secondary' style={{width: '18rem'}}>
                                {order.data.items.map( item => {
                                    return (<div>
                                        <OrderItemComponent key={item.id} {...item}/> <br/>
                                    </div>)
                                })}
                                <br/>
                                Total: €{calculateTotal(order.data.items)}
                                <Button onClick={e => completeOrder(e, order.id)}>Complete Order</Button>
                            </Alert>
                        </div>
                    )
                })
            }
        </div>
    )
}