import {
    route,
    GET,
    POST
} from 'awilix-koa';

@route('/test')
class TestController {
    constructor({
        testService
    }) {
        this.testService = testService;
    }

    @route('/:id')
    @GET()
    async testAction(ctx, next) {
        ctx.body = await this.testService.getData(ctx.params.id);
    }
}
export default TestController;