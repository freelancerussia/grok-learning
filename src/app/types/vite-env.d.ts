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

declare global {
    interface Array<T> {
        myFilter<T>(
            callback: (value: T, index: number, array: T[]) => boolean,
            thisArg?: any
        ): T[];
    }
}