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
                <div className="options-panel">
                    {/* Show Cart */}
                    <button>Cart</button>
                    {/* Options */}
                    <button>Options</button>
                    {/* Settings */}
                    <button>Settings</button>
                </div>
        </div>
    )
}