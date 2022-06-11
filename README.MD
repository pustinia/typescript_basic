# All About Typescript  

## 1. Build a typescript file 
- At first, make a first.ts file.
    ```
    console.log(`Hello Typescript!!`);
    ```
- do install typescript globally.
    ```
    npm install -g typescript
    tsc --version
    ```
- complie typescript
    ```
    tsc first.ts
    ```
- we got first.js file.
    ```
    console.log("Hello Typescript!!");
    ```
- tsc compiles or transforms it into a plain JavaScript file. 

## 2. Type checking Error ?
- Let's add some function to first.ts file.
    ```
    function greet (person, date){
        console.log(`Hello ${person}, today is ${date} !`);
    }
    greet(`Mr Sun`);
    // first.ts:8:1 - error TS2554: Expected 2 arguments, but got 1.
    ```
- TypeScript is telling us we forgot to pass an argument to the greet function.
- but your first.js already changed, nevertheless got error message.
- You’ll notice that first.js never gets updated.
    ```
    tsc --noEmitOnError first.ts
    ```
## 3. Explicit Types
- Let’s edit the code to tell TypeScript that person is a string, and that date should be a Date object. 
    ```
    function greeting(person: string, date: Date){
        console.log(`Hello ${person}, today is ${date.toDateString} !`);
    }
    ```
- Even though we didn’t tell TypeScript that msg had the type string it was able to figure that out.
    ```
    let msg = "hello there!";
    // let msg: string
    ```

### Erased Types
- Let’s take a look at what happens when we compile the above function greet with tsc to output JavaScript.
    ```
    function greeting(person, date) {
        console.log("Hello ".concat(person, ", today is ").concat(date.toDateString, " !"));
    }
    greeting("Mr Sun", new Date());
    ```
