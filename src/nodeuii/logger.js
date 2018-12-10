import log4js from 'log4js';
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: __dirname + '/logs/ydlogs.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
});
export default log4js.getLogger('cheese');