module.exports = (sequelize, type)=>{
    return sequelize.define('pacientes',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre:type.STRING,
        apellidos:type.STRING,
        curp:type.STRING,
    });
}