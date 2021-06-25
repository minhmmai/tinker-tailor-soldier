import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './views/Home';
import Customers from './views/Customers';
import Spinner from './components/UI/Spinner';

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/customers" component={Customers} />
    </Switch>
  )
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavigationBar />
        </header>
        <main>
          <Suspense fallback={<Spinner />}>{routes}</Suspense>
        </main>
      </div>

    </BrowserRouter>
  );
}

export default App;
