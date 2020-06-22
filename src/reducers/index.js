export default function movies(state={lidst:[],fav:[]},action){
    if(action.type=='ADD_MOVIES')
    {
        return action.movies;
    }
    return state;
}