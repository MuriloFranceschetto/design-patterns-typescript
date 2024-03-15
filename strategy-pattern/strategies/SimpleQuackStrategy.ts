import { IQuackBehavior } from "../interfaces/IQuackBehavior";

export class SimpleQuackStrategy implements IQuackBehavior {
    quack() {
        console.log('QUAAACKK 🦆');
    };
}