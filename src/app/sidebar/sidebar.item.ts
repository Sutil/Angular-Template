export interface RouteItem {
    path: string;
    title: string;
    icon: string;
    idCollapse: string;
    children: RouteChild[];
}

export interface RouteChild {
    path: string;
    title: string;
    icon: string;
}