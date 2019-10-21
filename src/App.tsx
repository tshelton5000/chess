import React from 'react';
import Board from './components/Board/Board';
import './App.css';

import store from './redux/store';
import {Provider} from 'react-redux';

const App: React.FC = () => {

  return (
    <div className="App">
      <Provider store={store}>
        <Board />
      </Provider>
    </div>
  );
}

export default App;