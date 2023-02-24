interface Person {
    fullName: string,
    age: number,
    address: Address
}

interface Address {
    country: string,
    numberHouse: number
}

export const LiteralObjects = () => {
    const person: Person = {
        fullName: 'Emmanuel',
        age: 28,
        address: {
            country: 'Venezuela',
            numberHouse: 480
        }
    }

    person.fullName = 'Emmanuel Tamburini';

    return (
      <>
          <h3>Literal Objects</h3>
          <code>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
          </code>
      </>
    )
}
