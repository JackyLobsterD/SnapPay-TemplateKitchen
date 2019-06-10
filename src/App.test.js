import React from 'react';
import ReactDOM from 'react-dom';
import {Index} from './component/Index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Index name={'123'}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
