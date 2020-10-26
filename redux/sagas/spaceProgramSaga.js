import {
    FETCH_ALL_SPACE_PROGRAMS,
    saveSpacePrograms,
    APPLY_FILTERS_SPACE_PROGRAMS
} from '../actions';

import { takeLatest, all, put } from "redux-saga/effects";

function* fetchSpaceProgram(data) {
    console.log(data,'in saga')
    try {
        let results = yield fetch('https://api.spaceXdata.com/v3/launches?limit=100')
        results = yield results.json()
   
        if(results){
            yield put(saveSpacePrograms(results))
        }
    }
    catch (error) {
        data.failure(
      'Sorry, something went wrong.'
        )
        return;
    }
}

function* filteredSpaceProgram(data) {
    let filterData = data.data
    let postData = Object.keys(filterData)
    .map(k => 
        {if(filterData[k] === ""){
           delete filterData[k]
        } else {
           return encodeURIComponent(k) + '=' + encodeURIComponent(filterData[k])
        }
    }
    ).join('&');
    console.log(postData,'postData')
    try {
        let results = yield fetch(`https://api.spaceXdata.com/v3/launches?limit=100&${postData}`)
        results = yield results.json()
   console.log(results,'results')
        if(results){
            yield put(saveSpacePrograms(results))
        }
    }
    catch (error) {
        data.failure(
     'Sorry, something went wrong.'
        )
        return;
    }
}

function* SpaceProgramSaga() {
    yield all([
        takeLatest(FETCH_ALL_SPACE_PROGRAMS, fetchSpaceProgram),
        takeLatest(APPLY_FILTERS_SPACE_PROGRAMS, filteredSpaceProgram),
    ]);
}

export default SpaceProgramSaga;