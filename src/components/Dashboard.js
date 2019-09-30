import React, { Component } from 'react';
import BaseLayout from './layouts/BaseLayout';
import SectionOne from './partials/dashboard/SectionOne';

class Dashboard extends Component {
    state = {}
    render() { 
        return (
            <BaseLayout>
                <SectionOne />
            </BaseLayout>
        );
    }
}
 
export default Dashboard;