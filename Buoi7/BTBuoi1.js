// Bai 1: Kiem tra mail
function email(text){
    const testEmail = /^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/;
    
    return testEmail.test(text);
}

email_test = [null , "", 123456, "123456@", "@gmail.com", true, ["nam", "@", "gmail"], "quang.vidang1203@st.pka-uni.vn", "k10app@gmail.com", "example@gmail.com"]

var i = 0;
console.log("Bai 1: Check email format");
while(i < email_test.length){
    console.log("Lần " + i + ": ", email(email_test[i]), "\t", email_test[i], typeof(email_test[i]));
    ++i;
}

// Bai 2 : Kiem tra só dien thoai
function cpn(P_number){
    const testCPN = /^(\+84 | 0)?(\d){9}$/;
    return testCPN.test(P_number);
}

pNumber_test = [null , "", 123456, "0123456789", undefined, [1, 24, ,46,6, 3, 4], 0988222888, 0964321789]

var i = 0;
console.log("\nBai 2: Check phone number format");
while(i < pNumber_test.length){
    console.log("Lần " + i + ": ", cpn(pNumber_test[i]), "\t", pNumber_test[i], typeof(pNumber_test[i]));
    ++i;
}

// Bai 3: Kiem tra gioi tinh
function gender_test(sex){
    if (typeof(sex) === "string"){
        sex = sex.toUpperCase();
    }else {
        return false;
    }
    const genders = ["MALE", "FEMALE", "OTHER"];
    return genders.includes(sex);
}

genders_test = [null , "", 123, undefined, "male", "FEMALE", "other"]

var i = 0;
console.log("\nBai 3: Check gender format");
while(i < genders_test.length){
    console.log("Lần " + i + ": ", gender_test(genders_test[i]), "\t", genders_test[i], typeof(genders_test[i]));
    ++i;
}

// Bai 4: Kiem tra định dạng ngay sinh
function birthday_check(date){
    if(date === false){
        return false;
    }
}

birth_check = [null , "", 123, undefined, "male", "FEMALE", "other", "12-02-2022"]

var i = 0;
console.log("\nBai 4: Check birthday format");
while(i < birth_check.length){
    console.log("Lần " + i + ": ", birthday_check(birth_check[i]), "\t", birth_check[i], typeof(birth_check[i]));
    ++i;
}