const router = require("express").Router();
const middleware = require('./middleware');
const apiAlumnosRouter = require('./api/alumnos');
const paiMaestros = require('./api/maestros');
//, middleware

router.use('/alumno', apiAlumnosRouter);
router.use('/maestro', paiMaestros);

module.exports = router;