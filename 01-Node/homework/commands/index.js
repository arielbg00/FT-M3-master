let fs = require("fs");
let request = require("request");

module.exports = {
  date: function(args, print) {
    print(Date());
  },
  pwd: function(args, print) { // pwd = print working directory
    // print(process.cwd());
    print(process.env.pwd);
  },
  ls: function(args, print) {
    fs.readdir(".", function(err, files) { // "." => es el directorio donde estoy parado
      if (err) throw err;
      // console.log(files);
      print(files.join("\n"));
      // let output = "";
      // files.forEach(e => {output = output + e + "\n"});
      // print(output);
    })
  },
  echo: function(args, print) {
    print(args.join(" "));
  },
  cat: function(args, print) { // cat bash.js ==> args = ["bash.js"]
    fs.readFile(args[0], "utf8", function(err, data) {
      if (err) throw err;
      print(data);
    })
  },
  head: function(args, print) { // head bash.js 10 ==> args = ["bash.js", "10"]
    fs.readFile(args[0], "utf8", function(err, data) {
      if (err) throw err;
      // print(data.split("\n").splice(0, 10).join("\n"));
      // console.log(args);
      let lines = 10;
      if (args[1]) lines = args[1];
      print(data.split("\n").splice(0, lines).join("\n")); // splice(start, elementos a eliminar)
    })
  },
  tail: function(args, print) {
    fs.readFile(args[0], "utf8", function(err, data) {
      if (err) throw err;
      // print(data.split("\n").splice(-10).join("\n"));
      print(data.split("\n").splice(-args[1]).join("\n"));
    })
  },
  curl: function(args, print) {
    request(args[0], function(err, data) {
      if (err) throw err;
      print(data.body);
    })
  }
}