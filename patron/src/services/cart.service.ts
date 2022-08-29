type CartProps = {

};

export class CartService {
    private cart: CartProps[];

    constructor(){
        this.cart = [];
    }

    public getCart(){
        return this.cart;
    }

    public clearCart(){
        this.cart = [];
    }

    public addToCart(item: CartProps){
        this.cart.push(item);
    }

    public removeFromCart(index: number){
        if(this.cart.length < index) return;
        this.cart.splice(index, 1);
    }
}