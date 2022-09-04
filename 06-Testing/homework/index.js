const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send({
    message: 'hola',
  });
});

app.get("/test", (req, res) => {
  res.json({ message: "test" });
});

app.post("/sum", (req, res) => {
  let { a, b } = req.body;
  return res.json({ result: a + b });
});

app.post('/product', (req, res) => {
  let { a, b } = req.body;
  if (!a || !b) return res.sendStatus(400);
  if (typeof a !== "number" || typeof b !== "number") return res.sendStatus(400);
  res.send({
    result: req.body.a * req.body.b,
  });
});

function sum(array, num) {
  if (!Array.isArray(array)) throw new TypeError("array");
  if (typeof num !== "number") throw new TypeError("number");
  // evaluo si hay dos numeros dentro del array que sumen num
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) return true;
    }
  }
  return false;
}
// console.log(sum([2,5,7,10,11,15,20], 23)); // false
app.post("/sumArray", (req, res) => {
  let { array, num } = req.body;
  if (!array || !num && num !== 0) res.sendStatus(400);
  
  return res.json({ result: sum(array, num) });
});

app.post("/numString", (req, res) => {
  let { s } = req.body;
  if (typeof s !== "string" || s === "") return res.sendStatus(400);
  return res.json({ result: s.length });
});

function pluck(array, prop) {
  return array.map(p => p[prop]);
}
// console.log(pluck([{ name: "computadora", amount: 2 }, { name: "netbook", amount: 3 }, { name: "cellphone", amount: 6 }], "name"));
app.post("/pluck", (req, res) => {
  let { array, prop } = req.body;
  if (!prop || !Array.isArray(array)) return res.sendStatus(404);
  res.send({ result: pluck(array, prop)});
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
