const express = require('express');
const router = express.Router();
const consolaController=require('../controllers/console');

//Create,Read,Update,Delete (CRUD) - ABCC Altas,Bajas,Cambios,Consultas

//Servicio para mostrar el formulario
router.get('/altaConsola',consolaController.getAltaConsola);
//Servicio para proccesar los datos del formulario
router.post('/altaConsola',consolaController.postAltaConsola);
//servicio para consultar todos los datos
router.get('/consultaConsola',consolaController.getConsultaConsola)

//Tarea 2
router.get('/PyF',consolaController.getPyF);

router.post('/PyF',consolaController.postPyF);

/*
// F a normal
router.get('/Fnormal',consolaController.getFnormal);

router.post('/Fnormal',consolaController.postFnormal);
*/

module.exports = router