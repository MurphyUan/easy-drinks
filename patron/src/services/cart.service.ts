import { ItemEntity } from "../models/firebase-data.model";

export class CartService {
    private cart: ItemEntity[];

    constructor(){
        this.cart = [];
    }

    public getCart(){
        return this.cart;
    }

    public getTotal(){
        return this.getCart().reduce((sum, obj) => {
            return sum + (obj.price * obj.quantity);
        }, 0);
    }

    public clearCart(){
        this.cart = [];
    }

    public addToCart(item: ItemEntity){
        const cartItem = this.cart.findIndex(c => c.id === item.id)
        if(cartItem >= 0){
            this.cart[cartItem].quantity += 1;
            return;
        }
        this.cart.push(item);
    }

    public removeFromCart(item: ItemEntity){
        const cartItem = this.cart.findIndex(c => c.id === item.id)
        if(cartItem < 0) return;
        if(cartItem >= 0 && this.cart[cartItem].quantity > 1){
            this.cart[cartItem].quantity -= 1;
            return;
        }
        this.cart.splice(cartItem, 1);
    }
}