import Message from "./Message";
import Descriptions from "./Descriptions";
/**
 *  * This function detect if the number is prime number
 * @param num this param contains some number 
 * @returns the result
 */
function primenumber(num: number){
var i=2
var result= true 
//this while loop returns true if the number is a prime number otherwise it returns false
  while(result && i<=Math.floor((Math.sqrt(num))+1)) { 
    if (num%i==0){
    result=false;
    }
    else {
    i++;
    }
  }
return result;
}

//declarating max and min
var min: number =0;
var max= Number.MAX_SAFE_INTEGER;
//array for all generated numbers
let  numbers  = [];
//arrays for numbers that are divisible by 4,6 and 8
let numbers4=[];let numbers6=[];let numbers8=[];
//arrays for even, odd and prime numbers
let even=[];let odd=[];let primenumbers=[];

//This loop generates 100 random numbers from the interval<min,max) 
for (let i = 0; i < 100; i++) {
     numbers [i] =  Math.floor(Math.random() * (max - (min+1)));
}

//this loop goes through all numbers in range <min,max) and sorts them by parity
for (let i = 0; i < 100; i++) {
      if ( (numbers[i]) % 2==0) {
        even.push(numbers[i]);
       }
       else{
        odd.push(numbers[i]);
      } 
}

//this loop goes through the even numbers and sorts them according to divisibility 
for (let i = 0; i < even.length; i++) {
      if ( (even[i]) % 4==0) {
        numbers4.push(even[i]);
       }
      if ( (even[i]) % 6==0) {
        numbers6.push(even[i]);
       }
      if ( (even[i]) % 8==0) {
        numbers8.push(even[i]);
        }
}

//this loop goes through odd numbers and detect if they are prime numbers
for (let i = 0; i < odd.length; i++){
  if(primenumber(odd[i])){
   primenumbers.push(odd[i]);
  }
}
// Setting value from type Descriptions to global variables 
let myDescription : Descriptions = {
  descriptionone: "These are the numbers divisible by four: ",
  descriptiontwo: "These are the numbers divisible by six: ",
  descriptionthree: "These are the numbers divisible by eight: ",
} 

let myMessage = new Message("These are random numbers I generated :");
  console.log(myMessage.getMessage());
//Array function that prints every generated number
  numbers.forEach((element)=>{
  console.log(element);
})

console.log('These are the even numbers and are divisible by two: : ');
//Loop that prinst even numbers
for (let i = 0; i < even.length; i++){
  console.log(even[i]);
}

console.log('These are the odd numbers: ');
//Loop that prints odd numbers 
for (let i = 0; i < odd.length; i++){
  console.log(odd[i]);
}

console.log(myDescription.descriptionone);
//Loop that prints numbers divisible by four
for (let i = 0; i < numbers4.length; i++){
  console.log(numbers4[i]);
}

console.log(myDescription.descriptiontwo);    
//Loop that prints numbers divisible by six
for (let i = 0; i < numbers6.length; i++){
  console.log(numbers6[i]);
}

console.log(myDescription.descriptionthree); 
//Loop that prints numbers divisible by eight
for (let i = 0; i < numbers8.length; i++){
  console.log(numbers8[i]);
}

console.log('These are the prime numbers: ');
//Loop that prints the prime numbers 
for (let i = 0; i < primenumbers.length; i++){
  console.log(primenumbers[i]);
}
