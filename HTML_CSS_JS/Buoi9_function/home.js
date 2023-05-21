const arr = [1,2,2,5,6,4,65,36,2,32,54,5,32,12,2]

console.log("\nPhần 1: Cách thức hoạt động của forEach");
function log(value, index){
    console.log("value", value, "index", index);
}
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < arr.length; i++){
        // callback(this[i], i);

    }
};
arr.forEach2(log);

console.log("\nPhần 1.1:");
let listUser = [];
// Callback là một function nhận vào đối số
arr.forEach((value, index, array)=>{
    // console.log("value", value);
    listUser = "<div>" + index + "</div>";
});
console.log(typeof(listUser), listUser);


// Phan 22222222222222
console.log("\nPhần 2: Cách thứ hoạt động của map()");
const newArr = arr.map((value, index)=>{
    return value*2;
});

Array.prototype.map1 = function(Callback){
    const newArr = [];
    for (let i = 0; i < this.length; i++){
        newArr[i] = Callback(this[i]);
    }
    return newArr;
}

const newArr2 = arr.map1((value, index, array)=>{
    return value*2;
});

console.log(newArr2);

/// Phan 333333333333
console.log("\nPhần 3: ");
const array = [
    {
    userID: 1,
    age: 18,
    },
    {
    userID: 2,
    age: 17,
    },
    {
    userID: 3,
    age: 19,
    },
    {
    userID: 4,
    age: 18,
    },
];

const newarray18 = array.filter((value, index)=>{
    return value.age === 18;
});

console.log('filter: ', newarray18);

const bool = array.every((value, index)=>{
    return value.age === 18 && value.age > 16;
});

console.log('every: ', bool);

const bool1 = array.some((value, index)=>{
    return value.age === 18 && value.age > 16;
});

console.log('some: ', bool1);

const find1 = array.find((value, index)=>{
    return value.age === 18 && value.age > 16;
});     //Ứng dụng vào sort giá trị đã tồn tại

console.log('some: ', find1);

const find_Index = array.findIndex((value, index)=>{
    return value.age === 19 && value.age > 16;
});     //Ứng dụng vào sort giá trị đã tồn tại

console.log('findIndex: ', find_Index);

const sortArr = array.sort((nguoiTrc, nguoiSau)=>{
    // if(){
    // }
    return -1;
});     //Ứng dụng vào sort giá trị đã tồn tại

console.log('sort: ', sortArr);

const reduceArr = arr.reduce((pre, curr)=>{
    console.log(pre, curr);
    pre.push(curr);
    return pre;
}, []);     //Ứng dụng vào sort giá trị đã tồn tại

console.log('reduce: ', reduceArr);