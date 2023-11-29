import { combineReducers } from 'redux';
import dkwReducer from './dkwReducer';
import dkwMeshIdReducer from './dkwMeshIdReducer';
import topHospitalsReducer from './topHospitalsReducer';

export default combineReducers({
  dkw: dkwReducer,
  dkwMeshId: dkwMeshIdReducer,
  topHospitals: topHospitalsReducer
});
