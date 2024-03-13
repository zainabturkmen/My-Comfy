
const people = [
    {
        name: "susi",
        age: 23,
        job: "desiger"
    },

    {
        name: "job",
        age: 34,
        job: "full stack developer"
    },

    {
        name:"Zainab",
        age: 21,
        job: "frontend developer"
    },
];

const jobs = people.map((person)=> {
    return person.age * 3

}).join("");

console.log(jobs);

const newPeople = people.map((items)=>{
    return `<h1>${items.name}</h1>`
});

document.body.innerHTML = newPeople.join("")
// console.log(newPeople);