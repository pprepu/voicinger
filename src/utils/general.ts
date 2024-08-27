export const calcPercentage = (value: number, total: number) =>
  total > 0 ? Math.floor((value / total) * 100) : 0
