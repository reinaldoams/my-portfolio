import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-gray-500 text-4xl font-bold cursive tracking-widest">
                        reinaldoAssis
                    </NavLink>
                    {/* <NavLink
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-gray-100 bg-blue-500"
                        >
                        Blog Posts
                    </NavLink> */}
                    <NavLink
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-gray-100 bg-blue-500"
                        >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="text-gray-100 bg-blue-500"
                        >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/feed/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/reinaldoams/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    {/* <SocialIcon url="https://www.youtube.com/user/LeReinaldo" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} /> */}
                </div>
            </div>
        </header>
    );
}

export default NavBar;