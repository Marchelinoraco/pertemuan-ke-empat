var number1 = 10;
let number2 = 20;
const number3 = 30;

number1 = 40;
number1 = 50;


//printf(number1)
//system.print.out(number1)
console.log(number1);
console.log(number2);
console.log(number3);


//tipe data

const number = 30;

console.log(typeof number);

let x;

console.log(typeof x);

const text = "Hello World";

console.log(typeof text);

let b = true;

console.log(typeof (b));

let someLaterData = null;

console.log(typeof someLaterData);

//Array

const arr=[1,2,3,4,5];

console.log(arr[0]);

for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

//key : value

const user = {
    email : "admin@gmail.com",
    password : "123456"
};

console.log(user.email);
console.log(user.password);

const aString = "10";
const aNumber = 10;

console.log(aString == aNumber);
console.log(aString != aNumber);

console.log(number2 > number3);
console.log(number2 >= number3);
console.log(number2 < number3);
console.log(number2 <= number3);

console.log(aString === aNumber);
console.log(aString !== aNumber);

console.log(number2 > number3 && number2 >= number3); //true
console.log(number2 > number3 || number2 < number3); //true
const isLogin = true;

console.log(!isLogin); //not is Login -> false


//looping

for (let j=0; j<5; j++){
    console.log(j);
}


for (let j=5; j>0; j--){
    console.log(j);
}


const language = "Deutsch";

if (language === "English"){
    console.log("Good morning")
}

if (language === "English"){
    console.log("Good morning")
}else {
    console.log("Selamat Pagi")
}
if (language === "English"){
    console.log("Good morning")
}else if (language === "Deutsch"){
    console.log("Guten Morgan")
}else {
    console.log("Selamat Pagi")
}

