import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faUser, faClock } from '@fortawesome/free-solid-svg-icons'

class SectionTwo extends Component {
    state = {}
    render() { 
        return (
            <div className="flex flex-row justify-between items-center py-5 px-0">
                <div className="flex-1 flex flex-row justify-center items-center">
                    <div className="border-2 w-12 h-12 border-gray-800 rounded-full p-1 mr-3">
                        <div className="rounded-full w-full h-full bg-gray-800 text-white flex flex-row justify-center items-center">
                            <FontAwesomeIcon
                                    icon={faClipboard} />
                        </div>
                    </div>

                    <h3 className="text-gray-800 font-semibold text-lg">
                        100k online courses
                    </h3>
                </div>
                <div className="flex-1 flex flex-row items-center">
                    <div className="border-2 w-12 h-12 border-gray-800 rounded-full p-1 mr-3">
                        <div className="rounded-full w-full h-full bg-gray-800 text-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon
                                        icon={faUser} />
                        </div>
                    </div>

                    <h3 className="text-gray-800 font-bold text-lg">
                        Expert instruction
                    </h3>
                </div>
                <div className="flex-1 flex flex-row items-center">
                    <div className="border-2 w-12 h-12 border-gray-800 rounded-full p-1 mr-3">
                        <div className="rounded-full w-full h-full bg-gray-800 text-white flex flex-row justify-center items-center">
                                <FontAwesomeIcon
                                        icon={faClock} />
                        </div>
                    </div>

                    <h3 className="text-gray-800 font-bold text-lg">
                        Lifetime access
                    </h3>
                </div>
            </div>
        );
    }
}
 
export default SectionTwo;