interface Toy {
  manufacturer: string
  height: number
  width: number
}

interface Food {
  height: number
  width: number
  expiry: any
}

interface Painting {
  height: number
  width: number
  style: string
}

interface Employee {
  name: string
  employeeNumber: number
  dateOfBirth: Date
  adress: {
    street: string
    postcode: string
  }
  isArchived: boolean
}

const amy: Employee = {
  name: "Amy",
  employeeNumber: 123,
  dateOfBirth: new Date(1997, 12, 12),
  adress: {
    street: "123 street",
    postcode: "1234"
  },
  isArchived: false
}

function greet(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

console.log(greet("Huan", "Nguyen"))

function draw(shape: {
  type: string,
  coords: [number, number]
}): void {
  console.log(`This is type ${shape.type} and this is tuple of number ${shape.coords}`);
}

const object: { type: string, coords: [number, number] } = {
  type: "testing",
  coords: [12, 17]
}

draw(object)