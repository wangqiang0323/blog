import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice', age: 88 },
            { id: 12, name: 'Narco', age: 19 },
            { id: 13, name: 'Bombasto', age: 36 },
            { id: 14, name: 'Celeritas', age: 29 },
            { id: 15, name: 'Magneta', age: 24 },
            { id: 16, name: 'RubberMan', age: 19 },
            { id: 17, name: 'Dynama', age: 15 },
            { id: 18, name: 'Dr IQ', age: 38 },
            { id: 19, name: 'Magma', age: 26 },
            { id: 20, name: 'Tornado', age: 22 },
            { id: 111, name: 'Mr. Wang', age: 56 },
            { id: 112, name: 'Tom', age: 43 },
            { id: 113, name: 'Apple', age: 91 },
            { id: 114, name: 'Banala', age: 31 },
            { id: 115, name: 'Motainer', age: 12 },
            { id: 116, name: 'Ruby', age: 66 },
            { id: 117, name: 'Java', age: 48 },
            { id: 118, name: 'Dr Qing', age: 27 },
            { id: 119, name: 'Chrome', age: 24 },
            { id: 120, name: 'Oppo', age: 70 }
        ];

        let menus = [
            {
                "icon": "fa-users", "name": "人员管理",
                "childmenu": [
                    { "icon": "fa-circle-o", "name": "schedule", "link": "./schedule" },
                    { "icon": "fa-circle-o", "name": "home", "link": "./home" },
                    { "icon": "fa-circle-o", "name": "onsen", "link": "./onsen" },
                    { "icon": "fa-circle-o", "name": "hero", "link": "./hero" }
                ]
            },
            {
                "icon": "fa-hand-paper-o", "name": "权限管理",
                "childmenu": [
                    { "icon": "fa-circle-o", "name": "onsen", "link": "./onsen" },
                    { "icon": "fa-circle-o", "name": "home", "link": "./home" }
                ]
            },
            {
                "icon": "fa-hourglass-end", "name": "经验值管理",
                "childmenu": [
                    { "icon": "fa-circle-o", "name": "schedule", "link": "./schedule" },
                    { "icon": "fa-circle-o", "name": "home", "link": "./home" }
                ]
            }
        ];

        return { heroes, menus };
    }
}
