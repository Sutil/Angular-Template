import { RouteItem } from './sidebar.item';

export const ROTA: RouteItem[] = [

    { path: '', 
    title: 'Administração', icon:'account_balance', idCollapse:"adm", children:[
        {path: '/faturamento', title: 'Faturamento', icon:'attach_money'},
        {path: '/banner', title: 'Banner', icon:'burst_mode'},
        {path: '/interesses', title: 'Interessados', icon:'face'},
        {path: '/administracao/marca', title: 'Marcas', icon:'card_membership'},
    ] },


    { path: '', 
    title: 'Pessoas', icon:'account_circle', idCollapse:"pessoas", children:[
        {path: '/lists/person', title: 'Fornecedores', icon:'account_box'},
        {path: '/clientes', title: 'Clientes', icon:'account_circle'},
        {path: '/users', title: 'Usuários', icon:'supervisor_account'},
    ] },

    { path: '', 
    title: 'Comercial', icon:'monetization_on', idCollapse:"comercial", children:[
        {path: '/prevenda', title: 'Pré-Vendas', icon:'contact_mail'},
        {path: '/vendas', title: 'Vendas', icon:'people'},
        {path: '/users', title: 'Serviços', icon:'build'},
    ] },

    { path: '', 
    title: 'Conexões', icon:'link', idCollapse:"conexoes", children:[
        {path: '/olx', title: 'OLX', icon:'cast_connected'},
        {path: '/webmotors', title: 'WebMotors', icon:'cast_connected'},
        {path: '/icarros', title: 'ICarros', icon:'cast_connected'},
        {path: '/socarrao', title: 'Só Carrão', icon:'cast_connected'},
        {path: '/mercadolivre', title: 'Mercado Livre', icon:'cast_connected'},
    ] },
    
    { path: '', 
    title: 'Veículo', icon:'directions_bus', idCollapse:"veiculo", children:[
        {path: '/veiculo', title: 'Garagem', icon:'store'},
        {path: '/garagem', title: 'Veículos', icon:'directions_car'}
    ] },
];