import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

describe('App', () => {
  let app;
  let inputWrapper;

  const changeInputValue = (value) => {
    inputWrapper.simulate('change', {target: {value: value}});
  };

  const outputWrapper = () => {
    return app.find('#output');
  };

  const outputValue = () => {
    return outputWrapper().prop('value');
  };

  beforeEach(() => {
    configure({ adapter: new Adapter() });
    app = shallow(<App/>);
    inputWrapper = app.find('#input');
  });
