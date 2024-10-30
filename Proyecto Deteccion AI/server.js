let mysql = require("mysql");


mysql.createConnection = function (param) {
    return undefined;
};
let conexion = mysql.createConnection({
  host: "localhost",
  database: "qualitec",
  user: "root",
  password: ""
});

conexion.connect(function(err) {
  if(err) {
        throw err;
  }else{
      console.log("conexion exitosa");
       }
  });

