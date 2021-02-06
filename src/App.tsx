import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import 'materialize-css';
import TodosPages from './pages/TodosPages';
import AboutPage from "./pages/AboutPage";

const App: React.FC = () => {


  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route
              component={TodosPages}
              path='/'
              exact
          />
          <Route
              component={AboutPage}
              path='/about'
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
