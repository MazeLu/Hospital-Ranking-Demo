import { LOAD_TOP_HOSPITALS } from '../constants';
export const loadTopHospitals = (tophospitals) => ({ type: LOAD_TOP_HOSPITALS, data: tophospitals });
export const resetTopHospitals = (tophospitals) => ({ type: LOAD_TOP_HOSPITALS, data: tophospitals });
