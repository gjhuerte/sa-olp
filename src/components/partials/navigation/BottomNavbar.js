import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {
    faTwitter, 
    faInstagram, 
    faFacebookF, 
    faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';


class BottomNavbar extends Component {
    state = {
        logo: "https://www.trzcacak.rs/myfile/detail/342-3428078_fake-company-logo-transparent-transparent-dummy-logo-png.png",
    }

    render() { 
        return (
            <div className={this.props.className + " flex flex-row justify-center items-start px-10 pb-10 pt-20"}>
                <div className="flex-initial pr-3">
                    <img 
                        className="object-cover h-16"
                        alt="Brand"
                        src={this.state.logo} />

                    <div className="py-3">
                        <p className="text-sm text-gray-500 w-10/12">
                            Anywhere, anytime. Enjoy your learning time!
                        </p>
                    </div>

                    <div className="font-extrabold text-gray-600 text-sm my-2">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="mr-3" />

                        <span>info.dummy@email.net</span>
                    </div>

                    <div className="font-extrabold text-gray-600 text-sm my-2">
                        <FontAwesomeIcon
                            icon={faPhoneAlt}
                            className="mr-3" />

                        <span>+1234567890</span>
                    </div>
                </div>

                <div className="flex-initial pr-20">
                    <h3 className="font-black text-lg mb-10">Information</h3>

                    <ul>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                About Us
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                More Search
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Blog
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Testimonial
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Event
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-initial pr-20">
                    <h3 className="font-black text-lg mb-10">Helpful Links</h3>

                    <ul>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Services
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Support
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Terms & Condition
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Privacy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-initial pr-20">
                    <h3 className="font-black text-lg mb-10">Our Service</h3>

                    <ul>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                IT & Software
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Business
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Development
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Design
                            </a>
                        </li>
                        <li className="mb-3 text-gray-500 text-sm">
                            <a href="/">
                                Marketing
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex-initial">
                    <div className="flex flex-row justify-between mb-10">
                        <a 
                            className="rounded-full h-8 w-8 text-xs border-2 border-gray-700 text-center flex flex-row justify-center items-center shadow-lg"
                            href="/">
                            <FontAwesomeIcon
                                icon={faFacebookF} />
                        </a>
                        <a 
                            className="rounded-full h-8 w-8 text-xs border-2 border-teal-300 text-teal-400 text-center flex flex-row justify-center items-center shadow-lg"
                            href="/">
                            <FontAwesomeIcon
                                icon={faTwitter} />
                        </a>
                        <a 
                            className="rounded-full h-8 w-8 text-xs border-2 border-gray-700 text-center flex flex-row justify-center items-center shadow-lg"
                            href="/">
                            <FontAwesomeIcon
                                icon={faLinkedinIn} />
                        </a>
                        <a 
                            className="rounded-full h-8 w-8 text-xs border-2 border-gray-700 text-center flex flex-row justify-center items-center shadow-lg"
                            href="/">
                            <FontAwesomeIcon
                                icon={faInstagram} />
                        </a>
                    </div>

                    <div className="flex flex-col justify-between items-start">
                        <h3 className="flex-1 font-black text-lg">Subscribe</h3>

                        <div className="flex-1 my-4 border-b text-sm border-gray-400 pb-3 text-gray-600 w-full">
                            <FontAwesomeIcon
                                className="mr-3"
                                icon={faEnvelope} />

                            <input
                                type="text"
                                placeholder="Enter your email" />
                        </div>

                        <button
                            className="flex-1 font-black text-xs text-teal-400 py-2 px-5 border-2 border-teal-400 rounded-full">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BottomNavbar;