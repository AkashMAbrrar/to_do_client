import React from 'react';

const Navbar = () => {
    return (
        <div className='relative z-50'>
            <div class="navbar bg-secondary fixed top-0 left-0 right-0">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>TO DO LIST</a></li>
                            <li><a>COMPLETE TASK</a></li>
                            <li><a>CALENDER</a></li>
                        </ul>
                        {/* Completed Tasks, To-Do, Calendar */}
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">MY Daily Tasks</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <div className='flex flex-row-reverse space-x-20 space-x-reverse'>
                            <li><a className='text-blue-50 font-bold'>COMPLETE TASK</a></li>
                            <li><a className='text-blue-50 font-bold'>CALENDER</a></li>
                            <li><a className='text-blue-50 font-bold'>TO DO LIST</a></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;