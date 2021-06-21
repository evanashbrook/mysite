import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Containers/Home';
import Education from './Containers/Education';
import Projects from './Containers/Projects';
import Interests from './Containers/Interests';
import Contact from './Containers/Contact';

function App() {
  return (

    <Router>

      <section>
      <div className="head">
      <Header/>
    </div>
      <div className="routes">
      <Route path="/" exact component={Home}/>
        <Route path="/education" component={Education}/> 
        <Route path="/projects" component={Projects}/>
        <Route path="/interests" component={Interests}/>
        <Route path="/Contact" component={Contact}/>
      </div>
    </section>

    </Router>
  );
}

export default App;
