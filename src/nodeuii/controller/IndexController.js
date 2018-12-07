import {
    route,
    GET,
    POST
} from 'awilix-koa';


@route('/')
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