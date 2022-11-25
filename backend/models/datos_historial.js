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
        tipo_sangre: type.STRING,
        d_alergias:type.STRING,
        d_alcohol:type.STRING,
        d_tabaquismo:type.STRING,
        d_drogas:type.STRING,
        d_medicamentos:type.STRING,
        comorbis: type.STRING
    });
}