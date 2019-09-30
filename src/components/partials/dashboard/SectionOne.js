import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SectionOne extends Component {
    state = {
        logo: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        label: "Learn on your schedule",
        description: "Anywhere, anytime. Enjoy your learning time!",
        placeholder: "Seach your platform",
    }
    render() { 
        return (
            <section 
                id="section-one"
                className={this.props.className + " flex flex-row py-10 px-20 bg-orange-100 rounded-lg"}>
                <div className="flex-1">
                    <img 
                        className="rounded-lg object-cover h-screen"
                        src={this.state.logo} 
                        alt="Woman on Computer" />
                </div>

                <div className="flex-1 px-10 flex flex-col justify-center items-start">
                    <h3 className="flex-initial text-gray-700 text-6xl font-black">{this.state.label}</h3>
                    <p className="flex-initial text-lg text-gray-500">{this.state.description}</p>

                    <div className="flex-initial flex flex-row w-full my-5">
                        <div className="flex-initial bg-white pl-5 py-5 rounded-lg w-10/12 rounded-tl-lg rounded-bl-lg">
                            <input
                                type="text"
                                className="w-full outline-none pr-2"
                                placeholder={this.state.placeholder} />
                        </div>
                        <button
                            type="button"
                            className="flex-initial bg-pink-600 w-2/12 text-white px-5 py-5 rounded-tr-lg rounded-br-lg">
                            <FontAwesomeIcon
                                icon={faSearch} />
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default SectionOne;