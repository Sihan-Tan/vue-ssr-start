import {
    route,
    GET,
    POST
} from 'awilix-koa';


@route('/')
@route('/test')
@route('/about')
@route('/topics')
class IndexController {
    constructor({
        indexService
    }) {
        this.indexService = indexService;
    }

    @GET()
    async indexAction(ctx, next) {
        await this.indexService.init(ctx);
    }

}
export default IndexController;