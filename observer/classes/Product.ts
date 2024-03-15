import { Observable } from "./Observable";

export class Product extends Observable {

    public readonly name: string;
    public quantity: number = 0;

    constructor(name: string) {
        super();
        this.name = name;
    }

    addQuantity(qtt: number) {
        this.quantity += qtt;
        this.notify();
    }

}