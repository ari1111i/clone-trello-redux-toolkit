import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './store';
import LoginTrello from './components/LoginTrello';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
      {isLoggedIn ? (
        <div>
          <Header onLogout={handleLogout} />
            <Body />
          </div>
      ) : (
        <LoginTrello onLogin={handleLogin} />
      )}
    </Provider>
  );
};

export default App;
