
// const ob = {
//     div: ".divusername",
//     errorID: "1",
//     error_number: /^.{6,}$/,
//     error_numberText: "Tối thiểu 6 ký tự !"
// };

// if (Object.values(ob).some(value => !value)) {
//     console.log(1);
// } else {
//     console.log(0);
// }



const valid = "requi|min:6|max:12";
const conditions = {};
function pat (valid, conditions) {
    for (i of valid.split("|")) {
        conditions[i.split(":")[0]] = i.split(":")[1] ? +(i.split(":")[1]) : true
    }
    return conditions;
}
console.log(pat(valid, conditions));


function parse_condisions (valid) {
    const array_conditions = valid.split("|");
    return array_conditions.reduce((pre, cur) => {
        const [key, value = true] = cur.split(":");
        return {...pre, [key]: value}
    }, {});
}
console.log(parse_condisions(valid));
