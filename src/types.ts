import type { MutableRefObject } from "preact/compat";
import type { Dispatch, StateUpdater } from "preact/hooks";

export interface IConfig {
  size: MutableRefObject<number>;
  density: MutableRefObject<number>;
  cells: (1 | 0)[][];
  setCells: Dispatch<StateUpdater<(1 | 0)[][]>>;
  generateNoise: (size: number, density: number) => (1 | 0)[][];
}
