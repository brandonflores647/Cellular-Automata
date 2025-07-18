import { cloneDeep } from "lodash";
import { useCallback } from "preact/hooks";
import styled from "styled-components";
import type { IConfig } from "./types";

export function NoiseControl({ config }: { config: IConfig }) {
  const { size, density, setCells, generateNoise } = config;

  const handleIteration = useCallback(() => {
    const original = config.cells;
    const height = original.length;
    const width = original[0].length;

    const newGrid = cloneDeep(original);

    const countWallsAround = (x: number, y: number) => {
      let count = 0;
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
            original[ny][nx] === 1
          ) {
            count++;
          }
        }
      }
      return count;
    };

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const wallCount = countWallsAround(x, y);
        if (original[y][x] === 1) {
          newGrid[y][x] = wallCount >= 4 ? 1 : 0;
        } else {
          newGrid[y][x] = wallCount >= 5 ? 1 : 0;
        }
      }
    }

    setCells(newGrid);
  }, [config]);

  return (
    <ControlContainer>
      <div>
        Size:
        <input
          type="number"
          value={size.current}
          onInput={(e) => {
            size.current = Math.max(
              12,
              Math.min(64, Number((e.target as HTMLInputElement).value))
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
              0,
              Math.min(100, Number((e.target as HTMLInputElement).value))
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
