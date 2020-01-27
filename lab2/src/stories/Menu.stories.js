import React from 'react';
import '../App.scss';

import Menu from '../comps/menu';

export default {
    title:"Menus",
    component:Menu
}

var items = [
    {
        itemTitle:"Profile",
        onClick:()=>{alert("go to profile!")}
    },
    {
        itemTitle:"Settings",
        onClick:()=>{alert("go to stats!")}
    },
    {
        itemTitle:"Stats"
    },
    {
        itemTitle:"Dashboard"
    },
    {
        itemTitle:"Log Out"
    },
]

export const DefaultMenu = () => {
    return <Menu 
            title="My Menu"
            items={items}
            />
}

export const DropDownMenu = () => {
    return <Menu 
            dropdown={true}
            items={items}
            />
}

export const SlideDownMenu = () => {
    return <Menu 
            slide="left"
            items={items}
            />
}
export const MenuWithMyTags = () => {
    return <Menu>
        <div> My Custom Tag </div>
        <img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg"></img>
        </Menu> 
}
export const MenuWithTitle = () => {
    return <Menu 
            menuTitle="My Menu"
            />
}
export const CustomItemsMenu = () => {
    return <Menu 
        items={items}
    />
}
