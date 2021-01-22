//主路由文件
const KoaRouter = require('koa-router');
const controllers = require('../controllers/index');
const DemoController = require("../controllers/demos/DemoController")

//所有的API接口都以apiv1开头
const router = new KoaRouter({ prefix: '/api' });
const {
    demos
} = controllers;
const routers = [{
    url: `/test`,
    routes: demos.DemoController
}
];

//挂载路由
routers.forEach(item => {
    router.use(item.url, item.routes.routes(), item.routes.allowedMethods());
});
module.exports = router;