import { Duck } from "../Duck";
import { DoNotFlyStrategy } from "../strategies/DoNotFlyStrategy";
import { DoNotQuackStrategy } from "../strategies/DoNotQuackStrategy";

class RubberDuck extends Duck {

    constructor() {
        super(new DoNotFlyStrategy(), new DoNotQuackStrategy());
    }

}