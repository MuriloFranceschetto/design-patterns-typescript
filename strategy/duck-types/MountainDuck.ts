import { Duck } from "../Duck";
import { SimpleFlyStrategy } from "../strategies/SimpleFlyStrategy";
import { SimpleQuackStrategy } from "../strategies/SimpleQuackStrategy";

class MountainDuck extends Duck {

    constructor() {
        super(new SimpleFlyStrategy(), new SimpleQuackStrategy());
    }

}