
const requireDirectory = require('require-directory');
const Router = require('koa-router');
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const errorRouter = require('../routers/error-router')

class InitManager {
    static initCore(app) {
        //把app.js中的koa实例传进来
        InitManager.app = app;
        // InitManager.app.use(errorRouter);
        InitManager.initLoadRouters();

        onerror(app)
        // middlewares
        app.use(bodyparser({
            enableTypes:['json', 'form', 'text']
        }))
        app.use(json())
        app.use(logger())
        app.use(require('koa-static')(__dirname + '/public'))

        // logger
        app.use(async (ctx, next) => {
            const start = new Date()
            await next()
            const ms = new Date() - start
            console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
        })
        app.on('error', (err, ctx) => {
            console.error('server error', err, ctx)
        });
    }
    static initLoadRouters() {

        //注意这里的路径是依赖于当前文件所在位置的
        //最好写成绝对路径
        const apiDirectory = `${process.cwd()}/src/routers`
        const modules = requireDirectory(module, apiDirectory, {
            visit: whenLoadModule
        });
        function whenLoadModule(obj) {
            if(obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManager;