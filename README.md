# Cellular Automata Cave/Dungeon Generation

A React/Preact application that demonstrates cellular automata algorithms for procedural cave and dungeon generation. This project showcases how simple rules can create complex, organic-looking cave systems.

## Features

- **Procedural Generation**: Generate random cave layouts using cellular automata
- **Interactive Controls**: Adjust grid size and initial density
- **Iterative Evolution**: Apply cellular automata rules to evolve the cave structure
- **Real-time Visualization**: See changes immediately in the grid display
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
src/
├── components/           # React components
│   ├── DescriptionBox.tsx    # Project description and metadata
│   ├── NoiseControl.tsx      # Control panel for parameters
│   └── NoiseGrid.tsx         # Grid visualization component
├── utils/               # Utility functions and constants
│   ├── cellularAutomata.ts   # Core cellular automata logic
│   └── constants.ts          # Application constants and configuration
├── types.ts             # TypeScript type definitions
├── app.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles
```

## Core Algorithms

### Cellular Automata Rules

The application implements a simple cellular automata system where:

- **Wall cells** survive if they have 4 or more neighboring walls
- **Empty cells** become walls if they have 5 or more neighboring walls
- **Borders** are always treated as walls

### Generation Process

1. **Initial Noise**: Generate random grid with specified density
2. **Border Creation**: Force walls around the perimeter
3. **Iteration**: Apply cellular automata rules to smooth and connect areas
4. **Visualization**: Display the result in an interactive grid

## Usage

1. **Adjust Size**: Set the grid dimensions (12-64 cells)
2. **Set Density**: Control initial wall density (0-100%)
3. **Generate**: Create a new random cave layout
4. **Iterate**: Apply cellular automata rules to evolve the structure

## Technical Details

- **Framework**: Preact (React-compatible)
- **Styling**: Styled Components
- **Language**: TypeScript
- **Build Tool**: Vite

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

This project is organized with clean separation of concerns:

- **Components**: UI logic and presentation
- **Utils**: Business logic and algorithms
- **Types**: TypeScript definitions
- **Constants**: Configuration values

When adding new features, follow the existing patterns and maintain the organized structure.
