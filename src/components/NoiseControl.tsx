import { useCallback } from "preact/hooks";
import styled from "styled-components";
import type { IConfig } from "../types";
import { applyCellularAutomataIteration } from "../utils/cellularAutomata";
import { GRID_CONFIG } from "../utils/constants";

export function NoiseControl({ config }: { config: IConfig }) {
  const { size, density, setCells, generateNoise } = config;

  const handleIteration = useCallback(() => {
    const newGrid = applyCellularAutomataIteration(config.cells);
    setCells(newGrid);
  }, [config.cells, setCells]);

  return (
    <ControlContainer>
      <div>
        Size:
        <input
          type="number"
          value={size.current}
          onInput={(e) => {
            size.current = Math.max(
              GRID_CONFIG.MIN_SIZE,
              Math.min(
                GRID_CONFIG.MAX_SIZE,
                Number((e.target as HTMLInputElement).value)
              )
            );
            setCells(generateNoise(size.current, density.current));
          }}
        />
      </div>

      <div>
        Density:
        <input
          type="number"
          value={density.current}
          onInput={(e) => {
            density.current = Math.max(
              GRID_CONFIG.MIN_DENSITY,
              Math.min(
                GRID_CONFIG.MAX_DENSITY,
                Number((e.target as HTMLInputElement).value)
              )
            );
            setCells(generateNoise(size.current, density.current));
          }}
        />
      </div>

      <button onClick={handleIteration}>Apply Iteration</button>
    </ControlContainer>
  );
}

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 32px;
`;
