import { useState } from "react";
import { FaIdCard } from "react-icons/fa";
import './account.css'

function AccountComponent(){
    return (
        <div className="flex w-full h-screen bg-gray-900">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    mx-auto w-[25rem] px-6 py-6 bg-blue-500 bg-opacity-10 border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="w-full text-center py-3 text-white font-bold text-2xl mb-[2rem]">
                        Ride.Legal
                    </h1>
                    <img src="https://firebasestorage.googleapis.com/v0/b/myprojects-37d11.appspot.com/o/Portafolio%2FjarLogo.svg?alt=media&token=0848974a-3342-4b63-8458-22fa5e17aa9c"
                     className="w-full mx-auto object-center mt-5 mb-[5rem] w-[16rem]"></img>

                    <form>
                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="text"
                        name="email"
                        placeholder=" "
                        required
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 border-gray-200"
                        />
                        <label className="absolute duration-300 top-3 -z-1 origin-0 text-white font-bold">Email</label>
                        <span className="text-sm text-red-600 hidden" id="error">Email is required</span>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                        type="password"
                        name="password"
                        placeholder=" "
                        required
                        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label className="absolute duration-300 top-3 -z-1 origin-0 text-white font-bold">Password</label>
                        <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                    </div>
                    <button
                        id="button"
                        type="button"
                        className="w-full px-6 py-3 mt-3 text-lg text-white font-bold transition-all duration-150 ease-linear hover:rounded-xl shadow outline-none hover:bg-teal-600 hover:shadow-lg focus:outline-none"
                    >
                        Iniciar Sesión
                    </button>
                    </form>
                    </div>
        </div>
    )
}

export default AccountComponent;