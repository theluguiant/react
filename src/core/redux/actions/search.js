import {SEARCH_MOVIE_START} from '../../const/actionsType';

export const searchMovie = (payload) => (
    {
    type: SEARCH_MOVIE_START,
        payload
    });