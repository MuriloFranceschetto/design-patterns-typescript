import { IObserver } from "../interfaces/IObserver";
import { Product } from "./Product";

export class Client implements IObserver {

    private readonly _product: Product;

    constructor(product: Product) {
        this._product = product;
    }

    update() {
        console.log(`Email enviado para cliente 📨: Chegou um novo ${this._product.name}`);
    }

    unobserveProduct() {
        this._product.remove(this);
    }

}