module.exports = (sequelize, type)=>{
    return sequelize.define('datos_historial',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        id_usuario:type.INTEGER,
        nombre_completo:type.STRING,
        edad:type.INTEGER,
        sexo:type.STRING,
        altura:type.DOUBLE,
        peso:type.DOUBLE,
        alergias:type.STRING,
        alcohol:type.STRING,
        tabaquismo:type.STRING,
        drogas:type.STRING,
        medicamentos:type.STRING,

    });
}

 



