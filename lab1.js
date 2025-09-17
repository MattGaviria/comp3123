// excersise 1
function capitalizeInitial(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(" "); 
}

// Example usage:
let text = "the quick brown fox";
console.log("Excerise 1"); 
console.log(capitalizeInitial(text)); 


// excersise 2

function largest(a, b, c) {
  return Math.max(a, b, c);
}

console.log("Excerise 2"); 
console.log(largest (1,0,1));
console.log(largest (0,-10,-20));
console.log(largest (1000,510,440));


// excersise 3

function Move(str) {
 

  let chars = str.split(""); 
  let lastThree = chars.splice(-3); 

  return lastThree.concat(chars).join(""); 
}
console.log("Excerise 3"); 
console.log(Move("Python"));
console.log(Move("JavaScript"));
console.log(Move("Hi"));

// excersise 4

const angleType = angle => 
  angle <= 0 || angle > 180 ? "Invalid angle!" :
  angle < 90 ? "Acute angle" :
  angle === 90 ? "Right angle" :
  angle < 180 ? "Obtuse angle" :
  "Straight angle";

console.log("Excerise 4"); 
console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))
