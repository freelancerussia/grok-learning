
export function  throttle<T extends (...args:any[])=>void>(fn: T, delay:number) {
    let lastCall = 0;
    return function (...args:Parameters<T>) {
        const now = Date.now();
        if(now - lastCall >=delay) {
            fn(...args);
            lastCall = now;
        }
    }
}