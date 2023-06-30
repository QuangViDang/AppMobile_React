//Ẩn hiện password
function togglePassword() {
    var password = document.getElementsByName("password")[ 0 ];
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

const usernameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const submitElement = document.getElementById("submit");

console.log(usernameElement);
console.log(passwordElement);

const imf_List = [
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
    }
];

const accerp_list = {
    username: null,
    password: null
};
const user_list = imf_List[ 0 ];
usernameElement.addEventListener("keyup", (event) => {

    accerp_list.username = (listenerElement(user_list, accerp_list[ 0 ]));
});

const pass_list = imf_List[ 1 ];
passwordElement.addEventListener("keyup", (event) => {

    accerp_list.password = (listenerElement(pass_list, accerp_list[ 1 ]));
})

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

api_login = "http://3.95.239.60:9001/api/auth/login";
console.log(usernameElement.value);
console.log(passwordElement.value);
console.log(accerp_list);

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
    if (Object.values(accerp_list).some(value => value === null || value === undefined)) {
        displayError("Vui lòng nhập đầy đủ thông tin");
    } else {
        console.log(usernameElement.value);
        console.log(passwordElement.value);
        console.log(accerp_list);
        postLoginData(api_login, accerp_list);
    }
});