export interface VbActionResult {
  success: number;
  error: number;
}

export interface VbActionOffenseResult extends VbActionResult {
  point: number;
}
