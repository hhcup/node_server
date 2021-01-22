module.exports = function(sequelize,DataTypes){
    return sequelize.define('test',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        //学生姓名
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        //年龄
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'age'
        },
        //性别
        gender:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field:'gender'
        },
        // 创建时间
        createdAt:{
            type: DataTypes.DATE
        },
        // 修改时间
        updatedAt:{
            type: DataTypes.DATE
        }
    },{
        /**
         * 如果为true，则表示名称和model相同，即user
         * 如果为fasle，mysql创建的表名称会是复数，即users
         * 如果指定的表名称本身就是复数，则形式不变
         */
        freezeTableName: true
    });
}