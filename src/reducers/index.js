import { combineReducers } from 'redux';
import CommentReducer from './reducer_comment';
const rootReducer = combineReducers({
  comment:CommentReducer
});

export default rootReducer;
