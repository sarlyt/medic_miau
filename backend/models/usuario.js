module.exports = (sequelize, type)=>{
    return sequelize.define('usuarios',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        userName:type.STRING,
        password:type.STRING,
        tipo:type.STRING,
    });
}