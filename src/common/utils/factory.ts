interface Creator<T> {
    new (): T;
}

export function factory<T>(arg: Creator<T>): T {
    return new arg();
}