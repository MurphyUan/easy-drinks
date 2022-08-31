import { DocumentData } from "firebase/firestore";
import { OrderEntity } from "./shared-data.model";


export class OrderModel {
    private data: OrderEntity[];

    constructor(newData: DocumentData | DocumentData[]){
        newData = ( !Array.isArray(newData)) ? [newData] : newData;
        this.data = newData.map((doc: DocumentData) => {
            return {
                id: doc.id,
                data: doc.data()
            }
        })
    }

    get Data(): OrderEntity[] {
        return this.data;
    }
}