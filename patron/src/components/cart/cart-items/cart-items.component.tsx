export type CartItemProps = {
    name: string;
    quantity: number;
    price: number;
}

export const CartItemComponent = ({...props}:CartItemProps) => {
    return(
        <div>
            <a>{props.name} x{props.quantity}: €{props.price}</a>
        </div>
    )
}