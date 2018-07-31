const fs = require('fs');
const path = require('path');
const nodeFetch = require('node-fetch');

const indexHandler = (req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    fs.readFile(path.join(__dirname, '..', 'public/index.html'), (err, file) => {
        if (err) {
            console.log("Error: " + err);
        } else {
            res.end(file);
        }
    });
}

const externalHandler = (req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    fs.readFile(path.join(__dirname, '..', 'public/index.html'), (err, file) => {
        if (err) {
            console.log("Error: " + err);
        } else {
            res.end(file);
        }
    });

}

module.exports = {indexHandler, externalHandler};