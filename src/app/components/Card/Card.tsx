import React from 'react';
import Tag from '../Tag/Tag';
import styled from 'styled-components';

type cardProps = {
  title: string;
  description: string;
  cardTags: string[];
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
      <div>
        {cardTags.map((tag) => (
          <Tag children={tag} />
        ))}
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border: 2px solid steelblue;
  padding: 0.5em;
  border-radius: 8px;
`;
