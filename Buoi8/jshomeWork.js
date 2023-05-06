
let arr = [ 12, 135, 84, 14, 12, 42, 5, 12, 123, 1, 42, 1233, 135, 64, 235, 84, -24 ];

// 1. Viết một chương trình JavaScript để tìm phần tử lớn thứ hai trong một mảng các số nguyên.
function max_in_ARR_2(arr) {
    let maxinARR = arr[ 0 ];
    let maxinARR2;
    for (let i of arr) {
        if (maxinARR < i) {
            maxinARR2 = maxinARR;
            maxinARR = i;
        }
        if (maxinARR > i && i > maxinARR2) {
            maxinARR2 = i;
        }
    }
    return maxinARR2;
}

console.log("Bài1 :\nNguoi ve thu 2: ", max_in_ARR_2(arr))

// 2. Viết một chương trình JavaScript để tìm phần tử xuất hiện nhiều nhất trong một mảng các số nguyên.
function phantu_co_tanSuat_nhieuNhat_in_ARR(arr) {
    const count = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[ i ];
        count[ element ] = (count[ element ] || 0) + 1;
    }

    // Duyệt lại đối tượng để tìm phần tử có số lần xuất hiện nhiều nhất
    let maxCount = 0;
    let mostFrequentElement;
    for (const [ element, elementCount ] of Object.entries(count)) {
        if (elementCount > maxCount) {
            maxCount = elementCount;
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

console.log("Bài 2:\nNgười chiếm spotlight: ", phantu_co_tanSuat_nhieuNhat_in_ARR(arr))

// 3. Hãy viết một hàm JavaScript để xây dựng một đối tượng "Person" đơn giản, bao gồm các thuộc tính như sau:

// - firstName: chuỗi, đại diện cho tên của người đó
// - lastName: chuỗi, đại diện cho họ của người đó
// - age: số nguyên, đại diện cho tuổi của người đó
// - gender: chuỗi, đại diện cho giới tính của người đó
// - interests: mảng, chứa danh sách các sở thích của người đó (ví dụ: ["đọc sách", "xem phim", "đi du lịch"])

// Sau đó, viết một hàm để hiển thị thông tin của đối tượng "Person" đó.

// sử dụng Object.prototype

// Bên cạnh đó, bạn hãy thêm vào đối tượng "Person" một phương thức "greeting", cho phép đối tượng "Person" có thể chào hỏi một người khác bằng cách truyền vào tên của người đó.

// Cuối cùng, viết thêm một hàm để kiểm tra xem một đối tượng có phải là một đối tượng "Person" hay không.

function validateInput(inputType, inputValue) {
    switch (inputType) {
        case 'username':
        // Kiểm tra độ dài tên đăng nhập phải từ 4 đến 16 ký tự
        // Khong co ky tu dac biet
            return /^[a-zA-Z0-9]{4,16}$/.test(inputValue);
        case 'password':
        // Kiểm tra độ dài mật khẩu phải từ 6 đến 20 ký tự
        // phai co it nhat 1 so
            return /^[a-zA-Z0-9]{6,20}$/.test(inputValue);
    }
}

// testcase
console.log('Bài 3:\n'+validateInput('username', 'john_doe')); // true
console.log(validateInput('username', 'john.doe')); // Tên đăng nhập không được chứa ký tự đặc biệt
console.log(validateInput('username', 'john')); // Tên đăng nhập phải từ 4 đến 16 ký tự
console.log(validateInput('password', 'Abc123')); // true
console.log(validateInput('password', 'abc123')); // Mật khẩu phải chứa ít nhất một ký tự viết hoa, một ký tự thường và một số
console.log(validateInput('password', 'password')); // Mật khẩu phải
