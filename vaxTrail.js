const vaxTrail = (people) => {
    const A = [];
    const AEven = [];
    const AOdd = [];
    const B = [];
    const BEven = [];
    const BOdd = []
    const C = [];
    const CEven = [];
    const COdd = [];
    const D = [];
    const DEven = [];
    const DOdd = [];
    people.forEach((person) => {
        if (person.age >= 20 && person.age <= 30 && person.temperature < 100) {
            if (person.age % 2 === 0) {
                AEven.push(person);
            }
            else {
                AOdd.push(person);
            }
        } else if (person.age >= 31 && person.age <= 40 && person.temperature < 100) {
            if (person.age % 2 === 0) {
                BEven.push(person);
            }
            else {
                BOdd.push(person);
            }
        } else if (person.age >= 41 && person.age <= 50 && person.temperature < 100) {
            if (person.age % 2 === 0) {
                CEven.push(person);
            }
            else {
                COdd.push(person);
            }
        } else if (person.temperature >= 100) {
            if (person.age % 2 === 0) {
                DEven.push(person);
            }
            else {
                DOdd.push(person);
            }
        }
    });

    //Each array will be sort by even ages people
    AEven.sort((a, b) => a.age - b.age);
    AOdd.sort((a, b) => a.age - b.age);

    BEven.sort((a, b) => a.age - b.age);
    BOdd.sort((a, b) => a.age - b.age);

    CEven.sort((a, b) => a.age - b.age);
    COdd.sort((a, b) => a.age - b.age);

    DEven.sort((a, b) => a.age - b.age);
    DOdd.sort((a, b) => a.age - b.age);

    return {
        A: [...AEven, ...AOdd],
        B: [...BEven, ...BOdd],
        C: [...CEven, ...COdd],
        D: [...DEven, ...DOdd]
    };
};

// demo array of objects for testing purpose
const persons = [
    { name: 'Nahid', age: 23, temperature: 98 },
    { name: 'Sabbir', age: 21, temperature: 98 },
    { name: 'Maidul', age: 22, temperature: 98 },
    { name: 'Isra', age: 36, temperature: 99 },
    { name: 'Siam', age: 37, temperature: 99 },
    { name: 'Jahid', age: 39, temperature: 99 },
    { name: 'Sohel', age: 38, temperature: 99 },
    { name: 'Toukir', age: 42, temperature: 98 },
    { name: 'Nasim', age: 41, temperature: 98 },
    { name: 'Jony', age: 43, temperature: 98 },
    { name: 'Rony', age: 44, temperature: 98 },
    { name: 'Rahat', age: 54, temperature: 100 },
    { name: 'Sobuj', age: 53, temperature: 101 },
    { name: 'Tanmoy', age: 51, temperature: 101 },
    { name: 'Partho', age: 52, temperature: 101 },
]

// Testing : 
console.log(vaxTrail(persons));
