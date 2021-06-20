import React from 'react';

import { Route} from 'react-router-dom';

import Dashboard from  '../pages/Dashboard/index';

const Routes: React.FC =() => (
    <switch>
        <Route path='/' exact component = {Dashboard} />
    </switch>
);
export default Routes;