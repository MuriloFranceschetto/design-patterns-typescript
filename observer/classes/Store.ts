import { Client } from "./Client";
import { Product } from "./Product";

export class Store {

    constructor() {
        const biscuit = new Product('biscoitinho');
        const joao = new Client(biscuit);
        biscuit.add(joao);

        biscuit.addQuantity(4);

        joao.unobserveProduct();

        biscuit.addQuantity(3);
    }

}