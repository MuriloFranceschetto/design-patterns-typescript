import { IFlyBehavior } from "../interfaces/IFlyBahavior";

export class SimpleFlyStrategy implements IFlyBehavior {
    fly() {
        console.log('🪽🪽');
    };
}