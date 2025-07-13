import { useState } from "preact/hooks";

export function App() {
  const [cells, _] = useState(generateNoise(32, 0.5));

  return (
    <div id="cell-container">
      {cells.map((row, rIndex) => (
        <div key={`row-${rIndex}`}>
          {row.map((cell, cIndex) => (
            <div
              key={`cell-${rIndex}-${cIndex}`}
              className={`cell ${cell && "filled"}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

/** Generate Noise
 * @param size - The size of the grid (size x size)
 * @param density - The density of filled cells (0 to 1)
 * @returns A 2D array representing the grid of cells
 */
const generateNoise = (size: number, density: number) => {
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => (Math.random() < density ? 1 : 0))
  );
  return grid;
};
