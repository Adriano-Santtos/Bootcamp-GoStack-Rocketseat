interface ObjectTechs{
    title: string;
    experience: string;
}


interface CreateUserData{
    name?: string;
    email: string;
    password: string;
    techs:Array<string | ObjectTechs>;
}

export default function createUser({name, email, password}: CreateUserData){
    const user= {
        name, 
        email,
        password,
    }

    return user;
}