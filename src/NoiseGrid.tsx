export function NoiseGrid({ cells }: { cells: number[][] }) {
  return (
    <div id="noise-container">
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
