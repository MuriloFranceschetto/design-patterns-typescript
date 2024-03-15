import { IObserver } from "./IObserver";

export interface IObservable {

    _observers: Array<IObserver>;

    add(observer: IObserver): void;
    remove(observer: IObserver): void;
    notify(): void;

}