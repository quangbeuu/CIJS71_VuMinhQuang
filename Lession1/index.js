// Bài 1: 
//   Use the map() method to iterate over the array and join the values of  firstName and lastName:
// input: 
// const users = [ {firstName : "Susan", lastName: "Steward"},
// {firstName : "Daniel", lastName: "Longbottom"},
// {firstName : "Jacob", lastName: "Black"}
// ];
// output: ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

const users = [ 
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}]


function fullName(arr){
    return arr.map(item => `${item.firstName} ${item.lastName}`);    
}

console.log(fullName(users))

console.log("------------------------------------------------")

// Bài 2: 

// Apply  filter() method to return all creatures with a 
// habitat that is equal to Ocean:
// input: 
// const creatures = [ {name: "Shark", habitat: "Ocean"},
// {name: "Whale", habitat: "Ocean"},
// {name: "Lion", habitat: "Savanna"},
// {name: "Monkey", habitat: "Jungle"}
// ];
// output: [ {name: "Shark", habitat: "Ocean"}, {name: "Whale", habitat: "Ocean"} ]

const creatures = [ 
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
];

function oceanHabitan(arr){
    return arr.filter(item => item.habitat == "Ocean");
}

console.log(oceanHabitan(creatures));

console.log("------------------------------------------------")

// Câu 3: 

// Apply  filter() method o return all numbers that are greater than 7:

// input:  [1, 3, 6, 8, 11]
// output: [8, 11]

const arr = [1,3,6,8,11];

function moreThan(arr){
    return arr.filter(item => item >= 7);
}

console.log(moreThan(arr))