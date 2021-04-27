import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(resquest: Request, response: Response) {
  const user = createUser({
    email: 'email@mail.com',
    password: '123',
    techs: [
      'Node.js',
      'ReactJS',
      'React native',
      { title: 'Javascript', experience: 100 }
    ],
  });

  return response.json({ message: "Hello World" });
};