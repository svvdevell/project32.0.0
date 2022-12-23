type Result = {
    amount: number,
    array: string [],
}

const getDiff = (firstStr: string, secondStr: string): Result => {
    const comparison: string [] = [
        ...firstStr.split("").filter((item) => !secondStr.includes(item)),
        ...secondStr.split("").filter((item) => !firstStr.includes(item)),
    ];
    return {
        amount: comparison.length,
        array: comparison,
    }
}

console.log(getDiff('abc', 'abcd'));
console.log(getDiff('abcd', 'cdfe'));
console.log(getDiff('abc', 'wbbcc'));
console.log(getDiff('abc', 'abc'));