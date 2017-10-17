import {FETCH_COMMENT} from './type';

export function fetchComment(comment){
  return{
    type:FETCH_COMMENT,
    payload:comment
  }
}
