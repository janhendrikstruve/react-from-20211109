import React from 'react';
import { useParams } from 'react-router-dom';

export default function Stuff(): JSX.Element {
  const { stuff } = useParams();

  return <p>Stuff: {stuff}</p>;
}
