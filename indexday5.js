

//1.Do the below programs in anonymous function & IIFE
// a.Print odd numbers in an array
// anonymous function
var a = function(){
    var num = [1,2,3,4,5,6,7,8,9,10];
    var odd = [];
    for(var i=0; i< num.length ; i++){
    if ( num[i] % 2 !== 0) 
        odd.push(num[i])
}
console.log("using anonymous function", odd);
};
a();

// IIFE
(function(){
    var num = [1,2,3,4,5,6,7,8,9,10];
    var odd = [];
    for(var i=0; i< num.length ; i++){
    if ( num[i] % 2 !== 0) 
        odd.push(num[i])

}
console.log("using IIFE",odd);
})();

// c. Sum of all numbers in an array
// anonymous function

var b = function(){
    var num = [1,2,3,4,5,6,7,8,9,10];
    var sum = 0;
    for(var i=0; i< num.length ; i++){
   sum += num[i];
   
}
console.log("using anonymous function", sum);
}
b();


// IIFE
(function(){
    var num = [1,2,3,4,5,6,7,8,9,10];
    var sum = 0;
    for(var i=0; i< num.length ; i++){
   sum += num[i];
   
}
console.log("using IIFE", sum);
})();

// g. Remove duplicates from an array
// anonymous function
var c = function(){
var arr = [1,2,3,2,1,4,1,5];
var repeat = {};
var nonRepeated = [];
for(var index in arr){
    var currentValue = arr[index];
    if(repeat[currentValue]){
        repeat[currentValue] += 1;
    }else{
        repeat[currentValue] = 1;
    }
}
// console.log(repeat);
for(var key in repeat){
    var repeatCount= repeat[key];
    if(repeatCount <= 1){
        nonRepeated.push(key);
    }
}
 console.log("using anonymous function", nonRepeated);   
};
c();


// IIFE
(function(){
var arr = [1,2,3,2,1,4,1,5];
var repeat = {};
var nonRepeated = [];
for(var index in arr){
    var currentValue = arr[index];
    if(repeat[currentValue]){
        repeat[currentValue] += 1;
    }else{
        repeat[currentValue] = 1;
    }
}
// console.log(repeat);
for(var key in repeat){
    var repeatCount= repeat[key];
    if(repeatCount <= 1){
        nonRepeated.push(key);
    }
}
 console.log("using IIFE", nonRepeated);   
})();


// 3. Do the below programs in arrow functions

// a. Print odd numbers in an array
var a = ()=>{
    var num = [1,2,3,4,5,6,7,8,9,10];
    var odd = [];
    for(var i=0; i< num.length ; i++){
    if ( num[i] % 2 !== 0) 
        odd.push(num[i])
}
console.log("using arrow functions", odd);
};
a();

// c. Sum of all numbers in an array
var b = ()=>{
    var num = [1,2,3,4,5,6,7,8,9,10];
    var sum = 0;
    for(var i=0; i< num.length ; i++){
   sum += num[i];
   
}
console.log("using arrow functions", sum);
}
b();

