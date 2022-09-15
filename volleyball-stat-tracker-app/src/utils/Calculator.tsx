import { VbActionResult } from '../models/VBActionResult';
import { VolleyBallStats } from '../redux/StatsKeeper';

export const vbActionTotal = (stats: VbActionResult): number => {
  const point = stats.point || 0;
  return stats.error + stats.success + point;
};

export const vbActionEfficiency = (
  stats: VbActionResult,
  isDefense: boolean = false
): string => {
  let point = stats.point || 0;
  const total: number = vbActionTotal(stats);
  const overall = isDefense
    ? point + stats.success - stats.error
    : point - stats.error;
  const efficiency: number = total === 0 ? 0 : (overall / total) * 100; // Rounds to 2dp

  return efficiency.toFixed(1);
};

export const vbStatsOffenseTotal = (stats: VolleyBallStats) => {
  const totalPoints =
    (stats.attack.point || 0) +
    (stats.block.point || 0) +
    (stats.serve.point || 0) +
    (stats.set.point || 0);

  const totalError =
    stats.attack.error +
    stats.block.error +
    stats.serve.error +
    stats.set.error;

  const totalSuccess =
    stats.attack.success +
    stats.block.success +
    stats.serve.success +
    stats.set.success;

  const overallTotal = totalPoints + totalError + totalSuccess;

  const overallEfficiency =
    ((totalPoints + totalSuccess - totalError) / overallTotal) * 100 || 0;

  return {
    point: totalPoints,
    error: totalError,
    success: totalSuccess,
    total: overallTotal,
    efficiency: overallEfficiency.toFixed(1),
  };
};

export const vbStatsDefenseTotal = (stats: VolleyBallStats) => {
  const totalError = stats.reception.error + stats.dig.error;

  const totalSuccess = stats.reception.success + stats.dig.success;

  const overallTotal = totalError + totalSuccess;

  const overallEfficiency =
    ((totalSuccess - totalError) / overallTotal) * 100 || 0;

  return {
    error: totalError,
    success: totalSuccess,
    total: overallTotal,
    efficiency: overallEfficiency.toFixed(1),
  };
};
