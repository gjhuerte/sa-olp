import React, { Component } from 'react';
import BaseLayout from './layouts/BaseLayout';
import SectionOne from './partials/dashboard/SectionOne';
import SectionTwo from './partials/dashboard/SectionTwo';
import SectionEight from './partials/dashboard/SectionEight';

class Dashboard extends Component {
    state = {}
    render() { 
        return (
            <BaseLayout>
                <div className="px-20">
                    <SectionOne />
                    <SectionTwo />
                    <div className="border-b border-gray-200 mb-5"></div>
                </div>
                <SectionEight />
            </BaseLayout>
        );
    }
}
 
export default Dashboard;