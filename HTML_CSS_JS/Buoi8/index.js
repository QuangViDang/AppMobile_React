const idkey_object = "ID";

let user = {
    firstname: "Vi ",
    lastname: "Dang Quang",
    age: 19,
    address: "Pka",
    birth:{
        date: 12,
        mo: 6,
        years: 2003,
    },
    getName: function(){
        return this.lastname;
    },
    [idkey_object]: "IDID",
};
user.ID = 21010583;

function userF (firstname, lastname, age, address, id){
    this.age = age;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.id = id;
    this.getName = function(){
        return this.id;
    };
    this.getfullname= function(){
        return this.firstname+this.lastname
    }
};
const userF1 = new userF("Vi Dang Quang", 17, "Pka", 21010583);

class userCLASS {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
};

const userClass1 =  new userCLASS("Vi Dang Quang", 19);
console.log("\t",user, user.getName(), "\n\t", userF1, userF1.getName(), "\n\t", userClass1);

userF.prototype.greet = function(){

}

let student = new userF("Vi ", "Đăng Quang");
console.log("Hoc sinh Quang: \t",student.getfullname());

let birth = new Date('2100-12-22');
let day1 = new Date;
let day2 = new Date;
console.log(birth, "\n"+day1, "\n"+day2, day2.toISOString);

function DateString(day, month, year){
    this.day = day || 1;
    this.month = month || 2;
    this.year = year || 3;
    this.getDay = function(){
        return this.day;
    }
    this.setDay = function (newday){
        this.day = newday;
    }
};
let date1 = new DateString(12, 06, 2003);
date1.setDay(12);
console.log("Day: " + date1.getDay()+ "của ngày " + date1 + " " + date1.getTime());