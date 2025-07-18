export const GRID_CONFIG = {
  MIN_SIZE: 12,
  MAX_SIZE: 64,
  DEFAULT_SIZE: 32,
  MIN_DENSITY: 0,
  MAX_DENSITY: 100,
  DEFAULT_DENSITY: 50,
} as const;

// Display Configuration
export const DISPLAY_CONFIG = {
  NOISE_GRID_SIZE: 320, // Size in pixels for the grid display
  CELL_BORDER_WIDTH: 8, // Border width around the grid
} as const;

// Cellular Automata Rules
export const AUTOMATA_RULES = {
  WALL_SURVIVAL_THRESHOLD: 4, // Wall cells survive with 4+ neighbors
  EMPTY_BIRTH_THRESHOLD: 5, // Empty cells become walls with 5+ neighbors
} as const;

// Colors
export const COLORS = {
  WALL: "rgb(71, 79, 86)",
  EMPTY: "rgb(179, 200, 220)",
  BORDER: "rgb(42, 47, 51)",
} as const;
