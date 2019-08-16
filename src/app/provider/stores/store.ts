import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
    private _state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
    }

    getState$(): Observable<T> {
        return this._state$.asObservable();
    }

    getState(): T {
        return this._state$.getValue();
    }

    setState(nextState: T): void {
        this._state$.next(nextState);
    }
}
