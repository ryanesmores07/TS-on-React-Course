import React, { useState } from "react";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface People {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<People["people"]>([
    {
      name: "Lebron James",
      url: "https://people.com/thmb/1PKepdl0yHQDEnVT0NcnmnTBuNQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/lebron-james-b73c66eb3444477c8896a44a3e39b671.jpg",
      age: 36,
      note: "Allergic to staying on the same team",
    },
  ]);

  people.map((person) => {
    person.name;
  });

  return (
    <>
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </>
  );
}

export default App;
