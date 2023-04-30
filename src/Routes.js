import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NumberManagementService from '../firstquestion/src/NumberManagementService';
import TrainsList from './TrainsList';

const Routes = () => {
  return (
    <Router>
     
        <Route exact path="/">
          <TrainsList />
            <NumberManagementService></NumberManagementService>
        </Route>
       
   
    </Router>
  );
};

export default Routes;
