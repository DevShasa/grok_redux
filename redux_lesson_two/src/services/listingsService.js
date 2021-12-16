const mockData = [
    {name: "Barry Johnson", age: 43}, 
    {name: "Chris Evans", age: 43},
    {name: "Shasa Thuo", age: 43}, 
    {name: "Mark Eender", age: 43}, 
]

function getAll(){
    return mockData
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {getAll,};