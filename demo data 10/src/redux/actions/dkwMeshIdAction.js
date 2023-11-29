import { SAVE_DKW_MESH_ID } from '../constants';

export const saveDkwMeshId = (dkwMeshId) => ({ type: SAVE_DKW_MESH_ID, data: dkwMeshId });
export const resetDkwMeshId = (dkwMeshId) => ({ type: SAVE_DKW_MESH_ID, data: dkwMeshId });
