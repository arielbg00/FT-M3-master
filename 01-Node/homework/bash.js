// console.log(process);

// ------------------------------

// console.log(Object.keys(process));

// ------------------------------

/* // Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remueve la nueva línea
  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
}); */

// ------------------------------

/* process.stdout.write("promp > ");

process.stdin.on("data", function(data) {
  var cmd = data.toString().trim();
  if (cmd === "date") {
    process.stdout.write(Date());
  }
  if (cmd === "pwd") {
    process.stdout.write(process.mainModule.path);
  }
  process.stdout.write("\nprompt > ");
}); */

// ------------------------------

const comands = require("./commands");
// const comands = require("./commands/index");

const print = function(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

process.stdout.write("prompt > ");

process.stdin.on("data", function(data) {
  
  let args = data.toString().trim().split(" "); // ["echo", "hello", "world!"]

  let cmd = args.shift(); // "echo"

  if (comands[cmd]) { // (comands.hasOwnProperty(cmd))
    comands[cmd](args, print);
  } else {
    print("cmd not found");
  }

});
