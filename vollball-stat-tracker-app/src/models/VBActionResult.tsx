export interface VbActionResult {
  point?: number;
  success: number;
  error: number;
}

export enum VbActionResultType {
  Point = 'point',
  Success = 'success',
  Error = 'error',
}
