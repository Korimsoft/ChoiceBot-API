#!/usr/bin/env node

import express from 'express';


function main() {
    const app = express();
    const port = 8088;

    app.get('/', (req, res) => {
        res.status(200).send('Hello kundy \n');
    });

    app.listen(port, () => {
        console.log(`Listening on ${port}.`);
    })
}

main();