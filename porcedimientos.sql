use laboratorio2;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarAreaLaboratorio`(
    IN p_idarea INT,
    IN p_nombre VARCHAR(50),
    IN p_descripcion VARCHAR(100)
)
BEGIN
    UPDATE tarealaboratorio
    SET nombre = p_nombre, descripcion = p_descripcion
    WHERE idarea = p_idarea;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarDetalleSolicitud`(
    IN p_iddetallesol INT,
    IN p_idsolicitud INT,
    IN p_idprueba INT
)
BEGIN
    UPDATE tdetallesolicitud
    SET idsolicitud = p_idsolicitud, idprueba = p_idprueba
    WHERE iddetallesol = p_iddetallesol;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarMedico`(
    IN pidMedico INT,
    IN pnombre VARCHAR(50),
    IN papellidoPaterno VARCHAR(50),
    IN papellidoMaterno VARCHAR(50),
    IN pespecialidad VARCHAR(30),
    IN ptelefono VARCHAR(15)
)
BEGIN
    UPDATE tmedicos
    SET 
        nombre = pnombre,
        apellidopaterno = papellidoPaterno,
        apellidomaterno = papellidoMaterno,
        especialidad = pespecialidad,
        telefono = ptelefono
    WHERE idmedicos = pidMedico;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarPaciente`(
    IN pIdPaciente INT,
    IN pNombre VARCHAR(50),
    IN pApellidoPaterno VARCHAR(50),
    IN pApellidoMaterno VARCHAR(50),
    IN pFechaNacimiento DATE,
    IN pTelefono VARCHAR(15),
    IN pEmail VARCHAR(50),
    IN pDireccion VARCHAR(100),
    IN pTipoSangre VARCHAR(5),
    IN pAlergias VARCHAR(255)
)
BEGIN
    UPDATE tpacientes
    SET nombre = pNombre,
        apellidopaterno = pApellidoPaterno,
        apellidomaterno = pApellidoMaterno,
        fechanacimiento = pFechaNacimiento,
        telefono = pTelefono,
        email = pEmail,
        direccion = pDireccion,
        tiposangre = pTipoSangre,
        alergias = pAlergias
    WHERE idpacientes = pIdPaciente;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarPrueba`(
    IN p_idprueba INT,
    IN p_nombre VARCHAR(50),
    IN p_descripcion VARCHAR(100),
    IN p_valorreferencia DOUBLE,
    IN p_idarea INT
)
BEGIN
    UPDATE tprueba
    SET nombre = p_nombre, descripcion = p_descripcion, valorreferencia = p_valorreferencia, idarea = p_idarea
    WHERE idprueba = p_idprueba;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarReporte`(
    IN p_idreporte INT, 
    IN p_fechainicio DATE, 
    IN p_fechaentrega DATE, 
    IN p_prioridad VARCHAR(20), 
    IN p_observaciones VARCHAR(100), 
    IN p_estado VARCHAR(20),
    IN p_idsolicitud INT
)
BEGIN
    UPDATE treporte 
    SET fechainicio = p_fechainicio, 
        fechaentrega = p_fechaentrega, 
        prioridad = p_prioridad, 
        observaciones = p_observaciones, 
        estado = p_estado, 
        idsolicitud = p_idsolicitud
    WHERE idreporte = p_idreporte;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarResultado`(
  IN idresultado INT,
  IN iddetallesol INT,
  IN resultado DOUBLE,
  IN unidad VARCHAR(20)
)
BEGIN
  UPDATE tresultados
  SET iddetallesol = iddetallesol, resultado = resultado, unidad = unidad
  WHERE idresultado = idresultado;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ActualizarSolicitud`(
    IN p_idSolicitud INT, 
    IN p_fechaSolicitud DATETIME, 
    IN p_idPacientes INT, 
    IN p_idMedicos INT
)
BEGIN
    UPDATE tsolicitud 
    SET fechasolicitud = p_fechaSolicitud, 
        idpacientes = p_idPacientes, 
        idmedicos = p_idMedicos
    WHERE idsolicitud = p_idSolicitud;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarAreaLaboratorio`(
    IN p_idarea INT
)
BEGIN
    DELETE FROM tarealaboratorio WHERE idarea = p_idarea;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarDetalleSolicitud`(
    IN p_iddetallesol INT
)
BEGIN
    DELETE FROM tdetallesolicitud WHERE iddetallesol = p_iddetallesol;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarMedico`(
    IN pidMedico INT
)
BEGIN
    DELETE FROM tmedicos WHERE idmedicos = pidMedico;
END$$
CREATE DEFINER=`Rotherick`@`localhost` PROCEDURE `eliminarPaciente`(
    IN pIdPaciente INT
)
BEGIN
    DELETE FROM tpacientes WHERE idpacientes = pIdPaciente;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarPrueba`(
    IN p_idprueba INT
)
BEGIN
    DELETE FROM tprueba WHERE idprueba = p_idprueba;
END $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarReporte`(
    IN p_idreporte INT
)
BEGIN
    DELETE FROM treporte WHERE idreporte = p_idreporte;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarResultado`(
  IN idresultado INT
)
BEGIN
  DELETE FROM tresultados WHERE idresultado = idresultado;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `EliminarSolicitud`(
    IN p_idSolicitud INT
)
BEGIN
    DELETE FROM tsolicitud WHERE idsolicitud = p_idSolicitud;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarAreaLaboratorio`(
    IN p_nombre VARCHAR(50),
    IN p_descripcion VARCHAR(100),
    IN p_idarea INT
)
BEGIN
    INSERT INTO tarealaboratorio (nombre, descripcion, idarea)
    VALUES (p_nombre, p_descripcion, p_idarea);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarDetalleSolicitud`(
    IN p_iddetallesol INT,
    IN p_idsolicitud INT,
    IN p_idprueba INT
)
BEGIN
    INSERT INTO tdetallesolicitud (iddetallesol, idsolicitud, idprueba)
    VALUES (p_iddetallesol, p_idsolicitud, p_idprueba);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarMedico`(
    IN pidMedico INT,
    IN pnombre VARCHAR(50),
    IN papellidoPaterno VARCHAR(50),
    IN papellidoMaterno VARCHAR(50),
    IN pespecialidad VARCHAR(30),
    IN ptelefono VARCHAR(15)
)
BEGIN
    INSERT INTO tmedicos (idmedicos, nombre, apellidopaterno, apellidomaterno, especialidad, telefono)
    VALUES (pidMedico, pnombre, papellidoPaterno, papellidoMaterno, pespecialidad, ptelefono);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarPaciente`(
    IN pNombre VARCHAR(50),
    IN pApellidoPaterno VARCHAR(50),
    IN pApellidoMaterno VARCHAR(50),
    IN pFechaNacimiento DATE,
    IN pTelefono VARCHAR(15),
    IN pEmail VARCHAR(50),
    IN pDireccion VARCHAR(100),
    IN pTipoSangre VARCHAR(5),
    IN pAlergias VARCHAR(255)
)
BEGIN
    DECLARE nuevoId INT;

    -- 1️⃣ Buscar el menor ID faltante
    SET nuevoId = (SELECT MIN(t1.idpacientes + 1) 
                   FROM tpacientes AS t1 
                   LEFT JOIN tpacientes AS t2 
                   ON t1.idpacientes + 1 = t2.idpacientes 
                   WHERE t2.idpacientes IS NULL);

    -- 2️⃣ Si no hay huecos, usar el siguiente `AUTO_INCREMENT`
    IF nuevoId IS NULL THEN
        SET nuevoId = (SELECT IFNULL(MAX(idpacientes) + 1, 1) FROM tpacientes);
    END IF;

    -- 3️⃣ Insertar el paciente con el ID correcto
    INSERT INTO tpacientes (idpacientes, nombre, apellidopaterno, apellidomaterno, fechanacimiento, telefono, email, direccion, tiposangre, alergias)
    VALUES (nuevoId, pNombre, pApellidoPaterno, pApellidoMaterno, pFechaNacimiento, pTelefono, pEmail, pDireccion, pTipoSangre, pAlergias);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarPrueba`(
    IN p_idprueba INT,
    IN p_nombre VARCHAR(50),
    IN p_descripcion VARCHAR(100),
    IN p_valorreferencia DOUBLE,
    IN p_idarea INT
)
BEGIN
    INSERT INTO tprueba (idprueba, nombre, descripcion, valorreferencia, idarea)
    VALUES (p_idprueba, p_nombre, p_descripcion, p_valorreferencia, p_idarea);
END$$
CREATE DEFINER=`Rotherick`@`localhost` PROCEDURE `InsertarReporte`(
    IN p_fechainicio DATE, 
    IN p_fechaentrega DATE, 
    IN p_prioridad VARCHAR(20), 
    IN p_observaciones VARCHAR(100), 
    IN p_estado VARCHAR(20),
    IN p_idsolicitud INT,
    IN p_idreporte INT
)
BEGIN
    INSERT INTO treporte (idreporte, fechainicio, fechaentrega, prioridad, observaciones, estado, idsolicitud) 
    VALUES (p_idreporte, p_fechainicio, p_fechaentrega, p_prioridad, p_observaciones, p_estado, p_idsolicitud);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarResultado`(
  IN idresultado INT,
  IN iddetallesol INT,
  IN resultado DOUBLE,
  IN unidad VARCHAR(20)
)
BEGIN
  INSERT INTO tresultados (idresultado, iddetallesol, resultado, unidad)
  VALUES (idresultado, iddetallesol, resultado, unidad);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertarSolicitud`(
    IN p_idSolicitud INT,  -- Incluir el parámetro para el idsolicitud
    IN p_fechaSolicitud DATETIME, 
    IN p_idPacientes INT, 
    IN p_idMedicos INT
)
BEGIN
    INSERT INTO tsolicitud (idsolicitud, fechasolicitud, idpacientes, idmedicos) 
    VALUES (p_idSolicitud, p_fechaSolicitud, p_idPacientes, p_idMedicos);
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerAreasLaboratorio`()
BEGIN
    SELECT * FROM tarealaboratorio;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerDetallesSolicitud`()
BEGIN
    SELECT * FROM tdetallesolicitud;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerMedicos`()
BEGIN
    SELECT * FROM tmedicos;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerPacientes`()
BEGIN
    SELECT * FROM tpacientes;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerPruebas`()
BEGIN
    SELECT * FROM tprueba;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerReportes`()
BEGIN
    SELECT r.idreporte, r.fechainicio, r.fechaentrega, r.prioridad, r.observaciones, r.estado, r.idsolicitud,
           CONCAT(p.nombre, ' ', p.apellidoPaterno, ' ', p.apellidoMaterno) AS nombre_paciente,
           CONCAT(m.nombre, ' ', m.apellidoPaterno, ' ', m.apellidoMaterno) AS nombre_medico
    FROM treporte r
    INNER JOIN tsolicitud s ON r.idsolicitud = s.idsolicitud
    INNER JOIN tpacientes p ON s.idpacientes = p.idpacientes
    INNER JOIN tmedicos m ON s.idmedicos = m.idmedicos;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerResultados`()
BEGIN
  SELECT * FROM tresultados;
END$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerSolicitudes`()
BEGIN
    SELECT s.idsolicitud, s.fechasolicitud, 
           p.idpacientes, 
           CONCAT(p.nombre, ' ', p.apellidoPaterno, ' ', p.apellidoMaterno) AS nombre_paciente,
           m.idmedicos, 
           CONCAT(m.nombre, ' ', m.apellidoPaterno, ' ', m.apellidoMaterno) AS nombre_medico, 
           m.especialidad
    FROM tsolicitud s
    INNER JOIN tpacientes p ON s.idpacientes = p.idpacientes
    INNER JOIN tmedicos m ON s.idmedicos = m.idmedicos;
END$$
DELIMITER ;