input2(["faramarz", 1, 2, 3, false, function () { }, "string"]);
function input2(ppp) {
    let str = ",";
    for (let x = 0; x < ppp.length; x++) {

        str = str + "," + typeof str[x];
    }
    console.log(str);
}
console.log(typeof input2.length);


let arr = [50, "str", [1, 2, 3], "faramarz", "RK"];
let arar = [1, 2, function () { }, true, false, "fara"]
console.log(typeof arar[3]);
console.log(typeof arar[3]);
console.log(arar.length);

console.log("hi");


