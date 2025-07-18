import type { Grid } from "../types";

/**
 * Generate initial noise grid for cellular automata
 * @param size - The size of the grid (size x size)
 * @param density - The density of filled cells (0 to 100)
 * @returns A 2D array representing the grid of cells
 */
export const generateNoise = (size: number, density: number): Grid => {
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => (Math.random() < density / 100 ? 1 : 0))
  );

  // Force a border around the grid
  for (let i = 0; i < size; i++) {
    grid[i][0] = 1; // Left border
    grid[i][size - 1] = 1; // Right border
    grid[0][i] = 1; // Top border
    grid[size - 1][i] = 1; // Bottom border
  }

  return grid;
};

/**
 * Count the number of wall cells around a given position
 * @param grid - The current grid state
 * @param x - X coordinate
 * @param y - Y coordinate
 * @returns Number of wall cells in the 3x3 neighborhood
 */
export const countWallsAround = (grid: Grid, x: number, y: number): number => {
  let count = 0;
  const height = grid.length;
  const width = grid[0].length;

  for (let offsetY = -1; offsetY <= 1; offsetY++) {
    for (let offsetX = -1; offsetX <= 1; offsetX++) {
      if (offsetX === 0 && offsetY === 0) continue;

      const nx = x + offsetX;
      const ny = y + offsetY;

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= width ||
        ny >= height ||
        grid[ny][nx] === 1
      ) {
        count++;
      }
    }
  }
  return count;
};

/**
 * Apply one iteration of cellular automata rules
 * @param grid - The current grid state
 * @returns A new grid with the automata rules applied
 */
export const applyCellularAutomataIteration = (grid: Grid): Grid => {
  const height = grid.length;
  const width = grid[0].length;
  const newGrid = grid.map((row: (0 | 1)[]) => [...row]);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const wallCount = countWallsAround(grid, x, y);

      if (grid[y][x] === 1) {
        // Wall cell: stay alive if 4+ neighbors
        newGrid[y][x] = wallCount >= 4 ? 1 : 0;
      } else {
        // Empty cell: become alive if 5+ neighbors
        newGrid[y][x] = wallCount >= 5 ? 1 : 0;
      }
    }
  }

  return newGrid;
};
