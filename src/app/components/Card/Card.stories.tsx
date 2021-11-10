import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const standard = (): JSX.Element => (
  <Card
    title={'I am a freaking Card'}
    description={'Do not mess arount with me man'}
    cardTags={['#coolest', '#card', '#in', '#town']}
  ></Card>
);
