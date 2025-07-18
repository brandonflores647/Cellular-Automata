import { useRef, useState } from "preact/hooks";
import styled from "styled-components";
import { DescriptionBox } from "./components/DescriptionBox";
import { NoiseControl } from "./components/NoiseControl";
import { NoiseGrid } from "./components/NoiseGrid";
import type { IConfig } from "./types";
import { generateNoise } from "./utils/cellularAutomata";
import { GRID_CONFIG } from "./utils/constants";

export function App() {
  const gridSize = useRef(GRID_CONFIG.DEFAULT_SIZE);
  const gridDensity = useRef(GRID_CONFIG.DEFAULT_DENSITY);
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
