// es6 feature: block-scoped "let" declaration
let sentences = [
{ subject: "JavaScript", verb: "be", object: "great" }, { subject: "Elephants", verb: "are", object: "large" },
];
    // es6 feature: object destructuring
function say({ subject, verb, object }) {
// es6 feature: template strings
  console.log(`${subject} ${verb} ${object}`);
}
    // es6 feature: for..of
for(let s of sentences) { say(s);
}
