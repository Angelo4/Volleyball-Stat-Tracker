import { VbActionResult } from '../models/VBActionResult';

export const vbActionTotal = (stats: VbActionResult): number => {
  const point = stats.point || 0;
  return stats.error + stats.success + point;
};

export const vbActionEfficiency = (
  stats: VbActionResult,
  isDefense: boolean = false,
): string => {
  let point = stats.point || 0;
  const total: number = vbActionTotal(stats);
  const overall = isDefense
    ? point + stats.success - stats.error
    : point - stats.error;
  const efficiency: number = total === 0 ? 0 : (overall / total) * 100; // Rounds to 2dp

  return efficiency.toFixed(1);
};
