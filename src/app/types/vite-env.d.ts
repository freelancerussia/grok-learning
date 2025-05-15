/// <reference types="vite/client" />
export {}

declare global {
    interface Array<T> {
        myMap<U>(
            callback: (value: T, index: number, array: T[]) => U,
            thisArg?: any
        ): U[];
    }
}