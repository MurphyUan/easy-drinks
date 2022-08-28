import React, { useState } from "react";

type MenuItemProps = {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    addItemToCart: () => void;
}

export const MenuItemComponent = ({imageUrl, name, description, price, addItemToCart}:MenuItemProps) => {

    const callATIC = () => {
        addItemToCart();
    }

    return(
        <button onClick={callATIC}>
            <img src={imageUrl}></img>
            <h5>{name}</h5>
            <h5>{price}</h5>
            <p>{description}</p>
        </button>
    )
}