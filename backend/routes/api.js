const router = require("express").Router();
const middleware = require('./middleware');
const apiAlumnosRouter = require('./api/alumnos');
const paiMaestros = require('./api/maestros');
const apiUsuarios = require('./api/usuarios');
//, middleware

router.use('/alumno', apiAlumnosRouter);
router.use('/maestro', paiMaestros);
router.use('/usuario', apiUsuarios);

router.get('/', async (req, res)=>{
    res.send('API');
});

module.exports = router;
