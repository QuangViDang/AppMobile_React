// # Nodejs là đơn luồng, tuy nhiên nodejs sử dụng mô hình non-blocking nên có thể xử lý các yêu cầu đồng thời tối ưu hoá hiệu xuất

const person = {
  firstName: 'Anh',
  lastName: 'Nam',
  fullName: function() {
    return console.log('This is What', this.firstName + ' ' + this.lastName);
  }
};

person.fullName(); // Hiển thị "Anh Nam"

const person2 = {
  firstName: 'Vi',
  lastName: 'Quang'
};

person.fullName.call(person2); // Hiển thị " Vi Quang"

const boundFn = person.fullName.bind(person2);
boundFn(); // Hiển thị "Vi Quang"

// Apply
const numbers = [5, 6, 7, 8, 4];
const max = Math.max.apply(null, numbers);

const person3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName: "HLKL",
  lastName: "N"
}
// This will return "Mary Doe":
console.log('Apply: ', person3.fullName.apply(person1), '\n')

// Shallow copy
const obj = { id: 1, name: { first: 'Vi', last:'Quang'} };
const shallowCopy = Object.assign({}, obj);
shallowCopy.name.last = ':3';

// Thay đổi cả bên trong obj
console.log('shallowCopy', obj);
console.log(shallowCopy, '\n');

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.name.first = 'Nguyen';

// Không chỉ thay đổi DeepCopy
console.log('DeepCopy', obj); 
console.log(deepCopy);
