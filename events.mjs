import EventEmitter from "node:events";
export const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("started");
});
eventEmitter.on("start", (e) => {
  console.log("suno na sange mar mar", e);
});
