import { IQuackBehavior } from "../interfaces/IQuackBehavior";

export class DoNotQuackStrategy implements IQuackBehavior {
    quack() {
        console.log('MEOW 😺');
    };
}