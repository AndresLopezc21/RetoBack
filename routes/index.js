const express = require('express');


const indexController = require('../controllers/index');

const router = express.Router();

// GET /Obtener la información de breve de todas las tareas de un solo responsable
router.get('/getByResponsable/:responsibleOf', indexController.getByResponsable);

// GET /Obtener una descripción completa de la tarea a consultar
router.get('/getById/:id', indexController.getById);

// POST /Registrar todos los datos de la tarea
router.post('/createNewTask', indexController.createPost);

// PUT /Permite editar una row seleccionada con su id
router.put('/updateTask/:id', indexController.editRow);

// DELETE /Permite borrar una row seleccionada con su id
router.delete('/deleteTask/:id', indexController.deleteRow);

module.exports = router;