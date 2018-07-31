const handlers = require('./handler.js');

const routes = (req, res) => {
    const url = req.url;
    if (url == "/") {
        handlers.indexHandler(req, res);
    } else if (url == "/request") {
        handlers.externalHandler(req, res);
    }
}

module.exports = routes;