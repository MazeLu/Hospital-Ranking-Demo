import { SAVE_DKW } from '../constants';

export default function dkwReducer(preState = 'Pancreatic Neoplasms', action) {
  const { type, data } = action;
  switch (type) {
    case SAVE_DKW:
      return data;
    default:
      return preState;
  }
}
