import React, { Component } from 'react';
import Navbar from '../partials/navigation/Navbar';
import BottomNavbar from '../partials/navigation/BottomNavbar';

class BaseLayout extends Component {
    state = {}
    render() { 
        return (
            <div
                id="base-layout"
                className="flex flex-col justify-between items-stretch h-screen px-20">
                <Navbar className="flex-initial" />
                <div className="flex-initial">
                    {this.props.children}
                </div>
                <BottomNavbar className="flex-initial" />
            </div>
        );
    }
}
 
export default BaseLayout;