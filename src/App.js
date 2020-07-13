import React from 'react';
import LandingScreen from './Component/LandingScreen/Index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../src/redux/reducer/reducer';
import CatalogueScreen from '../src/Component/CatalogueScreen/CatalogueScreen';
export const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={LandingScreen} />
        <Route path='/Cattribute' component={CatalogueScreen} />
        {/* <Route exact path='/startview' component={StartView} /> */}
      </Router>
    </Provider>
  );
}

export default App;
