let book=["C++",100,400];

// Creating separate variable
let bookName=book[0]
let page=book[1]
let Price=book[2]

console.log(Price);

// We use array destructuring.

let Name=["aman","sonu","bittu"];

let[name1,name2,name3]=Name;

console.log(name3);

// With 2d Array.

let Fruits= ["mango","litchi","amrud",["papaya","orange"]];

let[fruit1,fruit2,fruit3,[fruit4,fruit5]]=Fruits;

console.log(fruit5);
