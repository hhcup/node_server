// import KoaRouter from 'koa-router';
const KoaRouter = require('koa-router');
const router = new KoaRouter();
const testModel = require("../../modules/test");
/**
 * 后台业务代码示例
 */
class DemoController {

    /**
     * 获取
     * @param {*} ctx
     */
    async getListDemo(ctx) {
        let id = ctx.params.id;
        try {
            let data = await testModel.getTestById(id);
            ctx.response.status = 200;
            ctx.body = {
                data,
                status: 200,
                msg: '查询成功'
            }
        } catch (error) {
            ctx.response.status = 412;
            ctx.body = {
                status: 412,
                msg: '查询失败'
            }
        }
    }

    /**
     * 添加
     * @param {*} ctx
     */
    async addDemo(ctx) {
        ctx.body = "xixi";
    }
}

const {
    getListDemo,
    addDemo
} = new DemoController();

/* eslint-disable */
const routers = [{
    url: `/getTestById/:id`,
    method: 'get',
    acc: getListDemo
},
{
    url: `/addDemo`,
    method: 'get',
    acc: addDemo
}
];
/* eslint-enable */

//挂载路由
routers.forEach(item => {
    router[item.method](item.url, item.acc);
});

module.exports = router;