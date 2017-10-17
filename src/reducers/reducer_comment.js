import {FETCH_COMMENT} from '../actions/type';

export default function(state=[],action){
  switch(action.type){
    case FETCH_COMMENT:
    return [...state,action.payload];
    default:
    return state;
  }
}
