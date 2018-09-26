import React from 'react';
import ReactDOM from 'react-dom';
import TodaysPhoto from '../components/TodaysPhoto';


it('TodaysPhoto renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodaysPhoto />, div);
  ReactDOM.unmountComponentAtNode(div);
});