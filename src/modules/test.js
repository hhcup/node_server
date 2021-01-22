const db = require('../config/db')
const { DataTypes } = require('sequelize');
const Sequelize = db.sequelize;
// 引入数据表模型
const test = require('../schema/test')(Sequelize, DataTypes);
// test.sync({force: false}); //自动创建表
class testModel {
    /**
     * 查询学生信息的详情
     * @param id 学生信息ID
     * @returns {Promise<Model>}
     */
    static async getTestById(id){
        return await test.findOne({
            where:{
                id
            }
        });
    }
}
 
module.exports = testModel;