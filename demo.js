// function a(){
//     var x = 21;
//     b();
// }

// function b(){
//     console.log(x)
//     function c(){
//         var x = 101;
//         console.log(x);
//     }
//     c();

// }

// var x = 10;
// a();

// /////////////////////////////////////////////////////

// let a = 10;
// let a = 100;

// var a = 10;
// var b = 100;

// let a = 10;
//  a = 100;

// const b;

//////////////////////////////////////////////////////VIDEO 10
// block scope and shadowing in JS

// {
//     var a = 10;  a is in global object
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a); // we can access a because it is in global object
// console.log(b);
// console.log(c);

//ex2-
// function demo () {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// demo();

// console.log(a);
// console.log(b);
// console.log(c);

//illegal shadowing-

// let a = 20;
// {
//     var a = 40;
//     console.log(a)
// }

// console.log(a);

//lexical block scope

// const a = 10;
// {
//     const b = 20;
//     {
//         const c = 30;
//         console.log(b);
//     }
// }

//////////////////////////CLosures
// var a = 100;

// function z() {
//     // var a = 7;
//     function b() {
//         console.log(a);
//     }
//     return b;
// }

// var x = z();
// x();

///////////////////////////FIrst class functions
// let counter = 0;

// function addFive() {
//     counter += 5
//     console.log(counter)
// }

// function addTwo() {
//     counter += 2
//     console.log(counter)
// }

// addFive(counter);// what will this show in the console?
// addTwo(counter);// what will this show in the console?

//PROMISES

// function createOrder () {
//     const pr = new Promise(function (resolve, reject) {
//         if(false) {
//             reject("rejected");
//         }
//         setTimeout(function (){
//             resolve("We can return anything in this");
//         }, 5000)
//     })
//     console.log("pr is ",pr)
//     return pr;
// }

// function createBill (data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function (){
//             //res = api response and this api took 5 sec to load;
//             resolve("API Res" + " " + data);
//         }, 5000);
//     })
// }

// const promise = createOrder();

// promise.then((data) => {
//     console.log(data)
//     let abc = createBill(data);   //this is another api call
//     return abc
// }).then((data) => {
//     console.log("second then is ",data);
// }).catch((error) => {
//     console.log("error is ",error);
// })

// console.log("end")

////////////////////////call, apply, bind

// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
// 	Car.call(this, "convertible", "petrol");
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.call(this, "convertible", "diesel");
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

// console.log("nv is ",newBrand.type)

///////////////////////////////////////prototype and prototypal inhertiance

// let obj = {
//     name: "pp",
//     city: "sinnar",
//     demo: function () {
//         console.log(this.name + " " + this.city);
//     }
// }

// let obj2 = {
//     name: "adi"
// }

// obj2.__proto__ = obj;

// console.log(obj2.name);
// console.log(obj2.city);
// console.log(obj2.demo());

//////////////////////////////////////////////

// function foo() {
//     console.log("this.a is ", this.a);
// };

// const obj = {
//     a: 10,
//     foo: foo,
// }

// const pqr = {
//     a: 999,
// }

// // const bar = obj.foo.bind(pqr);
// // setTimeout(bar, 2000);
// const bar = obj.foo;
// const bar2 = bar.bind(pqr);
// bar2();

/////////////////////////////////////

// function foo (array, obj) {
//     // const dummyarr = [...array];
//     // const dummyobj = {...obj}
//     // dummyarr[0] = 99;
//     // dummyobj.a = 99;
//     // dummyobj.pp = 101
//     array[0] = 9999;
//     array = [99,33,4];
//     console.log(array[0] = 101)
//     array[0] = 444;
//     console.log(array)

// }

// const arr = [0,1,2];
// const obj = {a: 0, b: 1}
// foo(arr, obj);
// console.log("arr is", arr)
// console.log("obj is", obj)

// function foo (array) {
//     array[4] = 99;
//     console.log(array);

// }

// const arr = [0,1,2];
// foo(arr);
// console.log("arr is", arr)

// var a = 10;
// const b = 20;

// console.log("var this ", this.a)
// console.log("var this ", this.b)
// console.log("window is ", window)

// let a = 30;

// if(true){
//     var a = 320;
//     console.log(a);
// }

// console.log(a);

// var a = 10;

// function x () {
//     var a = 20;
// }

// a = x();
// console.log(a)

// let a = 10;

// {
//     var a = 20;
//     console.log(a)
// }

// console.log(a)

// const arr = [5,4,3,2,1];

// const sum = arr.reduce((acc, val) => {
//     console.log("acc is ",acc)
//     return acc * val;
// })

// console.log(sum)

// MAP Function Polyfill

// const arr = [1, 2, 3, 4, 5];

// arr.map((item, index, arr) => {

// })

// Array.prototype.myMap = function (callback) {
//     let arr = [];
//     for (let index = 0; index < this.length; index++) {
//         arr.push(callback(this[index], index, this));
//     }
//     return arr;
// }

// const newArr = arr.myMap(((item, index, arr) => {
//     console.log("item ", item)
//     return item * 2;
// }))

// console.log(newArr)

// Array.prototype.myFilter = function (callback) {
//     let arr = [];
//     for (let index = 0; index < this.length; index++) {
//         let isTrue = callback(this[index], index, this)
//         isTrue && arr.push(this[index]);
//     }
//     return arr;
// }

// const newArrFilter = arr.myFilter(((item, index, arr) => {
//     console.log("item ", item)
//     return item > 2;
// }))

// console.log(newArrFilter)

// const arr = [1, 2, 3, 4, 5];

// arr.filter((item, index, arr)=>{})

// function fun (callback) {
//     const temp = [];

//     for (let index = 0; index < this.length; index++) {
//         const isTrue = callback(this[index], index, this);
//         isTrue && temp.push(this[index]);
//     }

//     return temp;
// };

// Array.prototype.myFilter = fun;

// const newArrFilter = arr.myFilter(((item, index, arr) => {
//     return item > 2;
// }))

//Reduce Pollyfill

// const arr = [5, 4, 3, 2, 1];

// // arr.reduce((acc, item) => { return acc + item })

// Array.prototype.myReduce = function (callback, acc) {
//     let index = acc === 0 || acc ? 0 : 1;
//     acc = acc === 0 ? 0 : !acc ? this[0] : acc;
//     for (index; index < this.length; index++) {
//         acc = callback(acc, this[index]);
//     };

//     return acc;
// };

// Array.prototype.myReduce = function (callback, initial) {    //Rodeside Coders Approach
//     var acc = initial;
//     for (index = 0; index < this.length; index++) {
//         acc = acc ? callback(acc, this[index]) : this[index];
//     };

//     return acc;
// };

// const myArr = arr.myReduce((acc, item) => {
//     console.log("myreduce acc ", acc, " item ", item)
//     return acc + item;
// },0);

// const originalMyArr = arr.reduce((acc, item) => {
//     console.log("original reduce acc ", acc, " item ", item)
//     return acc + item;
// },0);

// console.log(myArr);
// console.log(originalMyArr);

//prac

// const arr = [
//     { name: 'Pruthvi', RollNo: 21, class: 10, marks: 90 },
//     { name: 'Shubham', RollNo: 31, class: 11, marks: 67 },
//     { name: 'Rupesh', RollNo: 41, class: 9, marks: 82 },
//     { name: 'Akshay', RollNo: 51, class: 13, marks: 99 },
// ]

// // const newArr = arr.map((item) => {   //map
// //     return { ...item, name: item.name.toUpperCase() }
// // })

// // const newArr = arr.filter((item) => item.RollNo >= 35 && item.class >= 10); //filter

// const sumOfMarks = arr.reduce((acc, item) => {
//     console.log("item ", item);
//     console.log("acc ", acc);
//     return acc + item.marks
// });

// console.log(sumOfMarks);

//return total marks for students with marks greater than 60 after 20 marks have added to those wo scored less than 60

// const arr = [
//     { name: 'Pruthvi', RollNo: 21, class: 10, marks: 80 },
//     { name: 'Shubham', RollNo: 31, class: 11, marks: 69 },
//     { name: 'Rupesh', RollNo: 41, class: 9, marks: 35 },
//     { name: 'Akshay', RollNo: 51, class: 13, marks: 55 },
// ]

// const newVal = arr.map((item) => {
//     if (item.marks < 60) {
//         item.marks += 20;
//     }

//     return item;
// }).filter((item) => item.marks >= 60).reduce((acc, item) => acc + item.marks, 0);

// console.log("newVal2 ", newVal)

/////Functions///////////////

// const foo = (num) => {
//     console.log("number is ", num)
//     return num;
// }

// const fun = foo;

// console.log(fun(10));

/////Callback Functions///////////////////////////////

// function foo(name, rollNo) {
//     console.log("name is ", name, 'rollNo is ',rollNo);
// }

// function wo(callback, name = 'john', rollNo = '07') {
//     callback(name, rollNo);
// }

// woo(foo, 'Pruthvi', 36);

// var a = 10;

// const obj = {
//     a: 30,
//     foo: function () {
//         console.log('foo ',this)
//         console.log("foo this.a ", this.a);
//     },
//     woo: () => {
//         console.log('woo',this)
//         console.log("woo this.a ", this.a);
//     }
// }

// console.log(obj.foo());
// console.log(obj.woo());

///////////////
// let a = 10;

// const foo =  (() => {
//     var a = 20;
//     console.log(a);
// })();
// console.log(a);

////Closures///////////////////////////

// function find() {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     // console.log(a[index]);

//     return (index) => {
//         console.log("index ", index)
//         console.log(a[index]);
//     }
// }

// const find2 = find();

// console.time('6')
// find2(6)
// console.timeEnd('6');
// console.time('12')
// find2(12)
// console.timeEnd('12');

// function a() {
//     for (var i = 0; i < 3; i++) {
//         b(i);
//     }

//     function b(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }

// a()
// console.log("window ", window)

/////Calling Function Only Once (pollyfill of Once method from lodash )

// function Once(func, context) {
//     let ran;
//     return function () {
//         if (func) {
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }

//         return ran;
//     }
// }

// // const hello = Once(() => "Called Only Once");
// const hello = Once((a, b) => console.log("Hello ", a, b));

// hello(1, 2)
// hello(1, 2)
// hello(1, 2)
// hello(1, 2)
// var res = { };
// function foo(...args) {
//     var argss = JSON.stringify(args);
//     res[argss] = "Hello";

//     console.log("args ", JSON.stringify(args));
//     console.log("args ", res);
// }

// foo(100, 200)

///////////Function Currying/////////////

// function a(a) {
//     return function (b) {
//         return `${a}, ${b}`;
//     }
// }

// console.log(a(1)(2));

//1) Sum of sum(2)(6)(1);

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }
// const a = sum(2);
// const b = a(6);
// const c = b(1);
// console.log(c);

// console.log(sum(2)(6)(1));

// 2) evaluate('add')(2)(3) ; //5
// evaluate('sub')(2)(3) ; //-1
// evaluate('mul')(2)(3) ; //6
// evaluate('div')(2)(3) ;

// function evaluate(calc) {
//     return function (b) {
//         return function (c) {
//             switch (calc) {
//                 case 'add':
//                     return b + c;
//                 case 'sub':
//                     return b - c;
//                 case 'mul':
//                     return b * c;
//                 case 'div':
//                     return b / c;
//                 default:
//                     return 'Invalid Condition';
//             }
//         }
//     }
// }

// console.log(evaluate('add')(2)(3));
// console.log(evaluate('sub')(2)(3));
// console.log(evaluate('mul')(2)(3));
// console.log(evaluate('div')(2)(3));
// console.log(evaluate('asda')(2)(3));

//Infinite Sum(1)(3)(3)...(n);

// function sum(a) {
//     console.log('sum',a);
//     return function(b) {
//         if(b) return sum(a + b);
//         return a;
//     }
// }
// const a = sum(3);
// const b = a(5);

// console.log(sum(3)(5)())

// function Sum(a) {
//     return function (b) {
//         if(b) return Sum(a + b);
//         return a;
//     }
// };

// const totalSum = Sum(2)(3)();
// console.log("Sum is ", totalSum)

// let arr = [1, 2, 3, 4, 5];

// arr.map((item, index, arr){})

// function demo(obj) {
//     newObj = { ...obj }
//     newObj.id = '0asdasd07';
// }

// const obj1 = {
//     name: "Pruthvi",
//     id: '41'
// };
// const obj2 = obj1;

// demo(obj2);

// console.log(obj2);

////////////////////////////Shallow vs Deep Copy

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// // let clone = { ...user };    //shallow Clone (user.sizes === clone.sizes) - true
// let clone = structuredClone(user); //Deep Clone (user.sizes === clone.sizes) - false
// clone.name = "pruthvi";
// clone.sizes.height = 100;

// console.log("clone", clone)
// console.log("user", user)

//////////////////////////////This Keyword

// var a = 10;
// var b = 20;

// function hoo() {
//   console.log("in hoo this is ", this);
//   console.log(this.b);
// }

// function foo() {
//   var b = 100;
//   var a = 200;
//   console.log(this.a);
//   hoo();
// }

// foo();
//////////////////////
// var name = "Pruthvi"

// function User() {
//     return {
//         name: "John",
//         ref: this,
//     }
// }

// const a = User();
// console.log("user ", a.ref.name);

////////////CALL, APPLY, BIND /////////////////////

// const person = {
//     name: 'Pruthvi',
// }

// function getInfo(age) {
//     return `hello ${this.name} my age is ${age}`;
// }

// // console.log(getInfo.call(person, 17));      //call
// // console.log(getInfo.apply(person, [17]));   //apply

// const returnedFunction = getInfo.bind(person);  //bind
// console.log(returnedFunction(23));\

///////////////////////////////////////////////////

// const arr = [1, 2, 3];
// const newArr = ['a', 'b', 'c'];

// arr.push(newArr);
// console.log(arr)

// for (let index = 0; index < newArr.length; index++) {
//     arr.push(newArr[index]);
// }

// console.log(arr)

// arr.push.call(arr, ...newArr)
// arr.push.apply(arr, newArr)
// console.log(arr)

// /////////////////////////////////////////////////

// const findMax = [5, 2, 6, 1, 9, 32, 6, 1,];

// console.log(Math.max.apply(null, findMax));

////////////////////////////////////////////////////

// function checkPassword(ok, fail) {
//     let password = prompt("Password", "");
//     if (password === "pruthvi") ok();
//     else fail();
// }

// let user = {
//     name: "Pruthvi Pardeshi",

//     login(result) {
//         console.log(this.name + (result ? ' login Successful' : ' login failure'))
//     }
// }

// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

////////////////Pollyfill for call, apply, bind

// const obj = { name: "pruthvi" };
// function getName(age) {
//     console.log(`hello ${this.name} my age is ${age}`);
// }

// Function.prototype.myCall = function (context = {}, ...argss) {
//     //here this will be 'getName' function

//     if (typeof this !== "function") {
//         throw new Error(this + " is not Callable");
//     }
//     context.fn = this;
//     return context.fn(...argss);
// };

// Function.prototype.myApply = function (context = {}, argsArr) {
//     if (typeof this !== "function") {
//         throw new Error(this + " is not Callable");
//     }
//     context.fn = this;
//     context.fn(...argsArr);
// };

// Function.prototype.myBind = function (context = {}, ...args) {
//     if (typeof this !== "function") {
//         throw new Error(this + " is not Callable");
//     }
//     context.fn = this;
//     return function (...newArgs) {
//         context.fn(...args, ...newArgs);
//     };
// };

// // const arr = [2, 4, 7, 1, 5];
// // console.log(Math.max.call(arr, ...arr));

// // getName.myCall(obj, 27)
// // getName.myApply(obj, [27])

// // let fun = getName.myBind(obj, 27);
// let fun = getName.myBind(obj);
// fun(27);

// Function.prototype.myCall2 = function (context, ...args) {
//     let currentContext = context || globalThis;
//     console.log("context", context);
//     let randomProp = Math.random();
//     console.log("random prop is ", randomProp);
//     console.log("is random prop ", currentContext[randomProp] !== undefined);
//     while (currentContext[randomProp] !== undefined) {
//         randomProp = Math.random();
//     }
//     console.log("this", this);

//     currentContext[randomProp] = this;
//     let result = currentContext[randomProp](...args);
//     delete currentContext[randomProp];
//     return result;
// };

// const arr = [2, 4, 7, 1, 5];
// // console.log("max is ", Math.max.myCall(arr, ...arr));
// getName.myCall(obj, 27)

//////////////////////////////synchronous vs asynchronous code in JS and Async and Await

// console.log("start");

// async function getMessage(message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello " + message);
//         }, 1000);
//     });
// }

// getMessage("I am Pruthvi").then((msg) => {
//     return msg + " How Are you";
// }).then((finishedMessage) => `console.log("final ", ${finishedMessage})`)

// // async function main() {
// //     const message = await getMessage("I am PP");
// //     console.log("msg ", message);
// // }
// // main()

// console.log("end");

/////////////////////////////////////////

// console.log("Start");

// function like(likeMessage) {
//     return new Promise((resolve, reject) => {
//         if (false) {

//             setTimeout(() => {
//                 resolve("hey Pruthvi!! " + likeMessage);
//             }, 3000);
//         } else {
//             reject("Issue in Like Process")
//         }
//     });
// }

// function share(shareMessage) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hey Pruthvi!! " + shareMessage);
//         }, 500);
//     });
// }

// function subscribe(subscribeMessage) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hey Pruthvi!! " + subscribeMessage);
//         }, 1000);
//     });
// }

// like("Like the video").then((res) => {
//     console.log("like response ", res);
//     return share("share the video");
// }).then((res) => {
//     console.log("share response ", res);
//     return subscribe("subscribe the channel");
// }).then((res) => {
//     console.log("subscribe response ", res);
// }).catch((err)=> console.error("err is ", err))

// console.log("end");

/////////////////////////////////////////////////////////with callbacks

// console.log("Start");

// function like(likeMessage, callback) {
//     setTimeout(() => {
//         console.log("hey Pruthvi!! " + likeMessage);
//         callback('share my video', subscribe);
//     }, 3000);
// }

// function share(shareMessage, callback) {
//     setTimeout(() => {
//         console.log("hey Pruthvi!! " + shareMessage);
//         callback("subscribe to my channel");
//     }, 500);
// }

// function subscribe(subscribeMessage) {
//     setTimeout(() => {
//         console.log("hey Pruthvi!! " + subscribeMessage);
//     }, 1000);
// }

// like("like my channel ", share);

// console.log("end");

////////////////////////////////////////promise combinators methods

// console.log("Start");

// function like(likeMessage) {
//     return new Promise((resolve, reject) => {
//         if (false) {
//             setTimeout(() => {
//                 resolve("hey Pruthvi!! " + likeMessage);
//             }, 3000);
//         } else {
//             reject("Issue in Like Process");
//         }
//     });
// }

// function share(shareMessage) {
//     return new Promise((resolve,  reject) => {
//         setTimeout(() => {
//             resolve("hey Pruthvi!! " + shareMessage);
//         }, 500);
//     });
// }

// function subscribe(subscribeMessage) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hey Pruthvi!! " + subscribeMessage);
//         }, 1000);
//     });
// }

//all()- returns all the fullfilled promise result in a array. If any one of promise rejected it will show error and none of promise will resolve i.e it wont go in then method
// Promise.all([
//     like("like my video"),
//     share("share my video"),
//     subscribe("subscribe my channel"),
// ])
//     .then((res) => {
//         console.log("res ", res);
//     })
//     .catch((err) => {
//         console.error("err ", err);
//     });

//race()- returns the first resolved/rejected promise that we have provided.
// Promise.race([
//     like("like my video"),
//     share("share my video"),
//     subscribe("subscribe my channel"),
// ])
//     .then((res) => {
//         console.log("res ", res);
//     })
//     .catch((err) => {
//         console.error("err ", err);
//     });

// allSettled()- Almost same as all but it returns all the promises(here will return promise object in array even if it is resolved or rejected. In all() it returns only resolved result not whole promise object) in array.
// Promise.allSettled([
//     like("like my video"),
//     share("share my video"),
//     subscribe("subscribe my channel"),
// ])
//     .then((res) => {
//         return res[1];
//     }).then((res) => {
//         console.log("res ", res.value)
//     })
//     .catch((err) => {
//         console.error("err ", err);
//     });

// any() - same as race() but it returns only first fulfilled/resolved promises. It wont return first promise if its rejected(race() returns first resolved/rejected promise)
// Promise.any([
//     like("like my video"),
//     share("share my video"),
//     subscribe("subscribe my channel"),
// ])
//     .then((res) => {
//         console.log("res ", res);
//     })
//     .catch((err) => {
//         console.error("err ", err);
//     });

// console.log("end");

///////////////////////////////////////practice async/await

// console.log("start");

// const fn = () => new Promise((resolve) => {
//     console.log(1);
//     // setTimeout(() => {
//     //     console.log("in set timeout")
//     // }, 1000)
//     // resolve(2);
// });

// // promise.then((res) => {
// //     console.log("res ", res);
// // })

// console.log("end")

//////////////////////////////

// function job(state) {
//     return new Promise((resolve, reject) => {
//         if (state) resolve("success")
//         else reject("failure");
//     })
// }

// const job1 = job(true);
// // console.log("job 1", job1)

// job1.then((res) => {
//     console.log("res ", res)
//     return new Error("Error Occured")
// }).then((res2) => {
//     console.log("res2 ", res2)
// }).catch((err) => {
//     console.error("err ", err)
// })

// // console.log(job1.then((res) => {
// //     return `console.log("res ", res)`
// // }));

///////////////////////////////////////////

// async function loadJson(url) {
//     try {
//         const res = await fetch(url)
//         console.log("res is ", res)
//         if (res.status !== 200) {
//             throw new Error("Error occured while fetching")
//         }
//         return res.json()
//     } catch (err) {
//         console.log("error occured ", err);
//     }
// }

// async function main() {
//     const res = await loadJson("https://dummyjson.com/products/1");
//     console.log("res is ", res)
// };

// main()

////////////////////////////////////////////////
// function like(likeMessage) {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             setTimeout(() => {
//                 resolve("hey Pruthvi!! " + likeMessage);
//             }, 3000);
//         } else {
//             reject("Issue in Like Process");
//         }
//     });
// }

// function share(shareMessage) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hey Pruthvi!! " + shareMessage);
//         }, 500);
//     });
// }

// function subscribe(subscribeMessage) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hey Pruthvi!! " + subscribeMessage);
//         }, 1000);
//     });
// }

// function callPromiseRecursive(promArr) {
//     console.log("prom arr ", promArr);
//     if (promArr.length === 0) return;

//     const currentPromise = promArr.shift();
//     currentPromise
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((err) => {
//             console.error(err);
//         });

//     callPromiseRecursive(promArr);
// }

// const promiseArr = [
//     like("Like the video"),
//     share("share the video"),
//     subscribe("subscribe the channel"),
// ];

// callPromiseRecursive(promiseArr);

///////////////////////////Promise Pollyfill

// function PromisePolyFill(executor) {
//     let onResolve,
//         onReject,
//         isFulfilled = false,
//         isRejected = false,
//         isCalled = false,
//         value;

//     function resolve(val) {
//         console.log("val is ", val);
//         console.log("typof onResolve ", typeof onResolve);
//         isFulfilled = true;
//         value = val;

//         if (typeof onResolve === "function") {
//             onResolve(val);
//             isCalled = true;
//         }
//     }

//     function reject(val) {
//         isRejected = true;
//         value = val;

//         if (typeof onReject === "function") {
//             onReject(val);
//             isCalled = true;
//         }
//     }

//     //callback = (res) => {
//     //         console.log("res ", res);
//     //     }
//     this.then = function (callback) {
//         onResolve = callback;

//         if (isFulfilled && !isCalled) {
//             console.log("in isFulfilled && !isCalled condition");
//             isCalled = true;
//             onResolve(value);
//         }

//         // console.log("this is ", this);
//         return this;
//     };

//     this.catch = function (callback) {
//         onReject = callback;
//         if (isFulfilled && !isCalled) {
//             isCalled = true;
//             onReject(value);
//         }
//         return this;
//     };

//     try {
//         executor(resolve, reject);
//     } catch (error) {
//         reject(error);
//     }
// }

// const examplePromise = new PromisePolyFill((resolve, reject) => {
//     // setTimeout(() => {
//         resolve(2);
//     // }, 1000);
// });

// examplePromise
//     .then((res) => {
//         console.log("res", res);
//         return res;
//     })
//     .catch((err) => {
//         console.log("err ", err);
//     });

///////////////////////prac

// function PromisePollyfill(mainCallback) {
//     let value,
//         isFulfilled = false,
//         isRejected = false,
//         savedResolve,
//         savedReject,
//         isCalled = false;

//     function onResolve(val) {
//         console.log("typeop callback ", typeof savedResolve);
//         isFulfilled = true;
//         value = val;

//         if (typeof savedResolve === "function") {
//             isCalled = true;
//             savedResolve(value);
//         }
//     }

//     function onReject(val) {
//         isRejected = true;
//         value = val;

//         if (typeof savedReject === "function") {
//             isCalled = true;
//             savedReject(value);
//         }
//     }

//     this.then = function (callback) {
//         savedResolve = callback;
//         if (isFulfilled && !isCalled) {
//             isCalled = true;
//             callback(value);
//         }
//         return this;
//     };

//     this.catch = function (callback) {
//         savedReject = callback;
//         if (isRejected && !isCalled) {
//             isCalled = true;
//             callback(value);
//         }
//         return this;
//     };

//     mainCallback(onResolve, onReject);
// }

// const promise = new PromisePollyfill((resolve, reject) => {
//     // setTimeout(() => {
//         resolve(10);
//     reject(10);
//     // }, 1000);
// })
//     .then((res) => {
//         console.log("my res is ", res);
//     })
//     .catch((err) => {
//         console.error("err is ", err);
//     });

//array prac
// let arr = [1, 2, [3, 4], [4, [5, 6, [21, 34, 54, [101, 312, 312]]]], 7, 8]; //input
//output- [1, 2, 3, 4, 4, 5, 6, 21, 34, 54, 101, 312, 312, 7, 8];

// console.log("old array ", arr)
// function fillArray(arr) {
//     let temp = [];
//     function innerFunc(arr) {
//         console.log("in inner func ", arr)
//         arr.map((item) => {
//             if (typeof item === 'object') {
//                 innerFunc(item);
//             } else {
//                 temp.push(item);
//             }
//             // return console.log("item", typeof item);
//         });
//     }

//     innerFunc(arr);
//     console.log("temp is ", temp)
//     return temp;
// }

// const newArr = fillArray(arr);
// console.log("newArr is ", newArr);


// const newEntity = (obj) => console.log(obj);

// function mountEntity(){
// 	this.entity = newEntity;
// 	console.log(`Entity ${this.entity} is mounted on ${this}`);
// }

// mountEntity.call();
