import React, { useState } from "react";

export type MenuItemProps = {
    imageUrl: string;
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    disabled: boolean;
    addItemToCart: () => void;
}

export const MenuItemComponent = ({...props}:MenuItemProps, canBeDisabled: boolean) => {

    const callATIC = () => {
        props.addItemToCart();
    }

    return(
        <button onClick={callATIC}>
            <img src={props.imageUrl}></img>
            <h5>{props.name}</h5>
            <h5>{props.price}</h5>
            <p>{props.description}</p>
        </button>
    )
}