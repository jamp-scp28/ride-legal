import { useState } from "react";
import './header.css'

function NavIcon({icon,text}:{icon:any,text:String}){
    return(
        <div className="navIcon group">
            {icon}
            <span className="tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default NavIcon;