import { DocumentData } from "firebase/firestore";
import { FireBaseEntity } from "./shared-data.model";

export class FireBaseModel {
    private data: FireBaseEntity[];

    constructor(firebaseData: DocumentData | DocumentData[]){
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
}