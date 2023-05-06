const user = {
    id: 1,
    age: 18,  
};

const json_user = JSON.stringify(user);
const object_user = JSON.parse(json_user);

console.log(json_user.id, object_user.id);

console.log(typeof(user), typeof(json_user), typeof(object_user));



// Đồng bộ và bất đồng bộ

const IDTimeOut = setTimeout(() => {      // Đặt thời gian sau 100 đơn vị thời gian thì chạy
    console.log('done setTimeout');
}, 0);

console.log('Dong nay di ra truoc!');

const IDInterval = setInterval(() => {
    console.log('SetInterval');
}, 100);

clearInterval(IDInterval);

// promise là gì? Nhận vào 1 callback gồm resolve và reject trả và về lỗi hoặc không

const promise = new Promise((resolve, reject)=>{
    const callback_SetTimeOut = setTimeout(()=> {
        resolve(callback_SetTimeOut);
    }, 5);
    }).then((value)=>{
        console.log('then - Promise: ', value);
    }).catch((error)=>{
        console.log('catch', error);
});

// Bai tap sau 5s reload trang thì thông báo 

Promise.resolve();
const promise_all = Promise.all([       // Kết quả trả về khi đơn vị cuối cùng chạy xong 
    setTimeout(()=> {
        console.log('done 1');
    }, 100),
    setTimeout(()=> {
        console.log('done 2');
    }, 150),
    setTimeout(()=> {
        console.log('done 3');
    }, 10),
]).then((value) => {
    console.log('Promise - all: ',value.join('\t'), typeof(value));
}).catch((e) => {
    console.log(e);
});