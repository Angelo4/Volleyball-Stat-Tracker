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

export enum VBAction {
  Attack = 'attack',
  Block = 'block',
  Serve = 'serve',
  Set = 'set',
  Reception = 'reception',
  Dig = 'dig',
}
