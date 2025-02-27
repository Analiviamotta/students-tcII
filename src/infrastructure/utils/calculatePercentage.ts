export function calculatePercentage(count: number, total: number): number {
    if (!total) return 0

    return ((count / total) * 100)
}