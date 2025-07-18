import type { MutableRefObject } from "preact/compat";
import type { Dispatch, StateUpdater } from "preact/hooks";

/**
 * 0 = empty cell
 * 1 = wall cell
 */
export type CellState = 0 | 1;

export type Grid = CellState[][];

export interface IConfig {
  size: MutableRefObject<number>;
  density: MutableRefObject<number>;
  cells: Grid;
  setCells: Dispatch<StateUpdater<Grid>>;
  generateNoise: (size: number, density: number) => Grid;
}

export interface Position {
  x: number;
  y: number;
}

export interface GridDimensions {
  width: number;
  height: number;
}
