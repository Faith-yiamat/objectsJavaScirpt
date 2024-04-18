const people =[
    {name:"Alice", age:17},
    {name:"Eunice",age:22},
    {name:"Charlie",age:14},
    {name:"Max",age:19}
];
function namesOfPeople(){
return people.filter((item) => item.age >=18).map(item => item.name)
}
console.log(namesOfPeople())

// question2
const products = [
  { name: 'Laptop', price: 1200, category: 'Electronics' },
  { name: 'Shirt', price: 25, category: 'Clothing' },
  { name: 'Headphones', price: 80, category: 'Electronics' },
  { name: 'Shoes', price: 60, category: 'Clothing' },
];
function group(products){
let product = Object.groupBy(products,item  => item.category)
return product
 
}
console.log(group(products))

// question3
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
function averageStudents(students){
  return students.filter(student=> {
    const averageScore = student.scores.reduce((acc, curr) => acc + curr,) / 
    student.scores.length;
    return averageScore >= 85;
  }).map(student => student.name);

}

const average = averageStudents(students)
console.log(average)


// question4
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    
    const favCar = (`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    console.log(favCar)
  },
};
function addMethod(car){
  car["age"] = ( 2024 - car.year )
  console.log(car)
}
addMethod(car)