import React from 'react';
import {FaArrowRight} from 'react-icons/fa'

function MenuItem({}){
    return (
        <div className="menu_items"> 
            <FaArrowRight /> MenuItem
        </div>
    )
}

MenuItem.defaultProps = {

};

export default MenuItem;