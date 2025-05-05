export const debounce = (fn:any, delay:number) => {
    let timer
    return function(...args: any[]){
        clearTimeout(timer)
        return setTimeout(()=>fn(...args),delay);
    }
}