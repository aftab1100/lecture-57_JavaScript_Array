var students = ["Arvind", "kiran", "akasha", "mohan"];

console.log(students);

function greet(students) {
  console.log("Hello  " + students + "  How are you");
}

for (var i = 0; i <= 3; i++) {
  greet(students[i]);
}
/* greet(students[1]); */
console.log("-----------------------------")
function greet2(s) {
  for (var i = 0; i <= 3; i++) {
    console.log("Hello " + s[i] + " JavaDeveloper");
  }
}

greet2(students);
