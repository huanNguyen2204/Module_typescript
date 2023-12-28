interface Person {}

function* createEnumerable(count: number): Generator<number, void, undefined> {
  for (let i = 0; i < count; i++) {
    yield i;
  }
}

for (const value of createEnumerable(5)) {
  console.log(value);
}

async function* loadPeople(count: number): AsyncGenerator<Person, void, unknown> {
  const people: Person[] = await(
    await fetch('/my-api/people?count=' + count)
  ).json();

  for (const person in people) {
    yield person;
  }
}

// for await (const person of loadPeople(5)) {
  
// }

