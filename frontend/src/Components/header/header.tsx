import { useState } from "react";
import './header.css';
import {GiPineTree} from "react-icons/gi";
import {Gi3DGlasses} from "react-icons/gi";
import {GiNotebook} from "react-icons/gi";
import {FaChartBar} from "react-icons/fa";
import {FcImageFile} from "react-icons/fc";
import {FcLandscape} from "react-icons/fc";
import {FaBlog} from "react-icons/fa";
import {FaBiking} from "react-icons/fa";
import {FaMountain} from "react-icons/fa";







import NavIcon from "./navIcon";
import LogoComponent from "./logo";



function HeaderComponent(){
    return(
            <nav className="fixed z-50 h-screen rounded-sm transform w-[4.5rem] p-4
            flex flex-col bg-gray-900
            text-white">
                    <LogoComponent></LogoComponent>

                    <NavIcon icon={<FaMountain size={22}></FaMountain>} text={'Inicio'}></NavIcon>
                    <NavIcon icon={<FaChartBar size={22}></FaChartBar>} text={'Incidencias'}></NavIcon>
                    <NavIcon icon={<FaBlog size={22}></FaBlog>} text={'Blog'}></NavIcon>
                    <NavIcon icon={<FaBiking size={22}></FaBiking>} text={'Cuenta'}></NavIcon>
            </nav>

    )
}



export default HeaderComponent;