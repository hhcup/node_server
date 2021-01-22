# nodejs API接口服务器

```
|-- 项目根目录
    |-- package.json
    |-- bin
    |   |-- www
    |-- public
    |   |-- images
    |   |-- javascripts
    |   |-- stylesheets
    |       |-- style.css
    |-- src                 主要文件目录    
        |-- app.js              项目入口
        |-- config              配置文件夹
        |   |-- config.js           项目配置文件
        |   |-- db.js               数据库配置文件
        |-- controllers         controllers层   
        |   |-- index.js
        |   |-- demos
        |       |-- DemoController.js
        |-- modules             数据模型
        |   |-- test.js
        |-- routers             路由文件
        |   |-- Demos.js
        |   |-- error-router.js
        |-- schema              建立与数据表的映射关系
        |   |-- test.js
        |-- utils
            |-- init.js     封装启动函数
```