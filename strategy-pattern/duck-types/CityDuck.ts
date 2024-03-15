import { Duck } from "../Duck";
import { DoNotFlyStrategy } from "../strategies/DoNotFlyStrategy";
import { SimpleQuackStrategy } from "../strategies/SimpleQuackStrategy";

class CityDuck extends Duck {

    constructor() {
        super(new DoNotFlyStrategy(), new SimpleQuackStrategy());
    }

}