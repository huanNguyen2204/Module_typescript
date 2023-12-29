type IntendedResult = [1, 2, 3];

type Compute<T> = {
    [Key in keyof T]: T[Key]
}

type EmployedPerson = Compute<Employee & Person>;

interface _Person_ {
    id: number
    name: string
    dateOfBirth: Date
    address: {
        street: string
        postcode: string
        movedInOn: Date
    }
}

const jenny = {
    id: 1,
    name: "Jenny",
    dateOfBirth: new Date(1990, 1, 1),
    address: {
        street: "123 Some Street",
        postcode: "1234",
        movedInOn: new Date(2020, 1, 1)
    }
} satisfies _Person_