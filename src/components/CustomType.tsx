import React from 'react'

const CustomType = () => {


    type Person = {
        name: string
        age: number
        isStudent: boolean

    }

    const person1: Person = {

        name: "rafik",
        age: 23,
        isStudent: true
    }

    //like that we cann addedd more data 
    return (
        <div>

            <p>Name: {person1.name}</p>
            <p>Age: {person1.age}</p>
            <p>Is Student: {person1.isStudent ? 'Yes' : 'No'}</p>



        </div>
    )
}

export default CustomType