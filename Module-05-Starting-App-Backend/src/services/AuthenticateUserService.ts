import {getRepository} from 'typeorm';
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
// import { hash } from 'bcryptjs';
import User from '../models/User';
import authConfig from '../config/auth';

interface Request {
    email: string;
    password: string;
}

interface Response{
    user: User;
    token: string;

}

class AuthenticateUserService {
    public async execute({email, password}: Request): Promise<Response>{

        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({where:{email}});
        if(!user) {
            throw new Error ('incorret email/password combination');
        }

        const passwordMatched = await compare(password, user.password);

        if(!passwordMatched) {
            throw new Error('incorret email/password combination');
        }

        const token = sign({},authConfig.jwt.secret, {
            subject:user.id, // sempre será o id do usuário que gerou o tokien
            expiresIn:'1d', //quanto tempo que o tokien vai durar
        });

     
        return {
            user,
            token,
        };
    }
}



export default AuthenticateUserService;