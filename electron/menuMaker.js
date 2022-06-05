const { Menu } = require("electron");

const contextMenuTemplate = [
    {
        label: 'Refresh',
        click: () => {alert('Refreshed')}
    },
    // {
    //     label: '',
    //     subMenu: [
    //         {
    //             label: ''
    //         }
    //     ]
    // }
];

module.exports.rightClickMenu = Menu.buildFromTemplate(contextMenuTemplate);