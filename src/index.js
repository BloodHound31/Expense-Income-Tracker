import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
  <SpeechProvider appId="7c9bb7c7-8320-4b2f-8461-bafe402601a3" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root'),
);

