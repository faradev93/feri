let golabi2 = 35 + 5;
let myArray = [1, "faramarz", golabi2, function () { }, [10, 20], null, false];
console.log(myArray[1]);
console.log(myArray.length);
console.log(Array.isArray(myArray));
console.log(typeof myArray);

for (let k = 0; k <= myArray; k++) {
    console.log(typeof myArray[k]);
}


//Object//
let monpel = { name: "faramarz", age: golabi2, sexM: true, dau: false, reshte: "string" };
console.log(Object.keys(monpel));
console.log(Object.values(monpel));
console.log(Object.entries(monpel));





// javab dorost
function typer(input) {
    for (let a = 0; a < input.length; a++) {
        console.log(typeof input[a])
    }
}


typer(["hasan", 1, 2, 5, true, "a", 'String', function () { }]);

console.log(Array.isArray(typer));
// javab dorost
typer2(["hasan", 1, 2, 5, true, "a", 'String', function () { }]);
function typer2(input2) {
    let str = "";
    for (let b = 0; b < input2.length; b++) {
        str = str + "," + typeof input2[b];
    }
    console.log(str);
}
//ta inja//

function jomanji(pitter) {
    for (let h = 0; h < pitter.length; h++) {
        console.log(typeof pitter[h]);
    }
}

console.log(Array.isArray(jomanji));
jomanji(["hasan", 1, 2, 5, true, "a", 'String', function () { }]);


function jomanji(callof) {
let ptr=",";
for(let m =0; m<callof.length;m++)
{
   ptr=ptr+","+typeof callof[m];
}
console.log(ptr);
}
