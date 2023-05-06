function togglePassword() {
    var passwordInput = document.getElementsByName("password")[0];
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const imageUpload = document.getElementById('image-upload');
const imageUploadLabel = document.querySelector('label[for="image-upload"]');

imageUploadLabel.addEventListener('click', () => {
    imageUpload.click();
});


fetch('https://lively-space-91500.postman.co/workspace/bd896b1f-de96-4a8c-8dd3-906af0bb364c')
    .then(signin => signin.json())
    .then(signin => console.log('Check account; ', typeof(signin)))
    .catch(error => console.error(error));


function savedataRegister() {
    let email = document.getElementsByTagName('input')[0].value;
    console.log('Xin chào', email);

    window.location.href='./SignIn.html';
}

function savedataSignIn() {
    let email = document.getElementsByTagName('input')[0].value;
    console.log('Xin chào', email);

    if (typeof(email) === 'string'){
        window.location.href='../Buoi5/b5.html';   
    }else {
        window.location.href='./SignIn.html';
    }
}