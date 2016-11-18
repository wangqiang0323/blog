export interface SideMenu {
    icon: string,
    name: string,
    childmenu: [{
        name: string,
        icon: string,
        link: string,
        activeStatus: boolean
    }]
}
