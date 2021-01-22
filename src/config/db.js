const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','123456',{
    host:'localhost',
    dialect:'mysql',
    define: {
        timestamps: true//默认开启创建时间戳
    },
    operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool:{
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
});
 
module.exports = {
    sequelize
};