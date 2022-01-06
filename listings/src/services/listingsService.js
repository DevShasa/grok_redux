const mockData = [
    {name: "Barry Johnson", age: 43 },
    {name: "Wolan Shata", age: 30 },
    {name: "James Thuo", age: 57 },
    {name: "Joseph Kimamo", age: 48 },
];

const getAll = () =>{
    return mockData
}
const addListing = (name, age)=>{
    // idealy this is where data is passed to the database
    const listing = { name, age, };
    return listing; 
};

export default {
    getAll,
    addListing,
}