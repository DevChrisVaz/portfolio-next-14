import { BehaviorSubject, Observer, Subject, distinctUntilChanged, shareReplay, takeUntil } from "rxjs";

export abstract class StateNotifier<State> {
    private state: BehaviorSubject<State>;
    private destroy$: Subject<void> = new Subject<void>();

    constructor(state: State) {
        this.state = new BehaviorSubject<State>(state);
    }

    get getState() {
        return this.state.asObservable();
    }

    set setState(value: State) {
        this.state.next(value);
    }

    subscribe(observerOrNext: Partial<Observer<State>> | ((state: State) => void) | undefined) {
        this.state.pipe(distinctUntilChanged(), shareReplay(1), takeUntil(this.destroy$)).subscribe(observerOrNext);
    }

    unsubscribe() {
        this.destroy$.next();
        this.destroy$.complete(); 
    }
}