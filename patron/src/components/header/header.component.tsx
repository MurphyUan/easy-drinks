import React from "react";

const redirectToUrl = () => {
    // TO BE IMPLEMENTED
}

export function HeaderComponent(){
    return (
        <div className="header-wrapper">
            <header>
                <button className="logo" onClick={redirectToUrl}>
                    <h1>easy-drinks</h1>
                </button>
                <div className="options-panel">
                    {/* Show Cart */}
                    <a></a>
                    {/* Options */}
                    <a></a>
                    {/* Settings */}
                    <a></a>
                </div>
            </header>
        </div>
    )
}