/* SystemJS module definition */

// interface NodeRequireFunction {
//     /* tslint:disable-next-line:callable-types */
//     (id: string): any;
// }

// interface NodeModule {
//     exports: any;
//     require: NodeRequireFunction;
//     id: string;
//     filename: string;
//     loaded: boolean;
//     parent: NodeModule | null;
//     children: NodeModule[];
//     paths: string[];
// }

/// <reference path="../node_modules/@types/node/index.d.ts" />
declare var module: NodeModule;
