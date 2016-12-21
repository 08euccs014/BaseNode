class middleware 
{
    constructor(req, res, next){
        this.req = req;

        let _res = new MResponse(res);
        res.locals = {
            response : _res
        }

        this.res = res;
    }

    init() 
    {
        MLogger.debug('middleware.init')

        return MPromise.resolve(true)
            .bind(this)
            .then(() => 
            {   
                
            });
    }
}

module.export = global.MMiddleware = middleware;
