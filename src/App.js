import Profile from './components/profile.js'
import DetailUser from './components/DetailUser.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Profile />
        </Route>
        <Route exact path = '/Detail/:id'>
          <DetailUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
