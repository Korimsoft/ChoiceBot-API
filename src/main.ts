#!/usr/bin/env node

import express from 'express';
import { Express, Request, Response } from 'express';
import { ChoiceHandler } from './handlers/choice-handler';
import { RouteDefinition } from './routing/route-definition';
import { PickService } from './services/pick-service';


function registerRoute(path:string, routeDefinition: RouteDefinition, app: express.Express, routeHandler: any) {


}

function main() {
    const app: Express = express();
    const port = 8088;

    app.get('/', (req, res) => {
        res.status(200).send('Hello kundy \n');
    });

    const pickService: PickService = new PickService();

    [ChoiceHandler].forEach((controller) => {
        const instance = new controller(pickService);
        const prefix = Reflect.getMetadata('prefix', controller);
        const routes: RouteDefinition[] = Reflect.getMetadata('routes', controller);

        routes.forEach((route: RouteDefinition) => {
            const path = `${prefix}${route.path}`;
            console.log(`Registering ${route.requestMethod}: ${path}`);
            app[route.requestMethod](path, (req: Request, res: Response) => {
                route.handler(req, res);
            });
        
        });
    })


    app.listen(port, () => {
        console.log(`Listening on ${port}.`);
    })
}

main();