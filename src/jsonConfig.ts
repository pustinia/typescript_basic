
import fs from 'fs';

interface MqConfig {
    hostname: string;
    port: number;
    username: string;
    password: string;
    vhost: string;
}

class MqConfigOption implements MqConfig {
    hostname: string;
    port: number;
    username: string;
    password: string;
    vhost: string;
    countstosendmq: number;
    constructor(hostname: string, port: number, username: string, password: string, vhost: string, countstosendmq:number){
        this.hostname = hostname;
        this.port = port;
        this.username = username;
        this.password = password;
        this.vhost = vhost;
        this.countstosendmq = countstosendmq;
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