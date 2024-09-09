// Braye log array az in formul:
let myArray = ["faramarz", 10, 20, 30, false, 31, function () { }, [50, 60]];
console.log(Array.isArray(myArray));
console.log(myArray.length);
console.log(myArray[5]);
console.log(myArray[6]);
console.log(myArray[7]);



// Braye log object ham az in formul:

let myobject = { name: "masoud", lastname: "Rezakhanlou", Age: 30, Male: true };
console.log(myobject["lastname"])

//--ya--//

console.log(myobject.lastname)
console.log(myobject.entries)
console.log(typeof myobject)
console.log(Object.keys(myobject));
console.log(Object.values(myobject));
console.log(Object.entries(myobject));
console.log(Object.entries(myobject).length);

//LOOOOOOOOOOOOP//
let num = 1;
num = 2;
let yob = [1, 2, function () { }, true, "fara", [50, 60, ["khanloie"]]]
console.log(Array.isArray(yob));
console.log(yob.length);
console.log(yob[5]);
//LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOP//
for (p = 0; p <= 20; p++) {
    console.log(p);
}
for(j=50;j>=0;j--){
    console.log(j);
}
for(j=49;j>=0;j--){
    console.log(j.length);
   
}



// console.log(ghazanfar);
// console.log(ghazanfar.length);
// console.log(typeof ghazanfar);
// for (index = 0; index <= ghazanfar.length; index++) {
//     console.log(ghazanfar[index]);
// }
// console.log(Array.isArray(ghazanfar));