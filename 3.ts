type Flatten<A extends any[], T extends number[] = []>
    = A extends [infer R, ...infer U]
    ? R extends any[]
        ? [...Flatten<R, T>, ...Flatten<U, T>]
        : [...T, R, ...Flatten<U, T>]
    : []

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]