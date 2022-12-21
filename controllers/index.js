const db = require('../util/dbConnection');

// GET /Muestra información breve de todas las tareas

exports.getPostAll = async (req, res, next) => {
  await db.execute('SELECT id, titulo, status, fecha, responsable FROM tareas;')
    .then((res2) => {
      res.status(200).json(res2[0]);
    })
    .catch((e) => {
      res.status(404).json(e);
    });
}

// GET /Muestra información completa sobre una tarea a consultar por su id

exports.getPost = async (req, res, next) => {
  await db.execute(`SELECT * FROM tareas WHERE id = ${req.params.id};`)
    .then((res2) => {
      res.status(200).json(res2[0]);
    })
    .catch((e) => {
      res.status(404).json(e);
    });

}

// POST / Da de alta las tareas en la tabla dentro de la db 

exports.createPost = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;
  const date = req.body.date;
  const comments = req.body.comments;
  const responsibleOf = req.body.responsibleOf;
  const tags = req.body.tags;

  post: { title, description, status, date, comments, responsibleOf, tags }

  await db.execute(`INSERT INTO tareas (titulo, descripcion, status, fecha, comentarios, responsable, tags)
                    VALUES ('${title}', '${description}', '${status}',
                            '${date}', '${comments}', '${responsibleOf}', '${tags}');`)
    .then((res2) => {
      res.status(200).json({
        message: 'La tarea se ha subido correctamente'
      });
    })
    .catch((e) => {
      res.status(404).json(e);
    });
}

// PUT / Permite editar a la tarea a seleccionar dando el id, solo no permite editar el responsable de la tarea

exports.editRow = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;
  const date = req.body.date;
  const comments = req.body.comments;
  const tags = req.body.tags;

  post: { title, description, status, date, comments, tags }
  await db.execute(`UPDATE tareas SET titulo = + titulo + '' + '${title}', descripcion = '${description}', status = '${status}',
                                      fecha = '${date}', comentarios = '${comments}', tags = '${tags}' 
                                  WHERE (id = ${req.params.id});`)
    .then((res2) => {
      res.status(200).json({
        message: 'Se modifico la tarea seleccionada correctamente'
      });
    })
    .catch((e) => {
      res.status(404).json(e);
    });
}

// DELETE / Da de alta las tareas en la tabla dentro de la db 

exports.deleteRow = async (req, res, next) => {
  await db.execute(`DELETE FROM tareas WHERE id =${req.params.id};`)
    .then((res2) => {
      res.status(200).json({
        message: 'Se elimino la tarea con el id seleccionado correctamente'
      });
    })
    .catch((e) => {
      res.status(404).json(e);
    });

}



