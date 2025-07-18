import styled from "styled-components";

export function DescriptionBox() {
  return (
    <DescriptionContainer>
      <TitleContainer>
        <Title>Cellular Automata Cave/Dungeon Generation</Title>
        <SourceCodeText
          href="https://github.com/brandonflores647/Cellular-Automata"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </SourceCodeText>
      </TitleContainer>
      <DescriptionText>
        Cellular automata cave generation is a popular method in procedural
        content generation for making natural-looking caves in grid-based
        environments. It starts with a random noise map, where each cell is
        marked as either solid or empty based on a density value. Higher
        densities create more walls, while lower ones leave more open space.
        Since the initial map just looks like static noise, we run a smoothing
        algorithm over the grid using cellular automata rules to gradually
        create something more structured.
      </DescriptionText>
      <DescriptionText>
        Each time we run the algorithm, it looks at a cell and checks how many
        of its neighboring cells are solid. Usually, that's the 8 surrounding
        cells in a 2D grid. If enough neighbors are solid, the cell might become
        solid too, or stay solid if it already was. After a few rounds of this,
        the map starts to form cave-like patterns by filling in small gaps and
        cleaning up noisy areas. The number of iterations and the exact rules
        you use let you tweak how open or tight the caves feel.
      </DescriptionText>
      <DescriptionText>
        Enjoy the demo and want to see how it works? Check out the source code
        to explore the full implementation and see how the noise map turns into
        cave-like structures with cellular automata.
      </DescriptionText>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled.div`
  width: 80%;
  padding: 24px;
  margin: 0 auto 48px auto;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  background: white;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0 0 16px 0;

  color: black;
  font-size: 1.5rem;
  font-weight: 600;
`;

const DescriptionText = styled.p`
  margin: 0 0 12px 0;
  color: black;
  line-height: 1.6;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
const SourceCodeText = styled.a`
  margin: 0 0 12px 0;
  color: rgb(67, 150, 223);
  line-height: 1.6;
  font-size: 1.25rem;

  cursor: pointer;
  text-decoration: none;
`;
