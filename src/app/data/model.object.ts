

export class ColumnObj {
    columnDef: string; 
    header: string;
    cell: any;
}

export class ModelObject {
    url:string = "";
    atributes:string = "";
    columns: ColumnObj[] = [];
    type;
}