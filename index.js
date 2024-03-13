
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
});

console.log(jobs);

const newPeople = people.map((items)=>{
    return {
        firstName: items.name.toUpperCase(),
        oldAge: items.age * 2,
        duty: items.job.toUpperCase(),
    };
});

console.log(newPeople);