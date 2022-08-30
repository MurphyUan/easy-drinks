import React, { useState } from "react";
import { FireBaseEntity } from "../../../models/firebase-data.model";
import { MenuItemProps } from "../../menu/menu-item/menu-item.component";
import { Order } from "../../orders/orders.component";
import './bar-item.component.scss';

export type BarItemProps = {
    name: string;
    description: string;
    menu: MenuItemProps[];
    orders: Order;
}

export const BarItemComponent = ({...bar}: FireBaseEntity , selectBar: (param: string) => void) => {

    function passArgs(){
        selectBar(bar.id);
    }

    return (
        <div className="bar-item">
            <a>{bar.bar.name}</a>
            <p>{bar.bar.description}</p>
            <button onClick={passArgs}>Select Bar</button>
        </div>
    )
}