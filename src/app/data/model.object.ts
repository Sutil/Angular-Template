

export class ColumnObj {
    def: string; 
    header: string;
    cell: any;
}

export class ObjectConfig {
    url:string = "";
    title ="";
    urlFindAll:string = "";
    atributes:string = "";
    columns: ColumnObj[] = [];
    type;
}