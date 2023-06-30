//Ẩn hiện password
function togglePassword() {
    var password = document.getElementsByName("password")[ 0 ];
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
} function togglePassword1() {
    var password = document.getElementsByName("password")[ 1 ];
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Notification
function displayError(message) {
    // Hiển thị thông báo lỗi trong một cửa sổ nhỏ
    alert(message);
}

const emailElemet = document.getElementById("email");
const usernameElement = document.getElementById("username");
// const sexElement = document.querySelector("input[name=='option']:checked");
const passwordElement = document.getElementById("password");
const passConfiElement = document.getElementById("passwordConfirm");
const dOBElement = document.getElementById("dOB");
const submitElement = document.getElementById("submit");

console.log(emailElemet.value);
console.log(usernameElement.value);
// console.log(sexElement.value);
console.log(passwordElement.value);
console.log(passConfiElement.value);
console.log(passwordElement.value);
console.log(dOBElement.value);

const imf_List = [
    {
        div: ".divEmail",
        errorID: "#errorEmail",
        error: /^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/,
        errorText: "Không thể xác định email của bạn!"
    },
    {
        div: ".divusername",
        errorID: "#errorUsername",
        error_number: /^.{6,}$/,
        error_numberText: "Tối thiểu 6 ký tự !"
    },
    {
        div: ".divpassword",
        errorID: "#errorPassword",
        error_number: /^.{6,}$/,
        error_numberText: "Tối thiểu 6 ký tự !",
        error: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        errorText: "Tối thiểu 1 chữ IN hoa, 1 ký tự in thường !",
        error_1: /^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/,
        errorText_1: "Mật khẩu cần phải có 1 chữ số và 1 ký tự đặc biệt [!@#$%^&*]!"
    },
    {
        div: ".divConfirm",
        errorID: "#errorConfirmpassword",
        error: passConfiElement.value === passwordElement.value,
        errorText: "Mật khẩu nhập lại không khớp!"
    },
    {
        errorID: "#errorPlanet",
        errorText: "Vui lòng điền mục này!"
    },
    {
        div: ".divdOB",
        errorID: "#errordOB",
        error: new Date(dOBElement.value).getFullYear() < 1900,
        errorText: "Bạn đã sống trên 123 tuổi?\nNhập lại năm sinh!\nRe-enter birthday"
    }
];

// Data final input
const accerp_list = {
    email: null,
    username: null,
    password: null,
    sex: null,
    dOB: null
};

// validate function
function listenerElement(imflist) {
    const { name, value } = event.target;
    const divEvent = document.querySelector(imflist.div);
    const pError = divEvent.querySelector(imflist.errorID);

    let value_ = value.trim();

    if (!value_) {
        pError.innerText = "Vui lòng nhập thông tin này";
    } else if (imflist.error_number != undefined && !imflist.error_number.test(value_)) {
        pError.innerText = imflist.error_numberText;
    } else if (imflist.error != undefined && !imflist.error.test(value_)) {
        pError.innerText = imflist.errorText;
    } else if (imflist.error_1 != undefined && !imflist.error_1.test(value_)) {
        pError.innerText = imflist.errorText_1;
    } else {
        const final = value_;
        pError.innerText = "";
        console.log("accept!");
        return final;
    }
}

const email_list = imf_List[ 0 ];
const user_list = imf_List[ 1 ];
const pass_list = imf_List[ 2 ];
const passConfirm_list = imf_List[ 3 ];
const sex_list = imf_List[ 4 ];
const dOB_list = imf_List[ 5 ];

const check_list = {};

emailElemet.addEventListener("keyup", (event) => {
    accerp_list.email = (listenerElement(email_list));
});

usernameElement.addEventListener("keyup", (event) => {
    accerp_list.username = (listenerElement(user_list));
});

passwordElement.addEventListener("keyup", (event) => {
    accerp_list.password = (listenerElement(pass_list));
});

passConfiElement.addEventListener("keyup", (event) => {
    check_list.passwordConfirm = (listenerElement(passConfirm_list));
});

// if (!sexElement.value) {
//     const pError = document.getElementById(sex_list.errorID);
//     pError.innerText = sex_list.errorText;
// } else {
//     accerp_list.sex = sexElement.value;
// }

dOBElement.addEventListener("keyup", (event) => {
    const dOB_int = new Date(listenerElement(dOB_list, accerp_list[ 4 ])).getTime;
    accerp_list.dOB = dOB_int;
});



api_login = "http://3.95.239.60:9001/api/auth/sign-in";

console.log(accerp_list);
console.log(check_list);

// Hàm POST API có dùng lại
async function postLoginData(api_url, data) {
    try {
        const reponse = await fetch(api_url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

        const resuft = await reponse.json();
        if (reponse.ok) {
            displayError("Thành công!");
        } else {
            displayError(resuft.message)
        }
    } catch (error) {
        console.log("Error: ", error);
    }
};

// Check null các phần tử
if (Object.values(accerp_list).includes()) {
}
submitElement.addEventListener("click", () => {


    console.log(emailElemet.value);
    console.log(usernameElement.value);
    // console.log(sexElement.value);
    console.log(passwordElement.value);
    console.log(passConfiElement.value);
    console.log(passwordElement.value);
    console.log(dOBElement.value);


    if (Object.values(accerp_list).some(value => !value) && Object.values(check_list).some(value => !value)) {
        displayError("Vui lòng nhập đầy đủ thông tin");
    } else {
        // postLoginData(api_login, accerp_list);
    }
});