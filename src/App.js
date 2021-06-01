import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <Router>
                <Navbar show={showNav} setShowNav={setShowNav} />
                <div>
                    <Route path='/' exact>
                        <Home show={showNav} />
                    </Route>
                    <Route path='/about' exact component={About} />
                    <Route path='/contact' exact component={Contact} />
                </div>
            </Router>
        </>
    );
}

export default App;
