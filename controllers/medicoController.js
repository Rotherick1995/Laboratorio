const Medico = require('../models/medicoModel');

const insertarMedico = (req, res) => {
  console.log("📩 Datos recibidos en la solicitud:", req.body); // 🔍 Ver los datos recibidos

  const { nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono } = req.body;

  // Verificar qué campo falta específicamente
  let camposFaltantes = [];
  if (!nombre) camposFaltantes.push("nombre");
  if (!apellidoPaterno) camposFaltantes.push("apellidoPaterno");
  if (!apellidoMaterno) camposFaltantes.push("apellidoMaterno");
  if (!especialidad) camposFaltantes.push("especialidad");
  if (!telefono) camposFaltantes.push("telefono");

  if (camposFaltantes.length > 0) {
    console.warn("⚠️ Faltan los siguientes campos:", camposFaltantes.join(", "));
    return res.status(400).json({
      mensaje: "Todos los campos son obligatorios.",
      camposFaltantes: camposFaltantes // Enviar qué campos faltan
    });
  }

  // Obtener el máximo idMedico para generar el siguiente id
  Medico.obtenerMaxIdMedico((err, results) => {
    if (err) {
      console.error("❌ Error al obtener el máximo idMedico:", err.message);
      return res.status(500).json({ mensaje: "Error al obtener el máximo idMedico" });
    }

    const maxId = results[0].maxId;
    const idMedico = maxId ? maxId + 1 : 1;
    console.log("🔢 Nuevo ID generado:", idMedico);

    // Insertar el médico con el nuevo id
    Medico.insertar(idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, (err, result) => {
      if (err) {
        console.error("❌ Error al insertar médico:", err.message);
        return res.status(500).json({ mensaje: "Error al insertar médico" });
      }
      res.json({ mensaje: "✅ Médico insertado correctamente", result });
    });
  });
};



const obtenerMedicos = (req, res) => {
  Medico.obtenerTodos((err, result) => {
    if (err) {
      console.error("Error al obtener médicos:", err.message);
      return res.status(500).json({ mensaje: "Error al obtener médicos" });
    }
    res.json(result);
  });
};

const actualizarMedico = (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono } = req.body;
  const { idMedico } = req.params; // Extraemos el idMedico de los parámetros de la URL

  // Verificamos si los campos necesarios están presentes
  if (!nombre || !apellidoPaterno || !apellidoMaterno || !especialidad) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
  }

  // Llamamos a la función de actualizar y le pasamos el idMedico de la URL
  Medico.actualizar(idMedico, nombre, apellidoPaterno, apellidoMaterno, especialidad, telefono, (err, result) => {
    if (err) {
      console.error("Error al actualizar médico:", err.message);
      return res.status(500).json({ mensaje: "Error al actualizar médico" });
    }
    res.json({ mensaje: "Médico actualizado correctamente", result });
  });
};

const eliminarMedico = (req, res) => {
  const { idMedico } = req.params;

  if (!idMedico) {
    return res.status(400).json({ mensaje: "El ID del médico es obligatorio." });
  }

  Medico.eliminar(idMedico, (err, result) => {
    if (err) {
      console.error("Error al eliminar médico:", err.message);
      return res.status(500).json({ mensaje: "Error al eliminar médico" });
    }
    res.json({ mensaje: "Médico eliminado correctamente", result });
  });
};

module.exports = {
  insertarMedico,
  obtenerMedicos,
  actualizarMedico,
  eliminarMedico
};
