import { ObjectConfig } from "../data/model.object";

export class Person {
    name:string;
    rg:string;
}

export const person_config:ObjectConfig = {
    url: "person",
    urlFindAll : "./assets/mock/person.mock.json",
    atributes: "",
    columns: [
        {
            def: "name", 
            header: "Name",
            cell: (row: Person) => `${row.name}`
        },
        {
            def: "rg", 
            header: "R.G.",
            cell: (row: Person) => `${row.rg}`
        },
    ],
    type: Person
};