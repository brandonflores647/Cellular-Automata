import styled from "styled-components";
import type { IConfig } from "./types";

const NOISE_GRID_SIZE = 320;

export function NoiseGrid({ config }: { config: IConfig }) {
  const { cells, size } = config;

  return (
    <NoiseContainer style={{ width: NOISE_GRID_SIZE, height: NOISE_GRID_SIZE }}>
      {cells.map((row, rIndex) => (
        <div key={`row-${rIndex}`}>
          {row.map((cell, cIndex) => (
            <Cell
              key={`cell-${rIndex}-${cIndex}`}
              filled={!!cell}
              size={NOISE_GRID_SIZE / size.current}
            />
          ))}
        </div>
      ))}
    </NoiseContainer>
  );
}

const Cell = styled.div<{ filled: boolean; size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  background-color: ${({ filled }) =>
    filled ? "rgb(71, 79, 86)" : "rgb(179, 200, 220)"};
`;

const NoiseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  outline: 8px solid rgb(42, 47, 51);
  box-shadow: 0 0 24px rgba(0, 0, 0, 1);
  background-color: rgb(42, 47, 51);
`;
