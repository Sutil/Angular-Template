import { ObjectConfig } from './../data/model.object';
export class User {
    login: string ="";
    password: string = "";
}

export const user_config: ObjectConfig = {
    url: "user",
    title: "User",
    urlFindAll: "./assets/mock/user.mock.json",
    atributes: "",
    columns: [
        {
            def: "login", 
            header: "Login",
            cell: (row: User) => `${row.login}`
        },
    ],
    type: User
};
