import React, { useState } from "react";

interface People {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<People["people"]>([]);

  people.map((person) => {
    person.name;
  });

  return (
    <>
      <h1>People invited to my Party</h1>
    </>
  );
}

export default App;
