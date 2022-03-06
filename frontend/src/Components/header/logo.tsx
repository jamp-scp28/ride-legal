import { useState } from "react";

function LogoComponent(){
    return (
        <div className="h-12 w-12 mt-[2rem] mb-[5rem]">
            <img className="mb-[4rem] font-bold hover:cursor-pointer" src="https://firebasestorage.googleapis.com/v0/b/myprojects-37d11.appspot.com/o/Portafolio%2FjarLogo.svg?alt=media&token=0848974a-3342-4b63-8458-22fa5e17aa9c"></img>
            <p className="-rotate-90 font-bold mt-12  hover:text-teal-600 hover:cursor-pointer">Ride.Legal</p>
        </div>
    )
}

export default LogoComponent;