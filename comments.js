// create web server

const http = require('http');

const server = http.createServer((req, res) => { 
    // handle incoming requests here
});

server.listen(3000, () => { c
    onsole.log('Server is running on port 3000'); 

});