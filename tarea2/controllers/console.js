const path = require("path");

//Proceso cuando se llame a la ruta
exports.getAltaConsola = (req,res)=>{
    //res.send('<h1>Formulario de consola</h1>')
    res.sendFile(path.join(__dirname,'..','views','formulario.html')); //jala la ruta del sistema de la aplicación
}

exports.postAltaConsola = (req,res)=>{
    //const cadena = req.body;
    console.log(req.body);    
    res.json({estado:"Recibido"})
}

exports.getConsultaConsola = (req,res)=>{
    res.send('<h1>Datos de las consolas</h1>')
}

exports.getPyF = (req,res) => {
    res.sendfile(path.join(__dirname, '..', 'views', 'formulario2.html'))
}

exports.postPyF = (req,res) => {
    //console.log(req.body['palabra']);
    //res.json({estado:"Recibido"})
    //fn2(req.body['F']);
    //console.log(req.body['F']);
    res.json({verificar: palindro(req.body['palabra']), normal: fn2(req.body['F'])})
    //res.json(palindro(req.body['palabra']))


}

function palindro(input){
    const size = input.length;
    var check = input;
    check = check.replaceAll(" ","");
    console.log("original: ", check);
    //console.log(size);
    //console.log(input[2]);
    let i = 0;
    var pal = "";

    for (i = size-1; i >= 0; i--){
        pal = pal + input[i];
    }
    pal = pal.replaceAll(" ","");
    console.log("BW: ",pal);

    if(check == pal){
        return true;
    }else{
        return false;
    }

} 

function fn2(input){
    var check = input;  
    //console.log(check);
    check = check.replaceAll("afa","a");
    check = check.replaceAll("efe","e");
    check = check.replaceAll("ifi","i");
    check = check.replaceAll("ofo","o");
    check = check.replaceAll("ufu","u");
    //console.log(check);
    return check;
}



