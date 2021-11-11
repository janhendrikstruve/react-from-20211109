import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import type { Thing } from '../../types';

export default function Dashboard(): JSX.Element {
  const [things, setThings] = useState<Thing[] | null>(null);

  useEffect(() => {
    async function fetchedthings() {
      const response = await fetch('https://json-server.neuefische.de/stuff');
      const fetchedThings = await response.json();
      setThings(fetchedThings);
    }
    fetchedthings();
  }, []);
  console.log(things);

  return (
    <main>
      <h1>moin</h1>
      {things &&
        things.map((thing) => (
          <Card
            key={thing.id}
            title={thing.name}
            description={thing.description}
            cardTags={thing.categories}
          ></Card>
        ))}
    </main>
  );
}
