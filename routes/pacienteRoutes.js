const express = require("express");
const Paciente = require("../models/pacienteModel");
const router = express.Router();

// Obtener todos los pacientes
router.get("/pacientes", (req, res) => {
  Paciente.obtenerTodos((err, result) => {
    if (err) {
      console.error("Error al obtener pacientes:", err.message);
      return res.status(500).json({ mensaje: "Error al obtener pacientes" });
    }
    res.json(result[0]);
  });
});

// Insertar un paciente
router.post("/pacientes", (req, res) => {
  let { idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias } = req.body;
  Paciente.insertar(idPaciente, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, (err) => {
    if (err) {
      console.error("Error al insertar paciente:", err.message);
      return res.status(500).json({ mensaje: "Error al agregar paciente" });
    }
    res.json({ mensaje: "Paciente agregado correctamente" });
  });
});

// Actualizar un paciente
router.put("/pacientes/:id", (req, res) => {
  let { id } = req.params;
  let { nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias } = req.body;
  Paciente.actualizar(id, nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, telefono, email, direccion, tipoSangre, alergias, (err) => {
    if (err) {
      console.error("Error al actualizar paciente:", err.message);
      return res.status(500).json({ mensaje: "Error al actualizar paciente" });
    }
    res.json({ mensaje: "Paciente actualizado correctamente" });
  });
});

// Eliminar un paciente
router.delete("/pacientes/:id", (req, res) => {
  let { id } = req.params;
  Paciente.eliminar(id, (err) => {
    if (err) {
      console.error("Error al eliminar paciente:", err.message);
      return res.status(500).json({ mensaje: "Error al eliminar paciente" });
    }
    res.json({ mensaje: "Paciente eliminado correctamente" });
  });
});

module.exports = router;