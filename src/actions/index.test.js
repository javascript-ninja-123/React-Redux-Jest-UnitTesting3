import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitcoin: {}});
const mockResponse = {body:{bpi:'bitcoin price index'}};

fetchMock.get(
  'https://api.coindesk.com/v1/bpi/currentprice.json',mockResponse
)

//import from type and index
import {FETCH_COMMENT} from './type';
import {fetchComment} from './index';


describe('action', () => {
  it('creates an action to set a comment', () => {
    const comment ='yess';
    const expectedAction = {type:FETCH_COMMENT,payload:comment};
    expect(fetchComment(comment)).toEqual(expectedAction)
  })
})
