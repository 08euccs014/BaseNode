module.exports = Router;

function Router(express, app)
{
    var path = require('path')

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //Middleware for URL
    app.use((req, res, next) => 
    {
        let middleman = new MMiddleware(req,res, next);
        return middleman.init()
            .bind(this)
            .then(()=> {
                return next()
            })
    })

    app.use('/', express.static(path.join(__dirname, 'client')))
    app.use('/package', express.static(path.join(__dirname, 'client')))
    app.use('/package/schedule', express.static(path.join(__dirname, 'client')))

    app.use('/api', require('./routes/api'))

    app.use('*', function(req, res) 
    {
        MLogger.warn('No route found', {url : req.originalUrl});
        var error = new MErrorNotFound("OOPS! and it's not Object Oriented Programming.");
		res.locals.response.sendError(error);
	});
}