// https://ru.wikipedia.org/wiki/Решето_Эратосфена

export function primeNumbers(num) {
    const result = Array.from({length: num + 1}).fill(0).map((_, i) => i)

    let devider = 2;
    while (devider ** 2 < num) {
        for (let index = devider * 2; index < result.length; index += devider) {
            result[index] = -1;
        }
        devider ++;
    }

    const final = result.filter((element, index) => index >= 2 && element > 0);
    return final
}
