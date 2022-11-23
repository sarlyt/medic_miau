module.exports = (sequelize, type)=>{
    return sequelize.define('dactar',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nombre:type.STRING,
        apellidos:type.STRING,
        curp:type.STRING,
        correo:type.STRING,
        password:type.STRING,
    });
}