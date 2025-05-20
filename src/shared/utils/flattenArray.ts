function flattenArray<T>(arr: (T | T[])[]): T[] {
    // return arr.reduce<T[]>((acc, item) => {
    //     return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    // }, []); // через reduce
    const acc: T[] = []
    for (const item of arr) {
        if(Array.isArray(item)) {
            const res = flattenArray(item)
            acc.push(...res)
        } else {
            acc.push(item);
        }
    }
    return acc
}
console.log(flattenArray([1,2,3,[1],[1,[8]]]));