import ajax from './ajax';

export const requestTopHospitals = (dkw) => ajax.get('getTopHospitals.do', { params: { dkw } });
export const requestReportTopHospitals = (params) => ajax.get('getReport.do', { params });
export const requestNetwordData = (dkw, rule) => ajax.get('getNetworkData.do', { params: { dkw, rule } });
export const requestNodeNeiboursData = (dkw) => ajax.get('getNeighbours.do', { params: { dkw } });
export const requestDiseaseInfo = (dkw) => ajax.get('viewDiseaseByDkw.do', { params: { dkw } });
export const requestDrugs = (dkw) => ajax.get('getDrugs.do', { params: { dkw } });
// See: https://www.linksciences.com/getTrials.do?dkw=Pancreatic%20NEOPLASMS
export const requestTrials = (dkw) => ajax.get('getTrials.do', { params: { dkw } });
// See: https://www.linksciences.com/getTotiaolist.do?dkw=Pancreatic%20NEOPLASMS
export const requestTotiaoList = (dkw) => ajax.get('getTotiaolist.do', { params: { dkw } });
export const requestHospitalsAccumulatedTrend = (dkw, lineSetSelected, linesHospitalSelected) => ajax.get('getHospitalsAccumulatedTrend.do', { params: { dkw, lineSetSelected, linesHospitalSelected } });
