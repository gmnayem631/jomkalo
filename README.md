## 1) What is the difference between **null** and **undefined**?
- **Null** and **undefined** are primitive data types in JavaScript and both depicts an absence of values. **Undefined** is a default output when a variable is uninitialized, missing object values.

- **Null** is used deliberately by developers. A variable is declared but not assigned any value – intentionally.

---

## 2) What is the use of the **map()** function in JavaScript? How is it different from **forEach()**?
- **forEach()** iterates over each element of an array and can perform an action for each element. It does not return a new array.

- **map()** is similar to **forEach()**. Unlike **forEach()**, **map()** creates and returns a new array.

---

## 3) What is the difference between **==** and **===**?
- Both are used to compare different values in JavaScript. **“==”** compares the value, while **“===”** compares both the value and the data type.
**For instance:**
```js
2 == "2"   // true
2 === "2"  // false
```


## 4) What is the significance of async/await in fetching API data?
- async/await in JavaScript is used for handling asynchronous operations like fetching API data.
- Async keyword is used to declare an asynchronous function and the await keyword is used inside that asynchronous function.
- Essentially, these keywords make the program wait until the asynchronous task is done and then proceed to the next ones.

## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
- Scope essentially means the functioning area of a variable.
- Global scope means that you can use a variable anywhere in the file regardless where it is declared – whether inside a function, block or not. Var is an example of global scope. It allows hoisting as well.
- Functions scopes allow variables to be accessed only inside a function – the very function that the variable has been declared in.
- Block scopes refer to the scope inside the curly braces {}. if…else, try…catch are two examples of block scope in JavaScript
