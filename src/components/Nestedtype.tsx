
type Address ={

    street:string
    city:string
    country:string
}

type Person ={
    name:string
    age:number
    isStudent:boolean
    address:Address
    postalCode?:number //? is to adding this the postal code is optional
}



// Example 1: A Student
const student: Person = {
    name: "Peter Parker",
    age: 19,
    isStudent: true,
    address: {
        street: "20 Ingram Street",
        city: "New York",
        country: "USA"
    }
}

// Example 2: A Professional
const professional: Person = {
    name: "Tony Stark",
    age: 40,
    isStudent: false,
    address: {
        street: "10880 Malibu Point",
        city: "Malibu",
        country: "USA"
    },
    postalCode: 90265
}

// Example 3: An International Student
const internationalStudent: Person = {
    name: "Yuki Tanaka",
    age: 22,
    isStudent: true,
    address: {
        street: "Sakura Avenue",
        city: "Tokyo",
        country: "Japan"
    },
    postalCode: 150001
}

// Example 4: A Retired Person
const retiree: Person = {
    name: "Martha Wayne",
    age: 65,
    isStudent: false,
    address: {
        street: "Wayne Manor",
        city: "Gotham",
        country: "USA"
    }
}

// Example 5: A Young Professional
const youngPro: Person = {
    name: "Diana Prince",
    age: 28,
    isStudent: false,
    address: {
        street: "Paradise Island",
        city: "Themyscira",
        country: "Greece"
    },
    postalCode: 54321
}

// Example 6: A Part-time Student
const partTimeStudent: Person = {
    name: "Bruce Banner",
    age: 35,
    isStudent: true,
    address: {
        street: "Science Boulevard",
        city: "Los Angeles",
        country: "USA"
    },
    postalCode: 90001
}

// Example 7: A Remote Worker
const remoteWorker: Person = {
    name: "Natasha Romanoff",
    age: 31,
    isStudent: false,
    address: {
        street: "Secret Street",
        city: "Budapest",
        country: "Hungary"
    },
    postalCode: 1007
}

// Example 8: A PhD Student
const phdStudent: Person = {
    name: "Reed Richards",
    age: 27,
    isStudent: true,
    address: {
        street: "42 Baxter Building",
        city: "Manhattan",
        country: "USA"
    },
    postalCode: 10007
}

// Example 9: A Digital Nomad
const digitalNomad: Person = {
    name: "Stephen Strange",
    age: 38,
    isStudent: false,
    address: {
        street: "177A Bleecker Street",
        city: "New York",
        country: "USA"
    },
    postalCode: 10012
}

// Example 10: A Recent Graduate
const recentGrad: Person = {
    name: "Miles Morales",
    age: 23,
    isStudent: false,
    address: {
        street: "Brooklyn Heights",
        city: "Brooklyn",
        country: "USA"
    },
    postalCode: 11201
}


