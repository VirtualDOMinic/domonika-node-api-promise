const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

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

    let searchQuery = "";

    fetch('https://api.github.com/users/Brymon')
        .then(res => res.json())
        // .then(json => res.end(JSON.stringify(json)))
        .then(json => searchQuery = json.location)
        // .then(() => console.log(searchQuery))
        // .then(yyyy => res.end(JSON.stringify(yyyy)))
        // .then(json => fetch(`https://content.guardianapis.com/search?q=${json.location}&api-key=cd10ddb5-618d-4af9-8ec4-069a13ba890f`))
        // .then()
        .then(fetch(`https://content.guardianapis.com/search?q=${searchQuery}&api-key=cd10ddb5-618d-4af9-8ec4-069a13ba890f`)
        .then(guardianStuff => res.end(JSON.stringify(guardianStuff))))
        // .then(guardianStuff => res.end(JSON.stringify(guardianStuff)))
    };

// }



module.exports = {indexHandler, externalHandler};