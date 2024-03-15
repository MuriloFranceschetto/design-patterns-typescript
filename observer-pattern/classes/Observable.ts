import { IObservable } from "../interfaces/IObservable";
import { IObserver } from "../interfaces/IObserver";

export class Observable implements IObservable {

    _observers: IObserver[] = [];

    add(observer: IObserver): void {
        this._observers.push(observer);
    }

    remove(observer: IObserver): void {
        this._observers = this._observers.filter(obs => obs === observer);
    }

    notify(): void {
        this._observers.forEach(observer => observer.update());
    }

}