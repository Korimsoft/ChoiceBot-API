import { Request, Response } from 'express';
import { Controller } from '../routing/controller';
import { Route } from '../routing/route';
import { RequestMethod } from '../routing/route-definition';
import { PickService } from '../services/pick-service';

@Controller('/choice')
export class ChoiceHandler {

    constructor(private pickService: PickService) { }
    
    @Route('/pick', RequestMethod.POST)
    public pick(req : Request, res: Response): void {
        console.log('Pick');
        res.status(200).send();
    }
}