const EventEmitter = require("events");

const myEmitter = new EventEmitter();
myEmitter.on("greet", (name) => {
  console.log(`Olá, ${name}`);
});

myEmitter.emit("greet", "João");
