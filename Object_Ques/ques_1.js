let student={
    name:"Rahul",
    age:25,
    city:"bngalore",
    course:"JavaScript"
};
Object.seal(student);
Object.freeze(student);
console.log(Object.isFrozen(student))
console.log(Object.isSealed(student))
student.name="Roushan Akhtar";
student["age"]=24;
student["favourite color "]="Black" 
// length of the key & value
console.log(Object.keys(student).length); 
console.log(Object.values(student).length);
console.log(Object.entries(student))
console.log(Object.getPrototypeOf(student));
const person={
    name:"kirmada",
    id:"1011",
    city:"Kolapur",
    state:"Karnataka"
}
Object.preventExtensions(person);
console.log(Object.isExtensible(student));
