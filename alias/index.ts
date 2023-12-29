interface Person {
    name: string
    address: {
        street: string
        postcode: string
    }
}

enum PetType {
    cat,
    fish,
    bug
}

interface Chlid {
    name: string
    pet: {
        type: PetType
        name: string
        furColor?: string
        numberOfLegs?: number
        hasWing?: boolean
        numberOfFish?: number
    }
}

interface List<T> {
    items: readonly T[]
    addItem: (item: T) => List<T>
    removeItem: (item: T) => List<T>
}

function self1<T>(value: T): T {
    return value;
}

const value = self1({ name: "Huan", age: 65 })

interface Person2 {
    name: string
    age: number
    address?: string
}

const people: Record<string, Person2> = {
    alice: { name: "Alice", age: 30 }
}

const fruit = {
    bananas: "Yellow",
    kiwi: "Green",
    watermelons: "Pink"
} as const

const vegetables = {
    carrots: "Orange",
    potatoes: "White",
    cherries: "Red"
} as const

const shoppingColors = {}

interface _Person {
    name: string
    age: number
    address: string
}

type PersonWithoutAddress = Omit<_Person, "address">

type PartialPerson = Partial<_Person>

type RequiredPerson = Required<_Person> 

type HttpMode = "GET" | "PUT" | "POST" | "DELETE"

type SupportedHttpMode = Exclude<HttpMode, "PUT" | "DELETE">

type StringStringDictionary = {
    [key: string]: string
}

const favoriteThings: StringStringDictionary = {}

const something = {
    firstName: "huan",
    lastName: "nguyen"
}

type OurType<T extends object> = {
    [Key in keyof T]: string
}
