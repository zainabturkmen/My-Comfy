
const people = [
    {
        name: "susi",
        age: 23,
        job: "desiger"
    },

    {
        name: "susi",
        age: 30,
        job: "UI/ UX"
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

    {
        name:"Zainab",
        age: 24,
        job: "backend developer"
    },
];

const jobs = people.map((person)=> {
    return person.age * 3

}).join("");

console.log(jobs);

const newPeople = people.map((items)=>{
    return `<p>${items.name}</p>`
});

