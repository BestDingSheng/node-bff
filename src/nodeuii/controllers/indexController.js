import IndexModel from '../models/IndexModel';
const indexController = {
    indexAction() {
        return async (ctx, next) => {
            const indexModelIns = new IndexModel();
            const result = await indexModelIns.getData();
            ctx.body = await ctx.render('index', { data: result });
            //ctx.body = result;
        }
    },
    testAction() {
        return (ctx, next) => {
            ctx.body = {
                data:"hello test"
            };
        }
    }
};
export default indexController;
