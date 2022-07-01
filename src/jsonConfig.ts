
import fs from 'fs';

interface MqConfig {
    hostname: string;
    port: number;
    username: string;
    password: string;
    vhost: string;
}

export class MqConfigOption implements MqConfig {
    hostname: string;
    port: number;
    username: string;
    password: string;
    vhost: string;
    constructor(hostname: string, port: number, username: string, password: string, vhost: string){
        this.hostname = hostname;
        this.port = port;
        this.username = username;
        this.password = password;
        this.vhost = vhost;
    }
}

// json data parser
export default function jsonConfig(filename: string) : MqConfigOption {
    const jsonFile = fs.readFileSync(filename, `utf8`);
    return JSON.parse(jsonFile) as MqConfigOption;
}

//"vhost": "/"
// 실제로 error가 발생하지 않는다.
//console.log(jsonConfig(path.join(`${__dirname}`,`..`,`resources`,`config.json`)));