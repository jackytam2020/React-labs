import React,{useState} from 'react';
import MenuItem from './MenuItem'

import {FaCat} from 'react-icons/fa';

function Menu({items, menuTitle, children,dropdown}){
    const [drop, setDrop] = useState(false)

    var cn = 'dropmenu';

    if(drop){
        cn = "dropmenu dropmenu_active"
    }
    if(!dropdown){
        cn = "";
    }
    return (
        <div onClick={()=>{
                setDrop(!drop)
            }} 
            className="menu">
            
            <h1><FaCat /> {menuTitle}</h1>
            {children}

            <div id='item_cont' className={cn}>
                {items.map((o,i)=>{
                    return <MenuItem {...o}/>
                })}
            </div>
        </div>
    )
}

Menu.defaultProps = {
    items:[{
        itemTitle:"Item1"
    }, {
        itemTitle:"Item2"
    }],
    menuTitle: "Default title",
    children:null,
    dropdown:false
};

export default Menu;