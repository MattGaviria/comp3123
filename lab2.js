// excersise 1

let gretter = (myArray, counter) => {
  let greetText = 'Hello';

  for (let name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// excersise 2 

const capitalize = (str) => {
  let [first, ...rest] = str;
  return first.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalize('fooBar')); // Foobar
console.log(capitalize('nodeJs')); // Nodejs

// excersise 3

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));
    

console.log(capitalizedColors); 


// excersise 4

var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

// excersise 5

var array = [1, 2, 3, 4];

const calculateSum = array.reduce((accumulator, current) => accumulator + current, 0);
const calculateProduct = array.reduce((accumulator, current) => accumulator * current, 1);

console.log(calculateSum);
console.log(calculateProduct);

// excersise 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;

    }

    details() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of ${this.balance}`;
    
    }
}

// Demo:
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());        

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());         



