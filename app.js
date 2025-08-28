// arr = ["ali","dua" , "sara"];
// username = prompt("Enter your name");
// found = false;
// for (var i=0;i<arr.length;i++){
//     if(arr[i]===username){
//         console.log("Welcome " + username);
//         found = true;
//         break;
//     }
// }
// if(!found){
//     console.log("User not found");
// }

// var fruits = ["apple", "banana", "mango", "orange", "grapes"];
// var userFruit = prompt("Enter a fruit name");

// var found = false;

// for (var i = 0; i < fruits.length; i++) {
// if(fruits[i]===userFruit){
//     found = true;
//     console.log(userFruit + " is available");
    
// }
// }

// if (!found) {
// console.log(userFruit + " is not available");

// }

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// userinput = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?").toLowerCase();
// found = false;
// for (var i = 0 ; i<A.length ; i++){
//     if(A[i]===userinput){
//         found = true;
//         alert(userinput + " is available at index " + i + " in our bakery");
        
//     }
// }
// if(!found){
//     alert("we are sorry " + userinput + " is not available in our bakery"); 
// }

// var A = [24, 53, 78, 91, 12];
// var largest =  A[0];
// for (var i=0;i<A.length;i++){
//     if(A[i] > largest){
//         largest = A[i];
    
        
//     }
    
// }
//     console.log("largest number is " + largest);

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];
// for (i = 0 ; i<A.length; i++){
//     if (A[i] < smallest){
//         smallest =A[i];
//     }
// }
// console.log(smallest + "is smallest no");

// for (var i = 0 ; i<5 ; i++){
//     console.log(i);
//     for (var j = 0 ; j<5 ; j++){
//        console.log(i,j);
//     }
    
// }

// 2d array

// var arr = [
//     ["ali","dua" , "sara"],
//     ["john","doe" , "smith"],
//     ["apple","banana" , "mango"],
//     [ "a", "b", "c", "d" ],
   
// ]

// for (var i=0;i<arr.length;i++){
//     console.log(arr[i]);
    
//     for ( var j=0 ; j<arr[i].length;j++){
//         console.log(arr[i][j]);
        
//     }
// }
// 3d array
var numbers = [
  [[5], [2], [9], [1]],
  [[8], [7], [3], [4]],
  [[6], [12], [11], [0]]
];

for (var i=0;i<numbers.length;i++){
    row="Row " + (i+1) + ":";
    
    for (var j=0;j<numbers[i].length;j++){
         for (var k=0;k<numbers[i][j].length;k++){
        // console.log(numbers[i][j][k]);
        row += numbers[i][j][k] + " ";   // add each number
    }
    }
    console.log(row.trim()); // print the entire row at once
}
