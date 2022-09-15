//importar las bibliotecas
const express = require('express'); // buscar la carpeta express en la carpeta node_modules
const app = express(); //lo pone en la aplicación

const path = require('path');
const consolaRoutes = require('./routes/console');
//const consolaRoutes2 = require('./routes/consola2');

//middleware
app.use(express.json())//Para recibir datos de tipo json
app.use(express.urlencoded({extended:true}))//Mandar json
app.use(express.static(path.join(__dirname,'public')))  //ayuda a especificar middlewares (img)
app.use('/consola', consolaRoutes);
//app.use('/consola', consolaRoutes2);

//Definición de nuestra aplicación WEB
app.get('/gabu',(request,response)=>{ //ruta que se llama gabu
    //Definir el comportamiento
    console.log('Hola mundo');//responde en la terminal
    response.send('<h1>Hola mundo soy servidor gabu</h1>');//responde directamente en la página web
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html')); //jala la ruta del sistema de la aplicación
    //
});

app.get('/formulario', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','formulario.html')); //jala la ruta del sistema de la aplicación
    //
});

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','pagina1.html'))
});

//Prueba de query
app.get('/prueba1',(req,res)=>{
    console.log(req.query);
    
    res.send("Datos enviados por query " +req.query.name + " " +req.query.age);
});

//Prueba de params
app.get('/prueba2/:name/:age',(req,res)=>{
    console.log(req.params);
    res.send("Datos enviados por params " + req.params.name + " " + req.params.age);
})

app.get('/A01748151',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','mi.html'))
});

//body
app.post('/prueba3',(req,res)=>{
    console.log(req.body);
    res.send("Datos recibidos_post");
})

//Lanzar la aplicación
app.listen (8080,()=>{
    console.log("Servidor en línea");
}); //Puerto en el que se estan escuchando petiiones constantemente (sin for)

