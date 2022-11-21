const Sequelize = require('sequelize');
const AlumnoModel = require('./models/alumnos');
const MaestroModel = require('./models/maestros_administrativos');

//inicia el conection
const sequelize = new Sequelize('escuelas_admin', 'root', '', {
    host:'localhost' ,
    dialect:'mysql'
});


//Se crean los modelos
const Maestro = MaestroModel(sequelize, Sequelize);
const Alumno = AlumnoModel(sequelize, Sequelize);



sequelize.sync({force:false}).then(()=>{
    console.log("Tablas Sincronizadas");
});

//Se exportan los modelos
module.exports={
    Alumno,
    Maestro
}
