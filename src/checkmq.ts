
import path from 'path';
import client, {Connection, Channel, ConsumeMessage, Options} from 'amqplib';
import JsonConfig from './jsonConfig';
const MAX_CNT: number = 10000;
const TIME_LABEL: string = `duration`;

// set config.json path
const configFilePath = `resources`;
const configFile = `config.json`;
const config = JsonConfig(path.join(`${__dirname}`,`..`, configFilePath, configFile));

// rabbitmq config
const rabitmqSettings: Options.Connect = {
    protocol: `amqp`,
    hostname: config.hostname,
    port: config.port,
    username: config.username,
    password: config.password,
    vhost: config.vhost,
};

// consumer for the queue.
// We use currying to give it the channel required to acknowledge the message
let consumedCnt: number = 1;
const consumer = (channel: Channel) => (msg: ConsumeMessage | null): void => {
    if (msg) {
        // Display the received message
        console.log(`[consum][${consumedCnt++}] ${new Date()} ${msg.content.toString()}`);
        // Acknowledge the message
        channel.ack(msg);
        if(consumedCnt > MAX_CNT) {
            console.timeEnd(TIME_LABEL);
            const durationSec: number = (new Date().getTime() - stTime.getTime())/1000;
            console.log(durationSec);  // seconds
            process.exit();
        }
    }
};

// send message to rabbitmq
const sendAllDay = (channel: Channel, queueName: string, delayMs: number, testData: string): void => {
    setInterval(() => {
        channel.sendToQueue(queueName, Buffer.from(testData));
    }, delayMs);
};

let stTime:Date;

// start function
const start = async (queueName: string, delayMs: number, testData: string) => {
    const connection: Connection = await client.connect(rabitmqSettings);
    // Create a channel
    const channel: Channel = await connection.createChannel();
    // Makes the queue available to the client
    await channel.assertQueue(queueName, { durable: false });
    // Send some messages to the queue
    sendAllDay(channel, queueName, delayMs, testData);
    
    // console timmer start
    console.time(TIME_LABEL);
    stTime = new Date();
    // Wait the consumer
    await channel.consume(queueName, consumer(channel))
};

// main method call (queue_name, delay, data)
start(`hello`, 0, `message ${new Date()}`);
// 1ms 를 10000 개 => 10초
