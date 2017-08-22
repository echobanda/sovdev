let namesA = ["Zosia", "Marcin", "Kamil"];
let first = ["Ala", "Puszek"];
let second = ["Jan", "Karol"];

let namesB = [...first, ...namesA, ...second];


console.log(namesB);
console.log(...namesB);


//
function getAvarage(...args) {
  // console.log(args);
  // let result = 0;
  // for (var i = 0; i < args.length; i++) {
  //   result += args[i];
  // }
  // console.log("Dawaj: ", result);

return args.reduce((prev,current)=>prev+current)/args.length;
}

console.log(getAvarage(30,30,30));

// getAvarage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// Zadanie 1
let name = ("Paweł");
let nameX = [...name];
console.log(nameX);

// Zadanie 2

let fruits = ["banan", "jabłko"];
let vege = ["rabarbar", "marchewka"];
let mix =[...fruits,...vege];

console.log(mix);
