# Cellular Automata Cave Generation

A simple and effective technique for generating natural-looking cave systems in grid-based environments using cellular automata.

---

## Overview

Cellular automata cave generation starts with a random noise map, where each cell is randomly set as **solid** or **empty** based on a density value. Higher density values create more walls, while lower densities leave more open space. The initial noise looks chaotic, so the map is smoothed iteratively using cellular automata rules to form more natural cave shapes.

Each iteration examines every cell and counts how many of its neighbors (typically the 8 surrounding cells) are solid. If a cell has enough solid neighbors, it becomes or remains solid. Running multiple iterations gradually removes isolated cells and smooths the structure, resulting in organic cave-like patterns. You can adjust the number of iterations and rules to control how open or tight the caves feel.

---

## Fun Fact

Popular games like **Stardew Valley** use similar cellular automata methods to generate their cave systems, creating interesting underground areas for players to explore.

---

## Explore the Code

Enjoy the demo and want to see how it works?  
Check out the source code to explore the full implementation and see how the noise map transforms into cave-like structures using cellular automata.

---
