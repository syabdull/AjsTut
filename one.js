let obj = {
  name: "javeed",
  age: 23,
  a: [1, 2, 3],
  b: function () {
    console.log("hi  htere");
  },
  address: {
    street: 12,
    hno: "mycolor",
  },
};
// Access trough dot notation
console.log(obj.name);
//Access trough bracket notation
console.log(obj.a);
console.log(obj["a"]);
console.log(obj["b"]);
console.log(obj.b());
console.log(obj.address.street);
console.log(obj.address["hno"]);
// computed propery
obj.javeed = "good boy";
obj.javeed = "bad boy";
obj.age = 32;
delete obj.age;
console.log(obj);

let { name: sai, a: myva } = obj;

console.log(sai, myva);
