import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
    state = {
        logo: "https://www.trzcacak.rs/myfile/detail/342-3428078_fake-company-logo-transparent-transparent-dummy-logo-png.png",
    }

    render() { 
        return (
            <nav 
                id="top-navigation"
                className={this.props.className + " flex flex-row justify-between items-center p-5"}>
                <div className="flex-1">
                    <img 
                        className="object-cover h-10"
                        alt="Brand"
                        src={this.state.logo} />
                </div>

                <div className="flex-1">
                    <ul className="flex flex-row justify-between items-center">
                        <li className="font-extrabold">
                            <a href="/">
                                About
                            </a>
                        </li>
                        <li className="font-extrabold">
                            <a href="/">
                                Categories
                            </a>
                        </li>
                        <li className="font-extrabold">
                            <a href="/">
                                Courses
                            </a>
                        </li>
                        <li className="font-extrabold">
                            <a href="/">
                                Blog
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex flex-row justify-end items-center">
                    <div className="flex-initial mr-5">
                        <span className="font-extrabold">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>

                    <a 
                        className="flex-initial mr-5 font-extrabold"
                        href="/">
                        Login
                    </a>

                    <a 
                        className="flex-initial font-extrabold rounded-full bg-teal-500 text-sm text-white py-3 px-8"
                        href="/">
                        Sign Up
                    </a>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;