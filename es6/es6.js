const sayName = (name="Aunirbhan") => {
    return `Hello, my name is ${name}`
};
console.log(sayName("Kenneth"));

let cubedNumber = (number=3) => number **3;

let alvin = {
    name: 'Alvin',
    age: 34,
    hasGlasses: true,
    favAnimes: ["Mushoku Tensei"],
};
//using dot notion which can get complicated when there is a lot of nesting
//through es6 there is an easier way
const{name, age, hasGlasses,} = alvin;
console.log(name,age,hasGlasses);

let coordinates =[55,-47,44];
const[lat,long,alt] = coordinates;
console.log(lat,long,alt);

let medidataStudents = ["Tamer", "Aunirbhan","Rasul"];
let mlbStudents = ["Uday", "Alan","Owasimul"];
let allStudents = [...medidataStudents, ...mlbStudents];
console.log(allStudents);

let abdel = {
    name: "Abdel",
    age: 22,
    nationality: "Egyptian",
};

let abdel2={
    hasGlasses: true,
    role: "Lead Instructor",
};

let abdelUpdated={
    ...abdel,
    ...abdel2,
}

console.log(abdelUpdated)

let students = ["Allen", "Md","Tasmit","Christian","Michael"]
students.forEach((student, index) => {
    let message =  `${student} is at index ${index}`;
    console.log(message);
});

let numbers = [2,3,4,5]
let cubedNumbers = numbers.map((number)=> number ** 3);
console.log(cubedNumbers);

let staff = [
    {name: "Kenneth", age:17},
    {name: "Deyby", age:19},
    {name: "Abdelmonem", age:22},
    {name: "Kris", age:17},
];

let youngStaff = staff.filter((person)=> person.age<20);
console.log(youngStaff)

const getStudents = async () => {
    const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
    const api = "https://mlb-md-firebase-demo.vercel.app/api/students";
    
    const response = await fetch(proxy+api);
    const data = await response.json();
    
    console.log(data);
}

getStudents();