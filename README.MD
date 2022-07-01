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
### Type Annotations on Variables
- When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable:
    ```
    let myName: string = "Alice";
    ```
- TypeScript tries to automatically infer the types in your code. For example, the type of a variable is inferred based on the type of its initializer
    ```
    // No type annotation needed -- 'myName' inferred as type 'string'
    let myName = "Alice";
    ```
### Functions
- Parameter Type Annotations
    ```
    // Parameter type annotation
    function greet(name: string) {
        console.log("Hello, " + name.toUpperCase() + "!!");
    }
    ```

- return type Annotations
- You can also add return type annotations. Return type annotations appear after the parameter list:
    ```
    function getFavoriteNumber(): number {
        return 26;
    }
    ```
### tsconfig.json file
- create initial tsconfig.json file
    ```
    tsc --init 
    # in tsconfig.json file
    "target": "es2016" //=> node.js 에서는 es2016을 대부분 지원한다. https://node.green 에서 확인 가능
    "lib" //=> target에 정의된 값 대신 커스텀하게 사용하는 경우 사용
    "module": "commonjs"
    ```
- js 파일을 typescript에서 인식하게 하려면, d.ts 파일이 필요함 이것은 type 정의임.
- js 파일에서 JSDoc 만 추가하면 type을 검증해줌.. 좋네..

### 아. 뭐가 많고만...
```
NODE_OPTIONS='--experimental-specifier-resolution=node'
```
- To enable the automatic extension resolution and importing from directories that include an index file use the node mode

- nodejs types 들을 모두 정의해놓은 사람들이 있으니 갔다가 쓰자. 멋진 사람들...
- 나도 참여할 수 있겠네...
- https://github.com/DefinitelyTyped/DefinitelyTyped
```
npm i -D @types/node
```

- rabbitmq 테스트 모듈 만들기 ( 진짜목적 ) [official sample](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
  ```
  npm install amqplib
  ```