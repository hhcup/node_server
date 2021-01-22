/**
 * 错误路由处理
 */
let fn = function (ctx, next) {
    if (ctx.status === 404) ctx.body = '没有找到内容 - 404';
    return next();
}
module.exports = fn