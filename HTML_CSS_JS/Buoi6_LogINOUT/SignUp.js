//Ẩn hiện password & confirmPassword
function togglePassword() {
    var password = document.getElementsByName('password')[0]
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}
function togglePassword1() {
    var password = document.getElementsByName('password')[1]
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}

// Notification
function displayError(message) {
    // Hiển thị thông báo lỗi trong một cửa sổ nhỏ
    alert(message)
}

// Get input by ID
const emailElemet = document.getElementById('email')
const usernameElement = document.getElementById('username')
const passwordElement = document.getElementById('password')
const passConfiElement = document.getElementById('passwordConfirm')
const dOBElement = document.getElementById('dOB')
const form = document.querySelector('form')
const sexElement = form.querySelectorAll('input[name = "option"]')

// Đặt giới hạn cho dOb
const today = new Date().toISOString().split('T')[0] // Lầy ngày hôm nay bằng cách tách giờ/phút/giây của new Date
dOBElement.setAttribute('max', today)

// Data final input
const accerp_list = {
    email: null,
    username: null,
    password: null,
    sex: null,
    dOB: null,
}

//
const error_list = [
    {
        div: '.divEmail',
        errorID: '#errorEmail',
        error: /^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/,
        errorText: 'Không thể xác định email của bạn!',
    },
    {
        div: '.divusername',
        errorID: '#errorUsername',
        error_number: /^.{6,}$/,
        error_numberText: 'Tối thiểu 6 ký tự !',
    },
    {
        div: '.divpassword',
        errorID: '#errorPassword',
        error_number: /^.{6,}$/,
        error_numberText: 'Tối thiểu 6 ký tự !',
        error: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        errorText: 'Tối thiểu 1 chữ IN hoa, 1 ký tự in thường !',
        error_1: /^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/,
        errorText_1:
            'Mật khẩu cần phải có 1 chữ số và 1 ký tự đặc biệt [!@#$%^&*]!',
    },
    {
        div: '.divConfirm',
        errorID: '#errorConfirmpassword',
        error_same: passConfiElement.value === passwordElement.value,
        error_same_Text: 'Mật khẩu nhập lại không khớp!',
    },
]

const email_list = error_list[0]
const user_list = error_list[1]
const pass_list = error_list[2]
const passConfirm_list = error_list[3]

// validate function
function listenerElement(imflist) {
    const { name, value } = event.target
    const divEvent = document.querySelector(imflist.div)
    const pError = divEvent.querySelector(imflist.errorID)

    let value_ = value.trim()

    if (!value_) {
        pError.innerText = 'Vui lòng nhập thông tin này'
    } else if (imflist.error != undefined && !imflist.error.test(value_)) {
        pError.innerText = imflist.errorText
    } else if (
        imflist.error_number != undefined &&
        !imflist.error_number.test(value_)
    ) {
        pError.innerText = imflist.error_numberText
    } else if (imflist.error_1 != undefined && !imflist.error_1.test(value_)) {
        pError.innerText = imflist.errorText_1
    } else if (imflist.error_same != undefined && imflist.error_same) {
        if (value_ === passwordElement.value) {
            pError.innerText = ''
        } else {
            pError.innerText = imflist.error_same_Text
        }
        console.log(
            passConfiElement.value === passwordElement.value,
            passwordElement.value
        )
    } else {
        const final = value_
        pError.innerText = ''
        console.log('accept!')
        return final
    }
}

emailElemet.addEventListener('keyup', (event) => {
    accerp_list.email = listenerElement(email_list)
})

usernameElement.addEventListener('keyup', (event) => {
    accerp_list.username = listenerElement(user_list)
})

passwordElement.addEventListener('keyup', (event) => {
    accerp_list.password = listenerElement(pass_list)
})
passConfiElement.addEventListener('keyup', (event) => {
    listenerElement(passConfirm_list)
})

api_login = 'http://3.95.239.60:9001/api/auth/sign-in'

// Hàm POST API có dùng lại
async function postLoginData(api_url, data) {
    try {
        const reponse = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const resuft = await reponse.json()
        if (reponse.ok) {
            displayError('Thành công!')
        } else {
            displayError(resuft.message)
        }
    } catch (error) {
        console.log('Error: ', error)
    }
}
console.log(form)
form.addEventListener('keydown', function (event) {
    console.log(sexElement.length)
    if (event.key === 'Enter') {
        event.preventDefault()
    }
})

form.addEventListener('submit', function (event) {
    event.preventDefault()
    for (let i = 0; i < sexElement.length; i++) {
        console.log(sexElement[i].value, 'null')
        if (sexElement[i].checked) {
            accerp_list.sex = sexElement[i].value
        }
    }
    console.log(dOB, dOBElement)
    accerp_list.dOB = new Date(dOBElement.value).getTime()

    // Check null các phần tử
    if (Object.values(accerp_list).some((value) => !value)) {
        console.log(accerp_list)
        displayError('Vui lòng nhập đầy đủ thông tin')
    } else {
        console.log(accerp_list)
        displayError('Thành công!')
        // postLoginData(api_login, accerp_list);
    }
})
