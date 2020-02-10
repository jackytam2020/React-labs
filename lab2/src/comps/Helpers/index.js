import React from 'react'

function Helper({show, helpText, position, elementId}){

    var cn = "helper helper_hidden";
    var container = "helper_cont c"
    if(show){
        cn = "helper"
    }
    switch(position){
        case "default":

            break;
        case "top":

            break;
        case "bottom":

            break;
        case "left":
            container = "helper_cont_left"
            break;
        case "right":

            break;
        default:
            break;
    }
    if(elementId){
        switch(position){
            case "default":
    
                break;
            case "top":
    
                break;
            case "bottom":
    
                break;
            case "left":
    
                break;
            case "right":
    
                break;
            default:
                break;
        }
    }
    return (
       <div className="helper_cont">
            <div className={cn}>
                {helpText}
            </div>
        </div>
    )
}

Helper.defaultProps = {
    show:false,
    helpText:"No help needed",
    position:"default",
    elementId:null
}
export default Helper;