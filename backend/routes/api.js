const router = require("express").Router();
const apiUsuarios = require('./api/usuarios');
const apiPerfilDoc = require('./api/perfilDoc');
const apiHistorial = require('./api/history');
const apiConsulta = require('./api/consultas');

router.use('/usuario', apiUsuarios);
router.use('/perfil_Doc', apiPerfilDoc);
router.use('/miHistorial', apiHistorial);
router.use('/consulta', apiConsulta);

router.get('/', async (req, res)=>{
    res.send('API');
});

module.exports = router;
