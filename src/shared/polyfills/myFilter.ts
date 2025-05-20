
if(!Array.prototype.filter) {
    Array.prototype.myFilter = function <T>(
        callback: (value: T, index: number, array: T[]) => boolean,
        thisArg?: any
    ): T[] {
        const arr = Object(this) as T[];
        const len = arr.length >>> 0;
        const result = []
        for (let i = 0; i < len; i++) {
            if (i in arr) {
               if(callback.call(thisArg, arr[i], i, arr)){
                   result.push(arr[i]);
               }
            }
        }
        return result
    };
}