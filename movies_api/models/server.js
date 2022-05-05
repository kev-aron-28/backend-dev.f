const express = require('express');
const cors = require('cors');


class Server { 

    constructor() {
        this.port = 3000;
        this.app = express();
        this.paths = {
            actor: '/api/actor',
            category: '/api/category'
        };

        this.middlewares()
        this.routes()

    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.actor, require('../routes/actor'));
        this.app.use(this.paths.category, require('../routes/category'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}

module.exports = Server;