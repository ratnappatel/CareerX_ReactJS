import {BrowserRouter as Router,  Routes, Route, Link} from 'react-router-dom';

import User from './components/User';
function App() {
  return (
    <Router>
    <div >
      <ul>
        <li>
          <Link to='/1'>User 1</Link>
        </li>
        <li>
          <Link to='/2'>User 2</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/:id' element={<User />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
