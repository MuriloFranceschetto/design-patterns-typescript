import { Client } from "./Client";
import { Product } from "./Product";

export class Store {

    constructor() {
        const biscuit = new Product('biscuit');
        const joao = new Client(biscuit);
        biscuit.add(joao);

        biscuit.addQuantity(4);
    }

}