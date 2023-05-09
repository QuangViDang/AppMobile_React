function togglePassword() {
    var password = document.getElementsByName("password")[ 0 ];
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function toggleCPassword() {
    var password = document.getElementsByName("password")[ 1 ];
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

const imageUpload = document.getElementById('image-upload');
const imageUploadLabel = document.querySelector('label[for="image-upload"]');

// imageUploadLabel.addEventListener('click', () => {
//     imageUpload.click();
// });


function displayError(message) {
    // Hiển thị thông báo lỗi trong một cửa sổ nhỏ
    alert(message);
}

function emailchecked(text) {
    const testEmail = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/;

    return testEmail.test(text);
}
function checkPassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    return regex.test(password);
}

function savedataRegister() {
    let email = document.getElementsByTagName('input')[ 0 ];

    let username = document.getElementsByTagName('input')[ 1 ];

    let planet = document.querySelector('input[name="option"]:checked');

    let password = document.getElementsByTagName('input')[ 4 ];

    let confirmpassword = document.getElementsByTagName('input')[ 5 ];

    let dOB = document.getElementsByTagName('input')[ 6 ];
    let dateINP = new Date(dOB).getTime();

    let avt = document.getElementsByTagName('input')[ 7 ];


    // Check entry values
    console.log('Email: ', email.value, email.type);
    console.log('Username: ', username.value, username.type);
    console.log('Sex: ', planet.value, typeof (planet.value));
    console.log('Password: ', password.value, password.type);
    console.log('Confirm Password: ', confirmpassword.value, confirmpassword.type);
    console.log('Birthday: ', dOB.value, dOB.type);
    console.log('IMG_name: ', avt.value, avt.type);


    // Check entry conditions
    if (!username.value || !email.value || !planet.value || !password.value || !confirmpassword.value || !dOB.value) {
        displayError("Không giá trị nào được để trống!\nNo value can be left blank!")
    } else {

        // Check email format
        // if (!emailchecked(toString(email.value))) {
        if (!emailchecked(email.value)) {
            console.log(!emailchecked((email.value)), "Error email!");
            displayError("Your email is not the correct format!")
        }

        // check username 
        if (!/^[a-zA-Z0-9._]+$/.test(username.value)) {
            // if(!/^[a-zA-Z0-9._]$/.test(username.value)){
            displayError("username không có đấu và không chứa các ký tự đặc biệt");
        }
        // check password 
        // Nếu password nhập lại không giống với password ban đầu thì hiển thị mà hình thông báo nhập sai và yêu cầu nhập lại
        if (!checkPassword(password.value)) {
            displayError('Mật khẩu cần có ít nhất 6 ký tự! Trong đó phải có 1 chữ số, 1 chữ IN hoa, 1 ký tự in thường và 1 ký tự đặc biệt [!@#$%^&*]!');
        }
        if (password.value != confirmpassword.value) {
            displayError("Confirm the Password is not the same as the previous password \n Please, re-enter your confirm password!")
        }

        // check năm sinh 
        // date.year > 1900;
        console.log(new Date(dOB.value).getFullYear());
        if (new Date(dOB.value).getFullYear() < 1900) {
            displayError("Bạn đã sống trên 123 tuổi?\nNhập lại năm sinh!\nRe-enter birthday")
        }


        // POST API
        async function postJSONSignUP() {
            try {
                const reponse = await fetch("http://3.95.239.60:9001/api/auth/sign-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username.value,
                        email: email.value,
                        password: password.value,
                        sex: planet.value,
                        dOB: dateINP,
                    }),
                });

                console.log('Email: ', email.value, typeof (email.value));
                console.log('Username: ', username.value, typeof (username.value));
                console.log('Sex: ', planet.value, typeof (planet.value));
                console.log('Password: ', password.value, typeof (password.value));
                console.log('Birthday: ', dateINP, typeof (dateINP));
                const result = await reponse.json();
                console.log("Success: ", result);
                if (reponse.ok) {
                    displayError("Đăng ký thành công");
                    // Chuyển hướng khi đăng ký hoàn tất
                    window.location.href = './SignIn.html';
                } else {
                    displayError(result.message);
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        postJSONSignUP();
    }
}

function savedataSignIn() {
    let username = document.getElementsByTagName('input')[ 0 ];

    let password = document.getElementsByTagName('input')[ 1 ];

    console.log("username: ", username.value);
    console.log("password: ", password.value);



    // POST API
    async function postJSONSignIN() {
        try {
            const reponse = await fetch("http://3.95.239.60:9001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value,
                }),
            });

            console.log('Username: ', username.value, typeof (username.value));
            console.log('Password: ', password.value, typeof (password.value));
            const result = await reponse.json();
            console.log("Success: ", result);
            if (reponse.ok) {
                displayError("Đăng nhập thành công");
                // Chuyển hướng khi đăng ký hoàn tất
                window.location.href = './SignIn.html';
            }else {
            displayError("Thông tin đăng nhập không tồn tại", result.message);
            }
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    postJSONSignIN()
}

