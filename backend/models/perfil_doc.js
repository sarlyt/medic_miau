module.exports = (sequelize, type)=>{
    return sequelize.define('perfil_doc',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        id_usuario:type.INTEGER,
        nombre_completo:type.STRING,
        num_tel:type.INTEGER,
        curp:type.STRING,
        especialidad: type.STRING,
        cedula:type.INTEGER,
        dias_atencion: type.STRING,
        horarios: type.STRING,
    });
}