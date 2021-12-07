# scope-and-closure

<p align="center">This branch is made for hometasks</p>

## Tasks

<details>
    <summary>Partial sum</summary>
    <br>
    
➡️ Task: Create a function that implements partial sum

➡️ Expected output

- sum(1)(2); // 3
- const addOne = sum(1)
- addOne(2); // 3
- const addTen = sum(10);
- addTen(2); // 12
- addOne(4); // 5
- addTen(10); // 20

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/partialSum.js)

</details>

<details>
    <summary>redundant function</summary>
    <br>
    
➡️ Task: Write a function redundant that takes in a string str and returns a function that returns str.

➡️ Expected output

- const f1 = redundant("apple"); // //f1() ➞ "apple"
- const f2 = redundant("pear");//f2() ➞ "pear"
- const f3 = redundant("");//f3() ➞ ""

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/redundant.js)

</details>

<details>
    <summary>Add suffix</summary>
    <br>
    
➡️ Task: Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

➡️ Expected output

- add_ly = add_suffix("ly");
- add_ly("hopeless"); // "hopelessly"
- add_ly("total"); // "totally"
- add_less = add_suffix("less");
- add_less("fear"); // "fearless"
- add_less("ruth"); // "ruthless"

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/anonymous.js)

</details>

<details>
    <summary>printAfter function</summary>
    <br>
    
➡️ Task: Create a function printAfter that calls its argument after printing 'hello world'

➡️ Expected output

- printAfter(print); // 'hello, world' // 'Elon Musk'

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/prinAfter.js)

</details>

<details>
    <summary>Function to emplement filtering an array</summary>
    <br>
    
➡️ Task: Write a function that implements filtering in array

➡️ Expected output

- filterFalsyValues(values); // [true, {}, { name: "Elon" }];

- filterFalsyValues(["hello", 1233, []]); // ['hello', 1233, []]

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/implimentArray.js)

</details>

<details>
    <summary>Function to remove elements of array with length <= 3</summary>
    <br>
    
➡️ Task: Write a function which remove elements with length <= 3

➡️ Expected output

- filterByLength(["kia", "tesla", "bmw", "mercedes"]); // ['tesla', 'mercedes']

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/filterLength.js)

</details>

<details>
    <summary>Are elements of the given array uniwue ?</summary>
    <br>
    
➡️ Task: Given an array. Determine whether it consists only from uniques or not.

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/uniques.js)

</details>

<details>
    <summary>Determine if a word or phrase is an isogram.</summary>
    <br>
    
➡️ Task: Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word or phrase without a repeating letter.

➡️ [Solution](https://github.com/armeagle777/scope-and-closure/blob/master/homeTasks/isogram.js)

</details>

## Built With

- Vanilla JavaScript

## Author

**Tigran Yeranyan**

Contributions, issues, and feature requests are welcome!

Give a ⭐️⭐️⭐️⭐️⭐️ if you like this project!
