// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';
import * as actions from './actions';

const loading = (value)=>{
    return {
        type: actions.INIT_CHARACTER,
        payload: value
    }
}

const fetchSuccess = (character)=>{
    return {
        type: actions.FETCH_SUCCESS,
        payload: character
    }
}

const fetchFailure = (error)=>{
    return {
        type: actions.FETCH_ERROR,
        payload: error
    }
}

export const initCharacter = ()=>{
    return async (dispatch)=> {
        dispatch(loading(true))
        try {
            const fetchCharacter = await axios.get(`https://swapi.co/api/people/`)
            dispatch(fetchSuccess(fetchCharacter.data.results))
        } catch (error) {
            dispatch(fetchFailure(error.message))
        } finally{
            dispatch(loading(false))
        }
    }
}