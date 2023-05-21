class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    static hello = () =>{
        console.log("HELLO!!!");
    };
    getName = function(){
        return this.name;
    };
}
  
class Math {
    getPI(){
        return 3.14;
    }
}

let toantu = new Math;
let person = new Person('QuangVi', 17, '17 YN PKA');
console.log(person.getName(), toantu.getPI());

let value = 1;
const sum = (value) => {
    return (value && value !== 0) ? 10 + value : 20;
};

console.log(sum(0))

let obj = {
    name: "name",
    age: 16,
}
for(const item of Object.values(obj)){
    console.log(item);
}

class userCLASS {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};
for(const item1 in userCLASS){
    console.log(item1);
}


var orders = [
    {
        name: 'Khóa học 1',
        price: 21
    },
    {
        name: 'Khóa học 2',
        price: 32
    },
    {
        name: 'Khóa học 4',
        price: 43
    }
]
console.log("Bai 3:", typeof(orders));
let total = 0;
for(let i in orders){
    console.log(i);
    total += i;
}
console.log(total);