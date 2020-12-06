import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld( request: Request, response: Response){
    const user = CreateUser({
        email: 'adrianosantos@hotmail.com', 
        password: '1044444',
        techs: [
            'node.js',
            {title:'react', experience:'1000'}
        ]
    });

    return response.json({ message: 'Hello World'});
}


