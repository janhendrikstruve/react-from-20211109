import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';

type cardProps = {
  title: string;
  description: string;
  cardTags?: string[];
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
      <Button>more details</Button>
      {cardTags?.map((tag) => (
        <Tag children={tag}></Tag>
      ))}
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
