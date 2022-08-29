import './header.component.scss';

export function HeaderComponent(){
    return (
        <div className="header-wrapper">
                <a className="logo" href="https://github.com/MurphyUan/easy-drinks">
                    <h1>easy-drinks</h1>
                </a>
                <div className="options-panel">
                    <button><h2>Options</h2></button>
                    <button><h2>Cart</h2></button>
                </div>
        </div>
    )
}