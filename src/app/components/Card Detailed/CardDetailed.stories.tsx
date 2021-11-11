import React from 'react';
import Card from './CardDetailed';

export default {
  title: 'Component/Card',
  component: Card,
};

export const standard = (): JSX.Element => (
  <Card
    title={'I am a freaking Card'}
    description={'Do not mess around with me man'}
    cardTags={['#coolest', '#card', '#in', '#town']}
  ></Card>
);

export const lessTags = (): JSX.Element => (
  <Card
    title={'I am a freaking Card'}
    description={'Do not mess around with me man'}
    cardTags={['#coolest']}
  ></Card>
);

export const moreTags = (): JSX.Element => (
  <Card
    title={'I am a freaking Card'}
    description={'Do not mess around with me man'}
    cardTags={['#coolest', '#card', '#in', '#town', '#you', '#little', 'kek']}
  ></Card>
);

export const noTags = (): JSX.Element => (
  <Card
    title={'I am a freaking Card'}
    description={'Do not mess around with me man'}
    cardTags={[]}
  ></Card>
);
