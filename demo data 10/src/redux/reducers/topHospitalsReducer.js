import { LOAD_TOP_HOSPITALS } from '../constants';
export default function topHospitalsReducer(preState = [], action) {
  const { type, data } = action;
  switch (type) {
    case LOAD_TOP_HOSPITALS:
      return [...data];
    default:
      return preState;
  }
}
