import logo from './logo.svg';
import './App.css';
import { Route, Router, Switch } from 'react-router';
import HeaderComponent from './components/HeaderComponent';
import createHistory from 'history/createBrowserHistory'
import FooterComponent from './components/FooterComponent';
import FoodListComponent from './components/FoodListComponent';
import About from './components/About';
import ContactComponent from './components/ContactComponent';
import ErrorComponent from './components/ErrorComponent';

function App() {
  return (
    <div className="App">
      <Router history = {createHistory()}>

        <HeaderComponent/>

          <Switch>
            <Route path="/" exact component = {FoodListComponent} />
            <Route path="/about" component = {About}/>
            <Route path="/contact" component={ContactComponent}/>
            <Route path="" component={ErrorComponent}/>
          </Switch>

        <FooterComponent/>

      </Router>
    </div>
  );
}

export default App;
