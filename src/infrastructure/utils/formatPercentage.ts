export function formatPercentage(value: number, decimalCases?: number) {
    return value.toFixed(decimalCases).concat(' %')
}