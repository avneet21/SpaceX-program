export const FETCH_ALL_SPACE_PROGRAMS = "FETCH_ALL_SPACE_PROGRAMS"
export const SAVE_ALL_SPACE_PROGRAMS = "SAVE_ALL_SPACE_PROGRAMS"
export const APPLY_FILTERS_SPACE_PROGRAMS = "APPLY_FILTERS_SPACE_PROGRAMS"

export const getSpacePrgrams = (data,failure) => {
    console.log(failure,'action')
    return {
        type: FETCH_ALL_SPACE_PROGRAMS,
        data,failure
    }
}

export const saveSpacePrograms = (data) => {
    return {
        type: SAVE_ALL_SPACE_PROGRAMS,
        data
    }
}

export const filterSpacePrograms = (data,failure) => {
    return {
        type: APPLY_FILTERS_SPACE_PROGRAMS,
        data,failure
    }
}