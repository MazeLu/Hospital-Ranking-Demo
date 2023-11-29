import { SAVE_DKW } from '../constants';

export const saveDkw = (dkw) => ({ type: SAVE_DKW, data: dkw });
export const resetDkw = (dkw) => ({ type: SAVE_DKW, data: dkw });
