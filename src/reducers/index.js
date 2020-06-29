import { ADD_MOVIES, ADD_FAVOURITE ,REMOVE_FAVOURITE} from '../actions'

const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMoviesState, action){
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            var favs=[];
            for(let i of state.favourites)
            {
                if(i!=action.movie)
                {
                    favs=[...favs,i];
                }
            }
            return {
                ...state,
                favourites: [...favs]
            }
            default:
                return state;
    }
}
