import React , { useState } from 'react';
import { BarEntity, FireBaseEntity } from '../../models/firebase-data.model';
import { BarItemComponent} from './bar-item/bar-item.component';

interface Bars {
    bars: FireBaseEntity[];
}

export const BarComponent = ({bars}:Bars) => {

    return (
        <div>
            {bars.map((bar: FireBaseEntity) => {
                return <BarItemComponent key={bar.id} {...bar} />
            })}
        </div>
    )
}