if (!Array.prototype.map) {
    Array.prototype.myMap = function <T, U>(
        callback: (value: T, index: number, array: T[]) => U,
        thisArg?: any
    ): U[] {
        const arr = Object(this) as T[];
        const len = arr.length >>> 0;
        const result = new Array(len);

        for (let i = 0; i < len; i++) {
            if (i in arr) {
                result[i] = callback.call(thisArg, arr[i], i, arr);
            }
        }

        return result;
    };
};