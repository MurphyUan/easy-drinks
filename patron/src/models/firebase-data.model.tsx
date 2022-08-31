import { DocumentData } from "firebase/firestore";

export interface FireBaseEntity {
    id: string;
    bar: BarEntity; 
}

export interface BarEntity {
    name: string;
    description: string;
    menu: MenuItemEntity[];
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
    items: ItemEntity[];
    location: number;
    total: number;
}

export interface ItemEntity {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export class FireBaseModel {
    private data: FireBaseEntity[];
    private barID: string;

    constructor(firebaseData: DocumentData | DocumentData[]){
        this.barID = '';
        firebaseData = (!Array.isArray(firebaseData)) ? [firebaseData] : firebaseData ;
        this.data = firebaseData.map((doc: DocumentData) => {
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