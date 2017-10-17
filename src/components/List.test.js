import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import {LIST} from './List'

describe('List', () => {
  const props = {comment:'yesss'}
   const list = shallow(<LIST {...props}/>)
   describe('HTML (Static)', () => {
      it('renders it correctly', ()=> {
         expect(list).toMatchSnapshot()
      })
      it('has a comment-list', () => {
        expect(list.find('.comment-list').exists()).toBe(true)
      })
   })
   describe('Javascript (Behavior)', () => {
     expect(list.find('.comment-list').children()).toHaveLength(1);
   })
})
