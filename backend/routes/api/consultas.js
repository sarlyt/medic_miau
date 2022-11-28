const router = require("express").Router();
const {Consulta} = require('../../db');


router.get('/:id', async(req, res)=>{
    const consulta = await Consulta.findOne({
        where:{ id: req.params.id}
    });
    res.json(consulta);
});


router.get('/', async (req, res)=>{
    
    res.send('Consultas');
});

router.get('/get-all', async (req, res)=>{
    const consulta = await Consulta.findAll();
    res.json(consulta);
});




router.post('/', async(req, res,)=>{
    console.log(req.body);
    try {
        const consulta = await Consulta.create(req.body);
        res.json(consulta);
        
    } catch (error) {
        console.log(error);
        res.send("Esta mal weon");
    }
});


router.put('/:id', async(req, res)=>{
    await Consulta.update(req.body, {
        where:{ id: req.params.id}
    });

    res.send('Registro Actualizado');
});


router.get('/:id', async(req, res)=>{
    const consulta = await Consulta.findOne({  where:{ id: req.params.id} });
    if (consulta === null) {
        console.log('Not found!');
        return res.status(404).json({msg: 'consulta No encontrado' })
    }
    res.json(consulta);
});


router.delete('/:id', async(req, res)=>{
    await Consulta.destroy({
        where:{ id: req.params.id}
    });

    res.send("Registro eliminado");
});

module.exports=router;

