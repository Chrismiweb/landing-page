import logo from './logo.svg';
import './App.css';
import Menu from './Homepage/Menu';
import Bodyone from './Homepage/Bodyone';
import Practice from './Homepage/Practice';
import Timer from './Homepage/Timer';

// import Menu from './Homepage/Menu'

function App() {
  return (
    <div className="App">
        <Menu/>
        <Bodyone/>
        <Practice/>
        <Timer/>
    </div>
  );
}

export default App;
