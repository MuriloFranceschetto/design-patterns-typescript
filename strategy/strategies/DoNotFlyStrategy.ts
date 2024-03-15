import { IFlyBehavior } from "../interfaces/IFlyBahavior";

export class DoNotFlyStrategy implements IFlyBehavior {
    fly() {
        console.log('NOP');
    }
}