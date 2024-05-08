function squareRoot(x: number) {
    if (typeof x !== "number") return NaN;
    if (x < 0) return NaN;
    return Math.sqrt(x);
}