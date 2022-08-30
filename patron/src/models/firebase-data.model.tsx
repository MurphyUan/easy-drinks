import { DocumentData } from "firebase/firestore";

export interface FireBaseEntity {
    id: string;
    bar: BarEntity; 
}

export interface BarEntity {
    name: string;
    description: string;
    menu_items: MenuItemEntity[];
    orders: OrderItemEntity[];
}

export interface MenuItemEntity {
    id: string;
    name: string;
    description: string;
    disabled: boolean;
    imageUri: string;
    ingredients: Array<string>;
    price: number;
}

export interface OrderItemEntity {
    items: any[];
    location: number;
    total: number;
}

export interface ItemEntity {
    id: string;
    price: number;
    quantity: number;
}

export class FireBaseModel {
    private data: FireBaseEntity[];
    private barID: string;

    constructor(firebaseData: DocumentData[]){
        this.barID = '';
        this.data = firebaseData.map(doc => {
            return {
                id: doc.id,
                bar: doc.data()
            }
        })
    }

    get Data(): FireBaseEntity[] {
        return this.data;
    }

    get BarID(): string {
        return this.barID;
    }

    set BarID(param: string) {
        this.barID = param;
    }
}