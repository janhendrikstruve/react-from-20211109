import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetailed from '../../components/CardDetailed/CardDetailed';
import type { Thing } from '../../types';

export default function Stuff(): JSX.Element {
  const { chosenThing } = useParams();
  console.log(chosenThing);
  const [thing, setThings] = useState<Thing | null>(null);

  useEffect(() => {
    async function fetchedthings() {
      const response = await fetch(
        `https://json-server.neuefische.de/stuff/${chosenThing}`
      );
      if (!response.ok) return;
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchedthings();
  }, []);

  if (thing) {
    console.log('card found');
    return (
      <CardDetailed
        key={thing.name}
        title={thing.name}
        description={thing.description}
        cardTags={thing.categories}
      ></CardDetailed>
    );
  } else {
    console.log('no card found');
    return <></>;
  }
}
