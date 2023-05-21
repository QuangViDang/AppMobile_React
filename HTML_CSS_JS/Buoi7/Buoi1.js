console.log("log")

let o;
var a = 1111;
var b = 11.21;
var string = 'Vi ';
const str = `Đăng Quang ${b}`

c = a;
var d = false;
var e = true;
var strNULL;

// Object
var oject = {
    name: 'Vi Dang Quang',
};
var array = [1, 5, 9, 13]
console.log("IndexOf ", oject, oject.name.indexOf("a"));
console.log("Replace ", oject.name.replace("a", "e"), oject.name);
console.log("toU ", oject.name.toUpperCase(), oject.name);
console.log("Slice ", oject.name.slice(2), oject.name);
console.log("Split ", oject.name.split(""), oject.name);

// Function
function sum(a, b){
    return a+b;
}
console.log('SUM = ' + sum)

console.log(typeof(a), str, c, d, e)
console.log(string + str + 18 + ' tuoi','\n', array, typeof(array))

class preson {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let p = new preson("Quang Vi", 12);

console.log(typeof(p),p instanceof preson, "\n", p, '\n', typeof(o));

let x = 1;
let y = '1';
let bool = x === y;
console.log(typeof(x), typeof(y), !bool, !"");

function input (text){
    // Nếu có text thì console
    if((typeof(text)==='string') && (!text === false) && (text.length >= 6 && text.length <= 30)){
        console.log(text);
        return "Đúng";
    }else{
        console.log(text);
        return "Sai";
    }
    
};
var text = ['1234567', null, undefined, "", 123, 
"12345678901234567890231456789012"];

var i = 0;
while(i < text.length){
    console.log(input("Lần " + i, text[i]), typeof(text[i]), i);
    ++i;
}
