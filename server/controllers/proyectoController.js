const Proyecto = require("../models/Proyecto");

exports.crearProyecto = async (req, res) => {
  try {
    const proyecto = new Proyecto(req.body);

    //guardar el creador via jwt
    proyecto.creador = req.usuario.id;
    //guardamos el proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error");
  }
};
