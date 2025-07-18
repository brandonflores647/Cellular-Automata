import styled from "styled-components";
import type { IConfig } from "../types";
import { COLORS, DISPLAY_CONFIG } from "../utils/constants";

export function NoiseGrid({ config }: { config: IConfig }) {
  const { cells, size } = config;

  return (
    <NoiseContainer
      style={{
        width: DISPLAY_CONFIG.NOISE_GRID_SIZE,
        height: DISPLAY_CONFIG.NOISE_GRID_SIZE,
      }}
    >
      {cells.map((row, rIndex) => (
        <div key={`row-${rIndex}`}>
          {row.map((cell, cIndex) => (
            <Cell
              key={`cell-${rIndex}-${cIndex}`}
              filled={!!cell}
              size={DISPLAY_CONFIG.NOISE_GRID_SIZE / size.current}
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
  background-color: ${({ filled }) => (filled ? COLORS.WALL : COLORS.EMPTY)};
`;

const NoiseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  outline: ${DISPLAY_CONFIG.CELL_BORDER_WIDTH}px solid ${COLORS.BORDER};
  box-shadow: 0 0 24px rgba(0, 0, 0, 1);
  background-color: ${COLORS.BORDER};
`;
