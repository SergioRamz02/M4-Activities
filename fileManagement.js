//Módulo File System (fs)

const { error } = require('console');
const fs = require('fs');

//Crear un archivo con texto al final
fs.appendFile(
    "miArchivo.txt", 
    "\nEste es mi primer archivo creado con node.js", 
    function (err){
    if(err) throw err;
    console.log("Guardado1!");
    }
);

//Crear un archivo vacío de escritura
fs.open(
    "miArchivo2.txt",
    "w",
    function(err){
        if(err) throw err;
    console.log("Guardado2!");
    }
);

//Sobreescribir sobre un archivo ya creado
fs.writeFile(
    "miArchivo.txt",
    "Hello Content",
    function(err){
        if(err) throw err;
    console.log("Guardado3!");
    }
);

fs.appendFile(
    "miArchivo.txt", 
    "\nEsta línea ha sido añadida", 
    function (err){
    if(err) throw err;
    console.log("Guardado4!");
    }
);

//Eliminar un archivo
fs.unlink(
    "miArchivo2.txt", 
    function (err){
    if(err) {throw err};
    console.log("Archivo borrado!");
    }
);

//Creación de JSON
const miJson ={
    dia: 10,
    mes: 4,
    year: 2025
};

const convertedJSON = JSON.stringify(miJson);
console.log(convertedJSON);

//Elimina el objeto que tiene al inicio para despues insertar el nuevo
fs.truncate("miJSONData.txt", 0, function(){console.log("done");});

fs.appendFile(
    "miJSONData.txt", 
    convertedJSON, 
    function (err){
    if(err) throw err;
    console.log("JSON Creado!");
    }
);

fs.readFile(
    "miJSONData.txt",
    function(err, data){
       if(err){throw err;}
       let jsonData = data.toString();
       console.log(JSON.parse(jsonData));
    }
);


