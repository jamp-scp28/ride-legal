import { useState } from "react";
import './header.css'
import { Link } from "react-router-dom";

function NavIcon({icon,text,link}:{icon:any,text:string,link:string}){
    return(
        <Link to={link}>
              <div className="navIcon group">
                {icon}
                <span className="tooltip group-hover:scale-100">
                    {text}
                </span>
            </div>
        </Link>
    )
}

export default NavIcon;