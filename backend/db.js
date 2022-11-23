const Sequelize = require('sequelize');
const AlumnoModel = require('./models/alumnos');
const UsuarioModel = require('./models/usuario');
const MaestroModel = require('./models/maestros_administrativos');

//inicia el conection
const sequelize = new Sequelize('medic_miau', 'root', '', {
    host:'localhost' ,
    dialect:'mysql'
});


//Se crean los modelos
const Maestro = MaestroModel(sequelize, Sequelize);
const Alumno = AlumnoModel(sequelize, Sequelize);

//Nuevos modelos para medicos
const Usuario = UsuarioModel(sequelize, Sequelize);


sequelize.sync({force:false}).then(()=>{
    console.log("Tablas Sincronizadas");
});

//Se exportan los modelos
module.exports={
    Usuario,
    Alumno,
    Maestro
}
