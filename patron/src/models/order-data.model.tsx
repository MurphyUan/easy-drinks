import { DocumentData } from "firebase/firestore";
import { OrderItemEntity } from "./shared-data.model";


export class OrderModel {
    private data: OrderItemEntity[];

    constructor(newData: DocumentData | DocumentData[]){
        newData = ( !Array.isArray(newData)) ? [newData] : newData;
        this.data = newData.map((doc: DocumentData) => {
            return {
                id: doc.id,
                data: doc.data()
            }
        })
    }

    get Data(): OrderItemEntity[] {
        return this.data;
    }
}