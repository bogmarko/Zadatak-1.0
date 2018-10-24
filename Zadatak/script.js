var myArray = ["one", "two", "five", "orange", "apple"];
myArray.splice(0,3);
console.log(myArray);

if (myArray.includes("orange" && "apple") == true ){
    
    thArray = myArray.reverse();
    thArray = myArray.concat("pear", "banana");
    console.log(thArray);
    
    for ( x = 0; x < thArray.length; x++) {
    console.log(thArray[x]);
    }
   
} else {
    console.log("false");
    
}



// skracena verzija


var myArray = ["one","two","five","orange","apple"];
var x = 0;

myArray.splice(0,3);
myArray.reverse();
myArray.push("pear", "banana");

console.log(myArray);

for (x = 0; x < myArray.length; x++) {
    console.log(myArray[x]);
}
