interface Employee {
    employeeNumber: number
    firstName: string
    lastName: string
    postcode: number
}

interface Person {
    name: string
    postcode: string
}

type EmployeeRecord = Person & Employee;

type Postcode = EmployeeRecord["postcode"];