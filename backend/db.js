const Sequelize = require('sequelize');
const AlumnoModel = require('./models/alumnos');
const UsuarioModel = require('./models/usuario');
const HistorialModel = require('./models/datos_historial');

//inicia el conection
const sequelize = new Sequelize('medic_miau', 'root', '', {
    host:'localhost' ,
    dialect:'mysql'
});


//Se crean los modelos

const Alumno = AlumnoModel(sequelize, Sequelize);

//Nuevos modelos para medicos
const Usuario = UsuarioModel(sequelize, Sequelize);
const Historial = HistorialModel(sequelize, Sequelize);


sequelize.sync({force:false}).then(()=>{
    console.log("Tablas Creadas");
});

//Se exportan los modelos
module.exports={
    Historial,
    Usuario,
    Alumno

}
