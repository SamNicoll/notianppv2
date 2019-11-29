import React from 'react';
import {configure, shallow} from 'enzyme';
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
    configure({adapter: new Adapter()});
    app = shallow(<App/>);
    inputWrapper = app.find('#input');
  });

  it('should show header', () => {
    expect(app.find('header').text()).toBe('FizzBuzz');
  });

  describe('bowling score calculate', function () {
    it('should calculate score as zero for all misses', function () {
      changeInputValue('--------------------');
      expect(outputValue()).toEqual(0);
    });

    it('should calculate score as 1 for a single hit,  all misses ', function () {
      changeInputValue('1-------------------');
      expect(outputValue()).toEqual(1);
    });

    it('should calculate score as 2 for a two pin hit, then all misses ', function () {
      changeInputValue('2-------------------');
      expect(outputValue()).toEqual(2);
    });

    it('should calculate score for two single hits, then all misses ', function () {
      changeInputValue('11------------------');
      expect(outputValue()).toEqual(2);
    });

    it('should calculate score for spare, then all misses ', function () {
      changeInputValue('-/-------------------');
      expect(outputValue()).toEqual(10);
    });
    // it('should calculate score of 11 for a hit then spare , then all misses ', function () {
    //   changeInputValue('-1-/----------------');
    //   expect(outputValue()).toEqual(11);
    // });
  });
});