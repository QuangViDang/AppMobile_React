// Bai 5: Đảo ngược chuỗi
reverseString = [null , "", 123, undefined, "male", "FEMALE", "other", "12-02-2022"]

var i = 0;
console.log("\nBai 5: Reverse String", reverseString.length);
while(i < reverseString.length){
    if ((!reverseString === false) && (typeof(reverseString[i]) === "string")){
        console.log("Lần " + i + ": ", reverseString[i].split("").reverse().join(""), "\t", reverseString[i], "\t", typeof(reverseString[i]));
    }else {
        console.log("Lần " + i + ": false", "\t", reverseString[i], "\t", typeof(reverseString[i]));
    }
    ++i;
}
console.log("\n");




// Bai 6: Loai bỏ khaong trang ơ dau va cuoi
function delWS(text){
    let i = 0;
    let a = 0;
    while(i < text.length){
        if(text[i] === " "){
            a++;
        }
        else{
            break;
        }
        ++i;
    }
    let ii = text.length - 1;
    let aa = 0;
    while(i > 0){
        if(text[ii] === " "){
            aa++;
        }
        else{
            break;
        }
        --ii;
    }
    return text.slice(a, text.length-aa)
}
var test_delSW = [" 123456789  ", "   Vid ", "Tran Huu Nam   ", null , "", 123, undefined, "male"];
var i = 0;
console.log("\nBai 6: Delete Space White Có cách khác dùng hàm trim");
while(i < test_delSW.length){
    if ((!test_delSW === false) && (typeof(test_delSW[i]) === "string")){
        console.log("Lần " + i + ": ", delWS(test_delSW[i]), "\t", test_delSW[i], "\t", typeof(test_delSW[i]));
    }else {
        console.log("Lần " + i + ": false", "\t", test_delSW[i], "\t", typeof(test_delSW[i]));
    }
    ++i;
}




// Bai 7: Đếm số lượng ký tự chữ hoa trong chuỗi
countUpper = ["Viad", null , "", 123, undefined, "Nguyen Van An", "Tran Huu Nam"];
let text_Upper = countUpper[i];
function checkUpper(text_Upper){
    const text = /^[A-Z]$/;
    return text.test(text_Upper);
}

function countUpp(text_Upper){
        let ii = 0;
        let count = 0;
        // console.log(text_Upper.split(""));
        let text = text_Upper.split("");
        // console.log(text_Upper.split("").length);
        // console.log(text.length);
        while(ii < text.length){
            if(checkUpper(text[ii])){
                count++;
            }
            ++ii;
        }
    return count;
}

var i = 0;
console.log("\nBai 7: Check Upper");
while(i < countUpper.length){
    if ((!countUpper === false) && (typeof(countUpper[i]) === "string")){
        console.log("Lần " + i + ": ", countUpp(countUpper[i]), "\t", countUpper[i], "\t", typeof(countUpper[i]));
    }else {
        console.log("Lần " + i + ": false", "\t", countUpper[i], "\t", typeof(countUpper[i]));
    }
    ++i;
}




// Bai 8: kiem tra chuoi doi xứng

let list_test = [null , "", 123, undefined, "a", "assa", "assfsdv", "qeatgtaeq"];

function symmetry(textA){
    let text = textA.split("");
    if(text.length === 1){
        return false;
    }else{
        let j = text.length-1;
        for(let i = 0; i < text.length; i++){
            if(text[i] === text[j-i]){
                continue;
            }else{
                return false;
            }
        }
        return true;
    }
}

var i = 0;
console.log("\nBai 8: Check symmetric string");
while(i < list_test.length){
    if(typeof(list_test[i]) === "string" && !list_test[i] === false){
        console.log("Lần " + i + ": ", symmetry(list_test[i]), "\t", list_test[i], typeof(list_test[i]));
    }else{
        console.log("Lần " + i + ": ", "false", "\t", list_test[i], typeof(list_test[i]));
    }
    ++i;
}



// Bai 9; Ham tim tat ca chuoi con cua cac chuo da cho
let mini_test = [null , "", 123, undefined, "abc", "QL", "THN", "VDA"];

function child(text){
    let a = [];
    for(let i = 0; i < text.length; i++){
        for(let j = i+1; j <= text.length; j++){
            a.push(text.substring(i, j));
        }
    }
    return a;
}

var i = 0;
console.log("\nBài 9: Print all child-string");
while(i < mini_test.length){
    if(typeof(mini_test[i]) === "string" && !mini_test[i] === false){
        console.log("Lần " + i + ": ", child(mini_test[i]), "\t", mini_test[i], typeof(mini_test[i]));
    }else{
        console.log("Lần " + i + ": ", "false", "\t", mini_test[i], typeof(mini_test[i]));
    }
    ++i;
}