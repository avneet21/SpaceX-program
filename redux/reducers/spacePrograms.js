
import {
    SAVE_ALL_SPACE_PROGRAMS
} from '../actions';

const initialCommonState = {
  spaceProgramsList:[]
};

function SpacePrograms(state = initialCommonState, action) {
    switch (action.type) {
      case SAVE_ALL_SPACE_PROGRAMS:
        return {...state, spaceProgramsList: action.data}
      default:
        return state
    }
  }

  export default SpacePrograms