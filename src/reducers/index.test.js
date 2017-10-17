import {FETCH_COMMENT} from '../actions/type';
import CommentReducer from './reducer_comment';
import RootReducer from './index'

describe('Reducer', () => {
  describe('rootReducer', () => {
    it('it initialize the reducers', () => {
      expect(RootReducer({},{})).toEqual({comment:[]})
    })
  })
  it('save a comment', () => {
    let comment = 'yess';
    let state = [];
    expect(CommentReducer(state,{type:FETCH_COMMENT,payload:comment}))
    .toEqual([comment])
  })
})
