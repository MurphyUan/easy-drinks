import React, { useState } from "react";

export type MenuItemProps = {
    imageUri: string;
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    disabled: boolean;
}

export const MenuItemComponent = ({...props}:MenuItemProps, addItemToCart: () => void, canBeDisabled: boolean) => {

    return(
        <button onClick={addItemToCart}>
            <img src={props.imageUri}></img>
            <h5>{props.name}</h5>
            <h5>{props.price}</h5>
            <p>{props.description}</p>
        </button>
    )
}