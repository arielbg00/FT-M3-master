// var primerMetodo = function() {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el primer método');
//          resolve({num: '123'}); //pasamos unos datos para ver como los manejamos
//       }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
//    });
//    // console.log(promise);
//    return promise;
// };

// // console.log(primerMetodo);
 
// /*  uno.then(function(data) {
//    return segundoMetodo(data);
//  }).then(function(data) {
//    return tercerMetodo(data);
//  }).then(function(data) {
//    console.log(data);
//  }) */


// var segundoMetodo = function(datos) {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el segundo método');
//          resolve({nuevosDatos: datos.num + ' concatenamos texto y lo pasamos'});
//       }, 2000);
//    });
//    return promise;
// };
 
// var tercerMetodo = function(datos) {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el tercer método');
//          console.log(datos.nuevosDatos); //imprimos los datos concatenados
//          resolve('hola');
//       }, 3000);
//    });
//    return promise;
// };
 
// primerMetodo()
//    .then(segundoMetodo)
//    .then(tercerMetodo)
//    .then(function(datos){
//       console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
//    });

// --------------------------------------------------------------------------------

// var primerMetodo = function() {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el primer método');
//          reject({num: '123'});
//       }, 2000);
//    });
//    console.log(promise); // Promise { <pending> }
//    return promise;
// };

// console.log(primerMetodo); // [Function: primerMetodo]

// var segundoMetodo = function(datos) {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el segundo método');
//          resolve({nuevosDatos: datos.num + ' concatenamos texto y lo pasamos'});
//       }, 2000);
//    });
//    return promise;
// };
 
// var tercerMetodo = function(datos) {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el tercer método');
//          // console.log(datos.nuevosDatos); //imprimos los datos concatenados
//          resolve('hola');
//       }, 3000);
//    });
//    return promise;
// };
 
// var p = primerMetodo() // {rejected, num: "123"}
//    .then(data => segundoMetodo(data)) // .then(successH, null)
//    .then(data => tercerMetodo(data))
//    // .then(function(data) { return tercerMetodo(data); })
//    .then(function(datos){
//       console.log(datos);
//       return datos;
//    })
//    // .catch(err => console.log("error", err)); // error { num: "123" }
//    .then(null, err => console.log("erroor", err)); // erroor { num: "123" }

// p.then(data => console.log("p ", data)); // p undefined

// /*    .then(null, err => err);

// p.then(data => console.log("p ", data)); // p { num: "123" } */
// // data se resolve al valor que retorno handle = err

// // promiseA = rejected, reason: {num: 123}
// // promiseB = promiseA.then() ==> rejected, reason: {num: 123}
// // promiseC = promiseB.then() ==> rejected, reason: {num: 123}
// // promiseD = promiseC.then() ==> rejected, reason: {num: 123}
// // promiseE = promiseD.then(null, err => console.log("error", err))
// // promiseF = p ==> resolve | return console.log("error", err) | ==> resolve undefined

// /* console.log(datos); ==>
// function console.log(datos) {
//    process.stdout.write(datos);
//    return;
// } */

// --------------------------------------------------------------------------------

// var primerMetodo = function() {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el primer método');
//          resolve({num: '123'});
//       }, 2000);
//    });
//    console.log(promise); // Promise { <pending> }
//    return promise;
// };

// console.log(primerMetodo); // [Function: primerMetodo]

// var segundoMetodo = function(datos) {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el segundo método');
//          resolve({nuevosDatos: datos.num + ' concatenamos texto y lo pasamos'});
//       }, 2000);
//    });
//    return promise;
// };
 
// var tercerMetodo = function(datos) {
//    var promise = new Promise(function(resolve, reject){
//       setTimeout(function() {
//          console.log('Terminó el tercer método');
//          console.log(datos.nuevosDatos); //imprimos los datos concatenados
//          resolve('hola');
//       }, 3000);
//    });
//    return promise;
// };
 
// var p = primerMetodo()
//    .then(data => segundoMetodo(data)) // .then(successH, null)
//    .then(data => tercerMetodo(data))
//    // .then(function(data) { return tercerMetodo(data); })
//    .then(function(datos){
//       console.log(datos); // hola
//       return datos;
//    })
//    // .catch(err => err);
//    .then(null, err => err); 

// p.then(data => console.log("p ", data)); // p hola

// // promiseA => resolve, { num: "123" }
// // promiseB = promiseA.then( {num: "123"} => segundoMetodo({num: "123"}) ) ==> resolve, {nuevosDatos: datos.num + ' concatenamos texto y lo pasamos'}
// // promiseC = promiseB.then( {} => tercerMetodo({}) ) ==> resolve, "hola"
// // promiseD = promiseC.then("hola" => console.log("p ", "hola")) ==> resolve, 

// --------------------------------------------------------------------------------

var primerMetodo = function() {
   var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log("Terminó el primer método");
         resolve({num: "123"});
      }, 2000);
   });
   console.log(promise);
   return promise;
};

console.log(primerMetodo);

var segundoMetodo = function(datos) {
   var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log("Terminó el segundo método");
         resolve({nuevosDatos: "concatenamos texto y lo pasamos"});
      }, 2000);
   });
   return promise;
};

var tercerMetodo = function(datos) {
   var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
         console.log("Terminó el tercer método");
         resolve("chau");
      }, 3000);
   });
   return promise;
};

//               1 dia           1 hora            1 s
Promise.all([primerMetodo(), segundoMetodo(), tercerMetodo()])
.then(resultado => console.log("resultado: ", resultado))
.catch(err => console.log("err: ", err));

// resultado = [
//    {num: "123"},
//    {nuevosDatos: "concatenamos texto y lo pasamos"},
//    "chau"
// ]