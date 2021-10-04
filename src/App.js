
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Services from './component/Services/Services';
import Teachers from './component/Teachers/Teachers';
import NotFound from './component/NotFound/NotFound';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';


function App() {
  return (
    <div>
      {/* Routes */}
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
            <Services></Services>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
            <Services></Services>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/services'>
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route exact path='/teachers'>
            <Teachers></Teachers>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
