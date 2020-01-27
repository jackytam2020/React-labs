import React from 'react';
import {FaPaw} from 'react-icons/fa'


function MenuItem({itemTitle,onClick,active}){
    var cn = 'menu_items';

    if(active){
        cn = 'menu_items menu_items_active'
    }
    
    return (
        <div onClick={onClick} className={cn}> 
            <FaPaw /> {itemTitle}
        </div>
    )
}

MenuItem.defaultProps = {
    itemTitle:"Default item",
    onClick:()=>{},
    active:false
};

export default MenuItem;