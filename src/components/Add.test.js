import React from 'react';
import {shallow} from 'enzyme';
import setupTest from '../setupTest';
import {ADD} from './Add'


describe('Add', () => {
  const mockSubmitComment = jest.fn();
  const props = {fetchComment:mockSubmitComment}
  const add = shallow(<ADD {...props}/>);
  describe('HTML (Static)', () => {
    it('has a textarea', () => {
      expect(add.find('.comment-textarea').exists()).toBe(true)
    })
    it('has a submit button', () => {
      expect(add.find('.comment-btn').exists()).toBe(true);
    })
    it('initiated a state of comment', () => {
      expect(add.state().comment).toEqual('')
    })
  })
  describe('Javascript (Behavior)', () => {
    describe('change input of textarea', () => {
      const comment = 'yesssss'
      beforeEach(() => {
        add.find('.comment-textarea').simulate('change', {target:{value:comment}})
      })
      it('allows textarea to be typed', () => {
        expect(add.state().comment).toEqual(comment)
      })
    })
    describe('allows a button to submit', () => {
        const comment = 'yesssss'
      beforeEach(() => {
        add.find('.comment-textarea').simulate('change',{target:{value:comment}})
        add.find('.comment-btn').simulate('click');
      })
      it('submit a form and store to redux', () => {
        expect(mockSubmitComment).toHaveBeenCalledWith(comment)
        expect(add.state().comment).toEqual('')
      })
      describe('does not allow to submit a space', () => {
        beforeEach(() => {
          add.find('.comment-textarea').simulate('change',{target:{value:''}})
          add.find('.comment-btn').simulate('click');
        })
        it('do not work', () => {
          console.log(add.debug())
          expect(add.find('.comment-btn').props('disabled')).toBe(true);
        })
      })
    })
  })
})
