import './App.css';
import Contact from './pages/contact'
import Home from './pages/home'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
{/* 
          <Route exact path="/users" component={Users}/>
          <Route exact path="/users/:userId" component={User}/> */}
          </Switch>
      </div>   
    </BrowserRouter>
  );
}

export default App;

//HashRouter   (#hash hunxa, hash paxi ko matra change hunxa)
//BrowserRouter (mostly use BrowserRouter)