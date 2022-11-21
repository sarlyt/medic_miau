const router = require("express").Router();
const {Alumno} = require('../../db');
const {check, validationResult} = require('express-validator');


router.get('/get-all', async (req, res)=>{
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
});

router.post('/', [
    check('nombre', 'El nombre del alumno es obligatorio').not().isEmpty()
], async(req, res,)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty() ){
        return res.status(422).json({errores: errors.array()})
    }


    const alumno = await Alumno.create(req.body);
    res.json(alumno);
});

router.put('/:id', async(req, res)=>{
    await Alumno.update(req.body, {
        where:{ id: req.params.id}
    });

    res.send('Registro Actualizado');
});
router.get('/:id', async(req, res)=>{

    res.send("nice nice nice nice");
});

router.delete('/:id', async(req, res)=>{
    await Alumno.destroy({
        where:{ id: req.params.id}
    });

    res.send("Registro eliminado");
});



module.exports=router;