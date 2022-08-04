import React from "react";
import './header.component.scss';

const redirectToUrl = () => {
    // TO BE IMPLEMENTED
}

export function HeaderComponent(){
    return (
        <div className="header-wrapper">
                <button className="logo" onClick={redirectToUrl}>
                    <h1>easy-drinks</h1>
                </button>
                <div className="search-bar">
                    <input type="text" />
                </div>
                <div className="options-panel">
                    <button><h2>Options</h2></button>
                    <button><h2>Cart</h2></button>
                </div>
        </div>
    )
}