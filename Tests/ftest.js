function callMe(v) { console.log("I was called!"); return v; }

function f(x = callMe(1)) { return x; }

console.log(f());
console.log(f(2));
console.log(f(undefined));