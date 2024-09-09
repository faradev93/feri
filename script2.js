let pedar = { name: "faraz", "Last Name": "RK", Female: false, "function(){}": "No", Pedarsag: "yes" };
console.log(Object.keys(pedar));
console.log(Object.values(pedar));
console.log(Object.entries(pedar));
console.log(Object.entries(pedar).length)


for (oo = -1; oo <= 2; oo++) {

    console.log(oo);
}
//LOOOOP//
for (oo = -4; oo <= 1; oo++) {
    console.log(oo);
    console.log(typeof oo);
}

typer(["hasan", 1, 2, 5, true, "a", 'String', function () { }]);

console.log(typeof typer);
function typer(golabi) {
    for(w=0;w<=typer.length;w++)
    {console.log(golabi.length);

    }
    console.log(golabi);
}
//  let typer=['hasan',1,2,5,true,"a",'String',function() {}];
//  for(input=0, input<=typer; input++;){
//     console.log(typeof typer[input]);
//  }