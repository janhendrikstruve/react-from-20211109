import React from 'react';
import Tag from '../Tag/Tag';
import styled from 'styled-components';
import type { ReactNode } from 'react';

type cardProps = {
  title: string;
  description: string;
  cardTags?: ReactNode[];
};

export default function Card({
  title,
  description,
  cardTags,
}: cardProps): JSX.Element {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <p>{description}</p>
      <StyledList>
        {cardTags?.map((tag) => (
          <Tag children={tag} />
        ))}
      </StyledList>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  display: grid;
  border: 4px solid steelblue;
  padding: 0.5em;
  border-radius: 8px;
  background-color: lightblue;
  justify-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  flex-wrap: wrap;
`;
