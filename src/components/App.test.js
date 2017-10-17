import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import App from './App';
import {ADD} from './Add'
import {LIST} from './List'


describe('App', () => {
  const app = shallow(<App />)
  const add = shallow(<ADD />)
  const list = shallow(<LIST />);
  it('renders it correctly', () => {
    expect(app).toMatchSnapshot();
  })
  it('has a connect Add component',() => {
    expect(add.exists()).toBe(true);
  })
  it('has a connect List component', () => {
    expect(list.exists()).toBe(true);
  })
})
