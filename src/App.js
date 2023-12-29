
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SingIn from './SignIn';
import SignUp from './SignUp';
import Welcome from './Welcome';
import DemoState from './ContextApi/DemoState'
function App() {
  console.log("AS")
  return (
    <>
      <DemoState>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/welcome' element={<Welcome />}></Route>
            <Route exact path='/signin' element={<SingIn />}></Route>
            <Route exact path='/signup' element={<SignUp />}></Route>
          </Routes>
        </Router>
      </DemoState>
    </>
  );
}

export default App;
