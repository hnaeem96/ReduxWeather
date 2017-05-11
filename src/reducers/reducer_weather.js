import { FETCH_WEATHER } from '../actions/index';

export default function(state =  [], action) {
  swith (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      // ES5 version top, ES6 version at the bottom
      return [ action.payload.data, ...state ];
      // [city, city, city], NOT [city, [city, city]]
  }
  return state;
}
