import React from 'react';
import '../App.scss';

import Menu from '../comps/menu';

export default {
    title:"Menus",
    component:Menu
}

var items = [
    {
        name:"item 1"
    },
    {
        name:"item 2"
    },
    {
        name:"item 3"
    }
]

export const DefaultMenu = () => {
    return <Menu 
            title="My Menu"
            items={items}
            />
}

export const DropDownMenu = () => {
    return <Menu 
            dropdown={false}
            items={items}
            />
}

export const SlideDownMenu = () => {
    return <Menu 
            slide="left"
            items={items}
            />
}