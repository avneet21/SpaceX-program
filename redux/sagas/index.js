import { all, fork } from 'redux-saga/effects';
import SpaceProgramSaga from './spaceProgramSaga';

function* dataSaga() {
  yield all([
    fork(SpaceProgramSaga)
  ]);
}


export default dataSaga;