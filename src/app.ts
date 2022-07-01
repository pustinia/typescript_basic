
import crypto from "crypto";

// import { init, exit } from "myPackage";
// const testTarget = () => {console.log(`dddd`);};
// localStorage.
// console.log(init({url:"true"}));
// exit(111);
// You explained the secret I was most curious about. Thank you.
//"type": "module",
//"start": "NODE_OPTIONS='--experimental-specifier-resolution=node' node build/app.js"
//import { init, exit } from "./myPackage";
//init({debug: true, url: "http://localhost"});
//exit(222);

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ){
        // static function call
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}
