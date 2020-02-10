import React from 'react'

import {withKnobs, boolean,text, select} from "@storybook/addon-knobs"
import Helper from '../comps/Helpers';

export default {
    title:"Helper",
    component:Helper,
    decorators:[withKnobs]
}

export const DefaultHelper = () => {
    const options = {
        Default:"default",
        SticktoBottom:"bottom",
        SticktoTop:"top",
        SticktoLeft:"left"
    }
    return <Helper 
            show={boolean("Show Helper", false)}
            helpText={text("Error")}
            position={select("Positions",options)}
    />
}