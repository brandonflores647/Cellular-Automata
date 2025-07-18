import { useRef, useState } from "preact/hooks";
import styled from "styled-components";
import { DescriptionBox } from "./DescriptionBox";
import { NoiseControl } from "./NoiseControl";
import { NoiseGrid } from "./NoiseGrid";
import type { IConfig } from "./types";

export function App() {
  const gridSize = useRef(32);
  const gridDensity = useRef(50);
  const [cells, setCells] = useState(
    generateNoise(gridSize.current, gridDensity.current)
  );

  const config: IConfig = {
    size: gridSize,
    density: gridDensity,
    cells,
    setCells,
    generateNoise,
  };

  return (
    <AppContainer>
      <DescriptionBox />
      <div id="control-container">
        <NoiseControl config={config} />
        <NoiseGrid config={config} />
      </div>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  padding-top: 24px;
`;

/** Generate Noise
 * @param size - The size of the grid (size x size)
 * @param density - The density of filled cells (0 to 1)
 * @returns A 2D array representing the grid of cells
 */
const generateNoise = (size: number, density: number) => {
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => (Math.random() < density / 100 ? 1 : 0))
  );

  // force a border
  for (let i = 0; i < size; i++) {
    grid[i][0] = 1;
    grid[i][size - 1] = 1;
    grid[0][i] = 1;
    grid[size - 1][i] = 1;
  }
  return grid;
};
