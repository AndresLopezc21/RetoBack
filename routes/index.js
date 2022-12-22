const express = require('express');


const indexController = require('../controllers/index');

const router = express.Router();

// GET /Obtener la información de breve de todas las tareas
router.get('/posts', indexController.getPostAll);

// GET /Obtener una descripción completa de la tarea a consultar
router.get('/posts/:id', indexController.getPost);

// POST /Registrar todos los datos de la tarea
router.post('/post', indexController.createPost);

// PUT /Permite editar una row seleccionada con su id
router.put('/update/:id', indexController.editRow);

// DELETE /Permite borrar una row seleccionada con su id
router.delete('/delete/:id', indexController.deleteRow);

module.exports = router;