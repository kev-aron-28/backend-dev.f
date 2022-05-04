const express = require('express');
const cors = require('cors');


class Server { 

    constructor() {
        this.port = 3000;
        this.app = express();
        this.paths = {
            hello: '/api/',
            movies: '/api/movies/'
        };

        this.middlewares()
        this.routes()

    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.hello, require('../routes/testRoute'))
        this.app.use(this.paths.movies, require('../routes/movies'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;