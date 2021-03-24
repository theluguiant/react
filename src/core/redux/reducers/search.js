import { get} from 'lodash';
import {SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE } from '../../const/actionsType';


const initialState = {};

export default function(state = initialState, action){
    switch (action.type){
        case SEARCH_MOVIE_START:
            return { ...state, isLoading: true, movies: null };
        case SEARCH_MOVIE_COMPLETE:
            return { ...state, isLoading: false, movieResults: get(action, 'results.data') };
        case SEARCH_MOVIE_ERROR:
            return { ...state, isLoading: false, movies: null };
        default: 
            return {...state};
    }
}