import { IFlyBehavior } from "./interfaces/IFlyBahavior";
import { IQuackBehavior } from "./interfaces/IQuackBehavior";
import { SimpleFlyStrategy } from "./strategies/SimpleFlyStrategy";
import { SimpleQuackStrategy } from "./strategies/SimpleQuackStrategy";

export abstract class Duck {

    private _flyBehavior: IFlyBehavior = new SimpleFlyStrategy();
    private _quackBehavior: IQuackBehavior = new SimpleQuackStrategy();

    constructor(flyBehavior: IFlyBehavior, quackBehavior: IQuackBehavior) {
        this._flyBehavior = flyBehavior;
        this._quackBehavior = quackBehavior;
    }

    fly() {
        this._flyBehavior.fly();
    }

    quack() {
        this._quackBehavior.quack();
    }

}