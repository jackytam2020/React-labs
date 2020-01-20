import React from 'react';
import MenuItem from './MenuItem'

import {AiOutlineMenuFold} from 'react-icons/ai'

function Menu({}){
    return (
        <div className="menu">
            <h1><AiOutlineMenuFold /> Menu</h1>
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    )
}

Menu.defaultProps = {

};

export default Menu;