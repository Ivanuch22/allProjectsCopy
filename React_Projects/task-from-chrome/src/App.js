import './App.css';
import FirstProject from './projects/firstProject';
import SecondProject from './projects/secondProject';
import ThirdProject from './projects/thirdProjects';
import ForthProject from './projects/4project';
import FifthProject from './projects/5project';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <header className='header'>
        <nav className='nav'>
          <Link className='nav__link' to="/">Home</Link>
          <Link className='nav__link' to="/firstProject">firstTask</Link>
          <Link className='nav__link' to="/secondProject">secondTask</Link>
          <Link className='nav__link' to="/thirdProject">thirdProject</Link>
          <Link className='nav__link' to="/forthProject">forthProject</Link>
          <Link className='nav__link' to="/fifthProject">fifthProject</Link>
        </nav>
      </header>
      <main className='main'>
        <Routes>
          <Route path="/" element={''} />
          <Route path="/firstProject" element={<FirstProject />} />
          <Route path="/secondProject" element={<SecondProject />} />
          <Route path="/thirdProject" element={<ThirdProject />} />
          <Route path="/forthProject" element={<ForthProject />} />
          <Route path="/fifthProject" element={<FifthProject />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
