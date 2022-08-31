import React, { useState } from "react";
import { FireBaseEntity } from "../../../models/firebase-data.model";
import './bar-item.component.scss';

interface BarItemProps {
    base: FireBaseEntity;
    selectBar: (param: string) => void;
}

export const BarItemComponent = ({...item}: BarItemProps ) => {

    const props = item.base.bar;

    function passArgs(){
        item.selectBar(item.base.id);
    }

    return (
        <div className="bar-item">
            <a>{props.name}</a>
            <p>{props.description}</p>
            <button onClick={passArgs}>Select Bar</button>
        </div>
    )
}