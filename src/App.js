import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/Themes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import HomeView from './views/HomeView';
import DetailsView from './views/DetailsView';
import Header from './components/Header';

import { CountriesContextProvider } from './context/countries-context';
import { ModalContextProvider } from './context/modal-context';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <GlobalStyles />
        <Header currTheme={theme} themeToggler={setTheme} />
        <Switch>
          <CountriesContextProvider>
            <ModalContextProvider>
              <Redirect exact from="/" to="/all" />
              <Route path="/all" component={HomeView} />
              <Route path="/africa" component={HomeView} />
              <Route path="/americas" component={HomeView} />
              <Route path="/asia" component={HomeView} />
              <Route path="/europe" component={HomeView} />
              <Route path="/oceania" component={HomeView} />
              <Route path="/details/:code" component={DetailsView} />
            </ModalContextProvider>
          </CountriesContextProvider>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
