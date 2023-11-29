import { SAVE_DKW_MESH_ID } from '../constants';

export default function dkwMeshIdReducer(preState = 'D010190', action) {
  const { type, data } = action;
  switch (type) {
    case SAVE_DKW_MESH_ID:
      return data;
    default:
      return preState;
  }
}
