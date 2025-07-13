import type { IConfig } from "./types";

export function NoiseControl({ config }: { config: IConfig }) {
  const { size, density, setCells, generateNoise } = config;

  return (
    <div>
      <div>
        Size:
        <input
          type="number"
          value={size.current}
          onInput={(e) => {
            size.current = Math.max(
              12,
              Math.min(128, Number((e.target as HTMLInputElement).value))
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
    </div>
  );
}
