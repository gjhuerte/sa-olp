import React, { Component } from 'react';

class SectionEight extends Component {
    state = {
        image: "https://images.pexels.com/photos/1536870/pexels-photo-1536870.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        label: "Do you want to be an instructor?",
        buttonText: "Join With Us",
    };

    render() { 
        return (
            <div 
                className="flex justify-center items-center w-full h-64 py-40" 
                style={{ backgroundImage: `url(${this.state.image})` }}>
                <div className="w-1/2"></div>
                <div className="w-1/2">
                    <h3 className="text-4xl w-1/2 font-bold text-white mb-5">{this.state.label}</h3>

                    <button className="px-10 py-4 font-bold text-sm rounded-full bg-pink-500 text-white">
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        );
    }
}
 
export default SectionEight;