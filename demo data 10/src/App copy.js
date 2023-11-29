// import { useEffect, useState, useRef, useMemo } from "react"
// import { useSelector, useDispatch } from 'react-redux';
// import { requestTopHospitals } from './api/index';
// import pink from "@material-ui/core/colors/pink"
// import cyan from "@material-ui/core/colors/cyan"
// import { useMediaQuery } from "@material-ui/core"
// import { ThemeProvider, createTheme } from "@material-ui/core/styles"
// import "./styles.css"
// import { Container, Grid, CssBaseline, Box, TextField, Typography, Slider, Hidden } from "@material-ui/core"
// import Geocode from "react-geocode"
// import Map from "./components/Map"
// import DataTable from './components/DataTable';
// import { makeStyles } from '@material-ui/core/styles';
// import { loadTopHospitals } from './redux/actions/topHospitalsAction';
// import { saveDkwMeshId } from './redux/actions/dkwMeshIdAction';
// import { saveDkw } from './redux/actions/dkwAction';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';

// const mockdata = [
//   {
//     "year": "1941",
//     "shortName": "MDA",
//     "piCount": 116,
//     "nctCount": 76,
//     "projectCount": 389,
//     "funding": 137071820,
//     "overallSCoreDisplay": 96,
//     "logUrl": "MDA.png",
//     "overallRank": 1,
//     "city": "Houston",
//     "overallSCore": 80,
//     "cnName": "德州大学安德森癌症中心",
//     "interverntionCountRadarScore": 100.0,
//     "interverntionCountRankDisplay": 1,
//     "projectCountRadarScore": 67.06896,
//     "projectCountRankDisplay": 3,
//     "piCountRadarScore": 100.0,
//     "piCountRankDisplay": 1,
//     "fundingRadarScore": 82.91995,
//     "fundingRankDisplay": 2,
//     "overallRankDisplay": 1,
//     "nctCountRank": 1,
//     "piCountRank": 1,
//     "projectCountRank": 3,
//     "fundingRank": 2,
//     "interverntionCountRank": 1,
//     "physicianCountRank": 64,
//     "lmID": "2",
//     "nihPiCount": 97,
//     "interverntionCount": 249,
//     "nctPiCount": 19,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "HOUSTON TX",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 100.0,
//     "nctCountRankDisplay": 1,
//     "bedNum": "665",
//     "descrp": "The University of Texas MD Anderson Cancer Center is one of the world’s most respected centers devoted exclusively to cancer patient care, research, education and prevention.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "The University of Texas MD Anderson Cancer Center is one of the world’s most respected centers devoted exclusively to cancer patient care, research, education and prevention.\r\n\r\nThe mission of The University of Texas MD Anderson Cancer Center is to eliminate cancer in Texas, the nation, and the world through outstanding programs that integrate patient care, research and prevention, and through education for undergraduate and graduate students, trainees, professionals, employees and the public.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "West South Central",
//     "name": "MD ANDERSON CANCER CENTER",
//     "state": "TX"
//   },
//   {
//     "year": "1889",
//     "shortName": "JHMI",
//     "piCount": 82,
//     "nctCount": 70,
//     "projectCount": 580,
//     "funding": 165306202,
//     "overallSCoreDisplay": 95,
//     "logUrl": "jhu.PNG",
//     "overallRank": 2,
//     "city": "Baltimore",
//     "overallSCore": 82,
//     "cnName": "约翰·霍普金斯医院",
//     "interverntionCountRadarScore": 68.273094,
//     "interverntionCountRankDisplay": 2,
//     "projectCountRadarScore": 100.0,
//     "projectCountRankDisplay": 1,
//     "piCountRadarScore": 70.68965,
//     "piCountRankDisplay": 3,
//     "fundingRadarScore": 100.0,
//     "fundingRankDisplay": 1,
//     "overallRankDisplay": 2,
//     "nctCountRank": 2,
//     "piCountRank": 3,
//     "projectCountRank": 1,
//     "fundingRank": 1,
//     "interverntionCountRank": 2,
//     "physicianCountRank": 24,
//     "lmID": "5",
//     "nihPiCount": 71,
//     "interverntionCount": 170,
//     "nctPiCount": 11,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "BALTIMORE MD",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 92.10526,
//     "nctCountRankDisplay": 2,
//     "bedNum": "1145",
//     "descrp": "From the 1889 opening of The Johns Hopkins Hospital, there emerged the concept of combining research, teaching and patient care. This model, the first of its kind, led to a national and international reputation for excellence and discovery.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "From the 1889 opening of The Johns Hopkins Hospital, to the opening of the School of Medicine four years later, there emerged the concept of combining research, teaching and patient care. This model, the first of its kind, would lead to a national and international reputation for excellence and discovery.\r\n\r\nToday, Johns Hopkins uses one overarching name—Johns Hopkins Medicine—to identify its entire medical enterprise. This $6.5 billion system unites the physicians and scientists of the Johns Hopkins University School of Medicine with the health professionals and facilities that make up the broad, integrated Johns Hopkins Health System.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "South Atlantic",
//     "name": "JOHNS HOPKINS MEDICAL INSTITUTION",
//     "state": "MD"
//   },
//   {
//     "year": "1889",
//     "shortName": "MAYO",
//     "piCount": 54,
//     "nctCount": 34,
//     "projectCount": 288,
//     "funding": 97236216,
//     "overallSCoreDisplay": 91,
//     "logUrl": "mayo.png",
//     "overallRank": 3,
//     "city": "Rochester",
//     "overallSCore": 79,
//     "cnName": "梅奥医院",
//     "interverntionCountRadarScore": 28.514057,
//     "interverntionCountRankDisplay": 5,
//     "projectCountRadarScore": 49.65517,
//     "projectCountRankDisplay": 4,
//     "piCountRadarScore": 46.551723,
//     "piCountRankDisplay": 5,
//     "fundingRadarScore": 58.82188,
//     "fundingRankDisplay": 4,
//     "overallRankDisplay": 3,
//     "nctCountRank": 4,
//     "piCountRank": 5,
//     "projectCountRank": 4,
//     "fundingRank": 4,
//     "interverntionCountRank": 5,
//     "physicianCountRank": 22,
//     "lmID": "4",
//     "nihPiCount": 40,
//     "interverntionCount": 71,
//     "nctPiCount": 14,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "ROCHESTER MN",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 44.736843,
//     "nctCountRankDisplay": 4,
//     "bedNum": "0",
//     "descrp": "Mayo Clinic is a nonprofit organization committed to clinical practice, education and research, providing expert, whole-person care to everyone who needs healing.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Mayo Clinic is a nonprofit organization committed to clinical practice, education and research, providing expert, whole-person care to everyone who needs healing.\r\n\r\nMayo Clinic has major campuses in Rochester, Minn.; Scottsdale and Phoenix, Ariz.; and Jacksonville, Fla. The Mayo Clinic Health System has dozens of locations in several states.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "West North Central",
//     "name": "MAYO CLINIC",
//     "state": "MN"
//   },
//   {
//     "year": "1902",
//     "shortName": "BJH",
//     "piCount": 105,
//     "nctCount": 31,
//     "projectCount": 141,
//     "funding": 31325257,
//     "overallSCoreDisplay": 78,
//     "logUrl": "BJH.png",
//     "overallRank": 4,
//     "city": "St. Louis",
//     "overallSCore": 61,
//     "cnName": "巴恩·犹太医院/圣路易斯华盛顿大学医学中心",
//     "interverntionCountRadarScore": 34.136547,
//     "interverntionCountRankDisplay": 3,
//     "projectCountRadarScore": 24.310345,
//     "projectCountRankDisplay": 11,
//     "piCountRadarScore": 90.51724,
//     "piCountRankDisplay": 2,
//     "fundingRadarScore": 18.949837,
//     "fundingRankDisplay": 20,
//     "overallRankDisplay": 4,
//     "nctCountRank": 5,
//     "piCountRank": 2,
//     "projectCountRank": 11,
//     "fundingRank": 20,
//     "interverntionCountRank": 3,
//     "physicianCountRank": 66,
//     "lmID": "18",
//     "nihPiCount": 33,
//     "interverntionCount": 85,
//     "nctPiCount": 72,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "SAINT LOUIS MO",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 40.789474,
//     "nctCountRankDisplay": 5,
//     "bedNum": "1243",
//     "descrp": "Barnes-Jewish Hospital at Washington University Medical Center is the largest hospital in Missouri and the largest private employer in the St. Louis region.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Barnes-Jewish Hospital at Washington University Medical Center is the largest hospital in Missouri and the largest private employer in the St. Louis region. An affiliated teaching hospital of Washington University School of Medicine, Barnes-Jewish Hospital has a 1,800 member medical staff with many who are recognized as \"Best Doctors in America.\" They are supported by residents, interns and fellows, in addition to nurses, technicians and other health-care professionals.\r\n",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "West North Central",
//     "name": "BARNES-JEWISH HOSPITAL",
//     "state": "MO"
//   },
//   {
//     "year": "1811",
//     "shortName": "MGH",
//     "piCount": 54,
//     "nctCount": 30,
//     "projectCount": 152,
//     "funding": 46202204,
//     "overallSCoreDisplay": 77,
//     "logUrl": "mgh.png",
//     "overallRank": 5,
//     "city": "Boston",
//     "overallSCore": 62,
//     "cnName": "麻省总医院",
//     "interverntionCountRadarScore": 25.70281,
//     "interverntionCountRankDisplay": 7,
//     "projectCountRadarScore": 26.206896,
//     "projectCountRankDisplay": 10,
//     "piCountRadarScore": 46.551723,
//     "piCountRankDisplay": 5,
//     "fundingRadarScore": 27.949467,
//     "fundingRankDisplay": 11,
//     "overallRankDisplay": 5,
//     "nctCountRank": 6,
//     "piCountRank": 6,
//     "projectCountRank": 10,
//     "fundingRank": 11,
//     "interverntionCountRank": 7,
//     "physicianCountRank": 35,
//     "lmID": "3",
//     "nihPiCount": 33,
//     "interverntionCount": 64,
//     "nctPiCount": 21,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "BOSTON MA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 39.473686,
//     "nctCountRankDisplay": 6,
//     "bedNum": "999",
//     "descrp": "Massachusetts General Hospital is consistently ranked among the top hospitals in America. Mass General is is the original and largest teaching hospital of Harvard Medical School, where nearly all of our staff physicians serve on the faculty.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Massachusetts General Hospital, a leading medical center located in the heart of Boston, is consistently ranked among the top hospitals in America. Mass General is the original and largest teaching hospital of Harvard Medical School, where nearly all of our staff physicians serve on the faculty. Mass General trains the next generation of medical and scientific leaders and conducts the largest hospital-based research program in the United States.\r\n\r\nWe are committed to delivering the most advanced and compassionate care, pushing the boundaries of medicine, educating the next generation of care providers and researchers, and making a difference in the health of the communities we serve – locally and around the world.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "New England",
//     "name": "MASSACHUSETTS GENERAL HOSPITAL",
//     "state": "MA"
//   },
//   {
//     "year": "1900",
//     "shortName": "STANFORD",
//     "piCount": 40,
//     "nctCount": 23,
//     "projectCount": 153,
//     "funding": 58026152,
//     "overallSCoreDisplay": 75,
//     "logUrl": "stanford.png",
//     "overallRank": 6,
//     "city": "Stanford",
//     "overallSCore": 62,
//     "cnName": "斯坦福大学医学中心",
//     "interverntionCountRadarScore": 22.48996,
//     "interverntionCountRankDisplay": 9,
//     "projectCountRadarScore": 26.37931,
//     "projectCountRankDisplay": 9,
//     "piCountRadarScore": 34.482758,
//     "piCountRankDisplay": 14,
//     "fundingRadarScore": 35.102222,
//     "fundingRankDisplay": 8,
//     "overallRankDisplay": 6,
//     "nctCountRank": 10,
//     "piCountRank": 14,
//     "projectCountRank": 9,
//     "fundingRank": 8,
//     "interverntionCountRank": 9,
//     "physicianCountRank": 42,
//     "lmID": "21",
//     "nihPiCount": 31,
//     "interverntionCount": 56,
//     "nctPiCount": 9,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "STANFORD CA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 30.263159,
//     "nctCountRankDisplay": 10,
//     "bedNum": "0",
//     "descrp": "Stanford Health Care is an academic health system and part of Stanford Medicine, which includes the Stanford University School of Medicine and Lucile Packard Children's Hospital Stanford\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Stanford Health Care is an academic health system and part of Stanford Medicine, which includes the Stanford University School of Medicine and Lucile Packard Children's Hospital Stanford\r\n",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Pacific",
//     "name": "STANFORD HOSPITAL",
//     "state": "CA"
//   },
//   {
//     "year": "1844",
//     "shortName": "MSKCC",
//     "piCount": 47,
//     "nctCount": 40,
//     "projectCount": 116,
//     "funding": 43267184,
//     "overallSCoreDisplay": 73,
//     "logUrl": "MSK.png",
//     "overallRank": 7,
//     "city": "New York City",
//     "overallSCore": 60,
//     "cnName": "斯隆-凯特琳癌症中心",
//     "interverntionCountRadarScore": 28.11245,
//     "interverntionCountRankDisplay": 6,
//     "projectCountRadarScore": 20.0,
//     "projectCountRankDisplay": 17,
//     "piCountRadarScore": 40.517242,
//     "piCountRankDisplay": 10,
//     "fundingRadarScore": 26.173962,
//     "fundingRankDisplay": 13,
//     "overallRankDisplay": 7,
//     "nctCountRank": 3,
//     "piCountRank": 10,
//     "projectCountRank": 17,
//     "fundingRank": 13,
//     "interverntionCountRank": 6,
//     "physicianCountRank": 29,
//     "lmID": "1",
//     "nihPiCount": 36,
//     "interverntionCount": 70,
//     "nctPiCount": 11,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "NEW YORK NY",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 52.63158,
//     "nctCountRankDisplay": 3,
//     "bedNum": "471",
//     "descrp": "Memorial Sloan Kettering Cancer Center — the world’s oldest and largest private cancer center — has devoted more than 130 years to exceptional patient care, innovative research.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Memorial Sloan Kettering Cancer Center — the world’s oldest and largest private cancer center — has devoted more than 130 years to exceptional patient care, innovative research, and outstanding educational programs. Today, we are one of 45 National Cancer Institute–designated Comprehensive Cancer Centers, with state-of-the-art science flourishing side by side with clinical studies and treatment.\r\n\r\nThe close collaboration between our physicians and scientists is one of our unique strengths, enabling us to provide patients with the best care available as we work to discover more-effective strategies to prevent, control, and ultimately cure cancer in the future. Our education programs train future physicians and scientists, and the knowledge and experience they gain at Memorial Sloan Kettering has an impact on cancer treatment and biomedical research around the world.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "MEMORIAL SLOAN KETTERING CANCER CENTER",
//     "state": "NY"
//   },
//   {
//     "year": "1998",
//     "shortName": "NYP",
//     "piCount": 52,
//     "nctCount": 27,
//     "projectCount": 136,
//     "funding": 48759720,
//     "overallSCoreDisplay": 70,
//     "logUrl": "NYP.png",
//     "overallRank": 8,
//     "city": "New York City",
//     "overallSCore": 62,
//     "cnName": "纽约长老会医院",
//     "interverntionCountRadarScore": 13.654618,
//     "interverntionCountRankDisplay": 17,
//     "projectCountRadarScore": 23.448277,
//     "projectCountRankDisplay": 13,
//     "piCountRadarScore": 44.827587,
//     "piCountRankDisplay": 7,
//     "fundingRadarScore": 29.496605,
//     "fundingRankDisplay": 10,
//     "overallRankDisplay": 8,
//     "nctCountRank": 8,
//     "piCountRank": 7,
//     "projectCountRank": 13,
//     "fundingRank": 10,
//     "interverntionCountRank": 17,
//     "physicianCountRank": 19,
//     "lmID": "11",
//     "nihPiCount": 38,
//     "interverntionCount": 34,
//     "nctPiCount": 14,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "NEW YORK NY",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 35.526314,
//     "nctCountRankDisplay": 8,
//     "bedNum": "2600",
//     "descrp": "NewYork-Presbyterian is one of the nation’s most comprehensive, integrated academic health care delivery systems, dedicated to providing the highest quality, most compassionate care and service to patients in the New York metropolitan area, nationally, and throughout the globe.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "NewYork-Presbyterian is one of the nation’s most comprehensive, integrated academic health care delivery systems, dedicated to providing the highest quality, most compassionate care and service to patients in the New York metropolitan area, nationally, and throughout the globe. In collaboration with two renowned medical schools, Weill Cornell Medicine and Columbia University College of Physicians and Surgeons, NewYork-Presbyterian is consistently recognized as a leader in medical education, groundbreaking research, and innovative, patient-centered clinical care.\r\n",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "NEW YORK-PRESBYTERIAN HOSPITAL",
//     "state": "NY"
//   },
//   {
//     "year": "1980",
//     "shortName": "DFCI",
//     "piCount": 51,
//     "nctCount": 29,
//     "projectCount": 135,
//     "funding": 45782726,
//     "overallSCoreDisplay": 66,
//     "logUrl": "BWH.png",
//     "overallRank": 9,
//     "city": "Boston",
//     "overallSCore": 50,
//     "cnName": "布列根妇女医院",
//     "interverntionCountRadarScore": 20.080322,
//     "interverntionCountRankDisplay": 11,
//     "projectCountRadarScore": 23.275862,
//     "projectCountRankDisplay": 14,
//     "piCountRadarScore": 43.96552,
//     "piCountRankDisplay": 8,
//     "fundingRadarScore": 27.69571,
//     "fundingRankDisplay": 12,
//     "overallRankDisplay": 9,
//     "nctCountRank": 7,
//     "piCountRank": 8,
//     "projectCountRank": 14,
//     "fundingRank": 12,
//     "interverntionCountRank": 11,
//     "physicianCountRank": 58,
//     "lmID": "13",
//     "nihPiCount": 33,
//     "interverntionCount": 50,
//     "nctPiCount": 18,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "BOSTON MA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 38.157894,
//     "nctCountRankDisplay": 7,
//     "bedNum": "793",
//     "descrp": "Boston's Brigham and Women's Hospital (BWH) is an international leader in virtually every area of medicine and has been the site of pioneering breakthroughs that have improved lives around the world.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Boston's Brigham and Women's Hospital (BWH) is an international leader in virtually every area of medicine and has been the site of pioneering breakthroughs that have improved lives around the world. A major teaching hospital of Harvard Medical School, BWH has a legacy of excellence that continues to grow year after year. Brigham and Women’s Health Care – the parent corporation for Brigham and Women’s Hospital, Brigham and Women’s Faulkner Hospital and the Brigham and Women’s Physician Organization – includes 150 outpatient practices with over 1,200 physicians. We serve patients from New England, throughout the United States, and from 120 countries around the world.\r\n",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "New England",
//     "name": "BRIGHAM AND WOMEN'S HOSPITAL/DANA-FARBER CANCER CENTER",
//     "state": "MA"
//   },
//   {
//     "year": "1874",
//     "shortName": "PENN",
//     "piCount": 46,
//     "nctCount": 27,
//     "projectCount": 139,
//     "funding": 31979863,
//     "overallSCoreDisplay": 66,
//     "logUrl": "PennMed.png",
//     "overallRank": 10,
//     "city": "Philadelphia",
//     "overallSCore": 54,
//     "cnName": "宾夕法尼亚大学长老会医院",
//     "interverntionCountRadarScore": 24.497992,
//     "interverntionCountRankDisplay": 8,
//     "projectCountRadarScore": 23.965517,
//     "projectCountRankDisplay": 12,
//     "piCountRadarScore": 39.655174,
//     "piCountRankDisplay": 11,
//     "fundingRadarScore": 19.345833,
//     "fundingRankDisplay": 19,
//     "overallRankDisplay": 9,
//     "nctCountRank": 9,
//     "piCountRank": 12,
//     "projectCountRank": 12,
//     "fundingRank": 19,
//     "interverntionCountRank": 8,
//     "physicianCountRank": 25,
//     "lmID": "20",
//     "nihPiCount": 42,
//     "interverntionCount": 61,
//     "nctPiCount": 4,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "PHILADELPHIA PA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 35.526314,
//     "nctCountRankDisplay": 8,
//     "bedNum": "0",
//     "descrp": "Penn Medicine has pioneered medical frontiers with a staff comprised of innovators who have dedicated their lives to advancing medicine through excellence in education, research and patient care.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Penn Medicine's history of patient care began more than two centuries ago with the founding of the nation’s first hospital, Pennsylvania Hospital, in 1751 and the nation's first medical school at the University of Pennsylvania in 1765. Penn Medicine has pioneered medical frontiers with a staff comprised of innovators who have dedicated their lives to advancing medicine through excellence in education, research and patient care.\r\n\r\nWhen you choose Penn Medicine, you benefit from more than two centuries of the highest standards in patient care, education and research. The caliber of comfort and individual attention you receive is unmatched by any other hospital in the Mid-Atlantic region.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "PENN PRESBYTERIAN MEDICAL CENTER",
//     "state": "PA"
//   },
//   {
//     "year": "1899",
//     "shortName": "UCSF",
//     "piCount": 46,
//     "nctCount": 14,
//     "projectCount": 163,
//     "funding": 76375512,
//     "overallSCoreDisplay": 65,
//     "logUrl": "UCSF.png",
//     "overallRank": 11,
//     "city": "San Francisco",
//     "overallSCore": 60,
//     "cnName": "加州大学旧金山分校医学中心",
//     "interverntionCountRadarScore": 11.24498,
//     "interverntionCountRankDisplay": 22,
//     "projectCountRadarScore": 28.103447,
//     "projectCountRankDisplay": 7,
//     "piCountRadarScore": 39.655174,
//     "piCountRankDisplay": 11,
//     "fundingRadarScore": 46.202446,
//     "fundingRankDisplay": 5,
//     "overallRankDisplay": 11,
//     "nctCountRank": 18,
//     "piCountRank": 11,
//     "projectCountRank": 7,
//     "fundingRank": 5,
//     "interverntionCountRank": 22,
//     "physicianCountRank": 8,
//     "lmID": "8",
//     "nihPiCount": 44,
//     "interverntionCount": 28,
//     "nctPiCount": 2,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "SAN FRANCISCO CA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 18.421053,
//     "nctCountRankDisplay": 18,
//     "bedNum": "796",
//     "descrp": "The University of California, San Francisco Medical Center is a hospital in research and a teaching hospital in San Francisco, California. It is one of the leading hospitals in the United States and with the UCSF School of Medicine has been the site of various breakthroughs in all specialties of medicine. Patients with complex diseases from around the world seek treatment at UCSF Medical Center.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "The University of California, San Francisco Medical Center is a hospital in research and a teaching hospital in San Francisco, California. It is one of the leading hospitals in the United States and with the UCSF School of Medicine has been the site of various breakthroughs in all specialties of medicine. Patients with complex diseases from around the world seek treatment at UCSF Medical Center.\r\n",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Pacific",
//     "name": "UCSF MEDICAL CENTER",
//     "state": "CA"
//   },
//   {
//     "year": "1850",
//     "shortName": "UMHS",
//     "piCount": 65,
//     "nctCount": 1,
//     "projectCount": 277,
//     "funding": 74779153,
//     "overallSCoreDisplay": 59,
//     "logUrl": "MichiganMedicine.jpg",
//     "overallRank": 12,
//     "city": "Ann Arbor",
//     "overallSCore": 42,
//     "cnName": "密西根大学医学中心",
//     "interverntionCountRadarScore": 0.4016064,
//     "interverntionCountRankDisplay": 53,
//     "projectCountRadarScore": 47.75862,
//     "projectCountRankDisplay": 5,
//     "piCountRadarScore": 56.03448,
//     "piCountRankDisplay": 4,
//     "fundingRadarScore": 45.236748,
//     "fundingRankDisplay": 6,
//     "overallRankDisplay": 12,
//     "nctCountRank": 57,
//     "piCountRank": 4,
//     "projectCountRank": 5,
//     "fundingRank": 6,
//     "interverntionCountRank": 55,
//     "physicianCountRank": 61,
//     "lmID": "23",
//     "nihPiCount": 65,
//     "interverntionCount": 1,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "ANN ARBOR MI",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 1.3157895,
//     "nctCountRankDisplay": 54,
//     "bedNum": "1000",
//     "descrp": "Michigan Medicine is the wholly owned academic medical center of the UMich in Ann Arbor. It includes the U-M Medical School, the U-M hospitals and health centers; the clinical programs of the U-M School of Nursing; and the activities of the Michigan Health Corporation.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Michigan Medicine is the wholly owned academic medical center of the University of Michigan in Ann Arbor. It includes the U-M Medical School, with its faculty group practice and many research laboratories; the U-M hospitals and health centers, which include University Hospital, C.S. Mott Children's Hospital, Von Voigtlander Women's Hospital, as well as approximately 40 health centers and home care services across southeast Michigan; the clinical programs of the U-M School of Nursing; and the activities of the Michigan Health Corporation, through which U-M partners with other medical centers and hospitals to provide specialized care throughout Michigan.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "East North Central",
//     "name": "MICHIGAN MEDICINE",
//     "state": "MI"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 36,
//     "nctCount": 13,
//     "projectCount": 172,
//     "funding": 67467461,
//     "overallSCoreDisplay": 58,
//     "logUrl": "uab.png",
//     "overallRank": 13,
//     "city": "Birmingham AB",
//     "overallSCore": 50,
//     "cnName": "UAB Medicine-UAB Hospital",
//     "interverntionCountRadarScore": 6.4257026,
//     "interverntionCountRankDisplay": 31,
//     "projectCountRadarScore": 29.655174,
//     "projectCountRankDisplay": 6,
//     "piCountRadarScore": 31.034481,
//     "piCountRankDisplay": 15,
//     "fundingRadarScore": 40.81363,
//     "fundingRankDisplay": 7,
//     "overallRankDisplay": 13,
//     "nctCountRank": 22,
//     "piCountRank": 15,
//     "projectCountRank": 6,
//     "fundingRank": 7,
//     "interverntionCountRank": 31,
//     "physicianCountRank": 13,
//     "lmID": "52",
//     "nihPiCount": 32,
//     "interverntionCount": 16,
//     "nctPiCount": 4,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "BIRMINGHAM AL",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 17.105263,
//     "nctCountRankDisplay": 22,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "East South Central",
//     "name": "UAB Medicine-UAB Hospital",
//     "state": "AL"
//   },
//   {
//     "year": "1893",
//     "shortName": "UPMC",
//     "piCount": 28,
//     "nctCount": 20,
//     "projectCount": 108,
//     "funding": 32265172,
//     "overallSCoreDisplay": 58,
//     "logUrl": "UPMC.png",
//     "overallRank": 14,
//     "city": "Pittsburgh",
//     "overallSCore": 56,
//     "cnName": "匹兹堡大学医学中心",
//     "interverntionCountRadarScore": 15.261044,
//     "interverntionCountRankDisplay": 14,
//     "projectCountRadarScore": 18.62069,
//     "projectCountRankDisplay": 18,
//     "piCountRadarScore": 24.13793,
//     "piCountRankDisplay": 18,
//     "fundingRadarScore": 19.518427,
//     "fundingRankDisplay": 18,
//     "overallRankDisplay": 13,
//     "nctCountRank": 12,
//     "piCountRank": 18,
//     "projectCountRank": 18,
//     "fundingRank": 18,
//     "interverntionCountRank": 14,
//     "physicianCountRank": 4,
//     "lmID": "9",
//     "nihPiCount": 27,
//     "interverntionCount": 38,
//     "nctPiCount": 1,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "PITTSBURGH PA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 26.31579,
//     "nctCountRankDisplay": 12,
//     "bedNum": "0",
//     "descrp": "We are committed to delivering the most advanced and compassionate care, pushing the boundaries of medicine, educating the next generation of care providers and researchers, a\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "UPMC, a world-renowned health care provider and insurer based in Pittsburgh, Pa., is inventing new models of accountable, cost-effective, patient-centered care.\r\n\r\nUPMC operates more than 20 academic, community, and specialty hospitals, more than 500 doctors' offices and outpatient sites, employs 3,500 physicians, and offers an array of rehabilitation, retirement, and long-term care facilities.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "UPMC",
//     "state": "PA"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 43,
//     "nctCount": 0,
//     "projectCount": 406,
//     "funding": 111366068,
//     "overallSCoreDisplay": 55,
//     "logUrl": "Nebraska_medicine.png",
//     "overallRank": 15,
//     "city": "Omaha NE",
//     "overallSCore": 42,
//     "cnName": "Nebraska Medicine-Nebraska Medical Center",
//     "interverntionCountRadarScore": 0.0,
//     "interverntionCountRankDisplay": 56,
//     "projectCountRadarScore": 70.0,
//     "projectCountRankDisplay": 2,
//     "piCountRadarScore": 37.068966,
//     "piCountRankDisplay": 13,
//     "fundingRadarScore": 67.36955,
//     "fundingRankDisplay": 3,
//     "overallRankDisplay": 15,
//     "nctCountRank": 65,
//     "piCountRank": 13,
//     "projectCountRank": 2,
//     "fundingRank": 3,
//     "interverntionCountRank": 65,
//     "physicianCountRank": 45,
//     "lmID": "36",
//     "nihPiCount": 43,
//     "interverntionCount": 0,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "OMAHA NE",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 0.0,
//     "nctCountRankDisplay": 58,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "West North Central",
//     "name": "Nebraska Medicine-Nebraska Medical Center",
//     "state": "NE"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 49,
//     "nctCount": 0,
//     "projectCount": 158,
//     "funding": 57768535,
//     "overallSCoreDisplay": 54,
//     "logUrl": "UNC-health-care-logo-circle.png",
//     "overallRank": 16,
//     "city": "Chapel Hill NC",
//     "overallSCore": 41,
//     "cnName": "UNC Health-UNC Medical Center",
//     "interverntionCountRadarScore": 0.0,
//     "interverntionCountRankDisplay": 56,
//     "projectCountRadarScore": 27.241379,
//     "projectCountRankDisplay": 8,
//     "piCountRadarScore": 42.24138,
//     "piCountRankDisplay": 9,
//     "fundingRadarScore": 34.94638,
//     "fundingRankDisplay": 9,
//     "overallRankDisplay": 16,
//     "nctCountRank": 62,
//     "piCountRank": 9,
//     "projectCountRank": 8,
//     "fundingRank": 9,
//     "interverntionCountRank": 62,
//     "physicianCountRank": 27,
//     "lmID": "61",
//     "nihPiCount": 49,
//     "interverntionCount": 0,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "CHAPEL HILL NC",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 0.0,
//     "nctCountRankDisplay": 58,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "South Atlantic",
//     "name": "UNC Health-UNC Medical Center",
//     "state": "NC"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 27,
//     "nctCount": 4,
//     "projectCount": 95,
//     "funding": 37988267,
//     "overallSCoreDisplay": 45,
//     "logUrl": "OSUWMC-James.png",
//     "overallRank": 17,
//     "city": "Columbus OH",
//     "overallSCore": 33,
//     "cnName": "Ohio State University Comprehensive Cancer Center - Arthur G. James Cancer Hospital",
//     "interverntionCountRadarScore": 2.4096384,
//     "interverntionCountRankDisplay": 50,
//     "projectCountRadarScore": 16.37931,
//     "projectCountRankDisplay": 21,
//     "piCountRadarScore": 23.275862,
//     "piCountRankDisplay": 19,
//     "fundingRadarScore": 22.980545,
//     "fundingRankDisplay": 15,
//     "overallRankDisplay": 17,
//     "nctCountRank": 46,
//     "piCountRank": 20,
//     "projectCountRank": 21,
//     "fundingRank": 15,
//     "interverntionCountRank": 50,
//     "physicianCountRank": 30,
//     "lmID": "51",
//     "nihPiCount": 27,
//     "interverntionCount": 6,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "COLUMBUS OH",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 5.263158,
//     "nctCountRankDisplay": 44,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "East North Central",
//     "name": "Ohio State University Comprehensive Cancer Center - Arthur G. James Cancer Hospital",
//     "state": "OH"
//   },
//   {
//     "year": "1900",
//     "shortName": "IU HEALTH",
//     "piCount": 26,
//     "nctCount": 17,
//     "projectCount": 97,
//     "funding": 22714179,
//     "overallSCoreDisplay": 45,
//     "logUrl": "IU-Health.jpg",
//     "overallRank": 18,
//     "city": "Indianapolis",
//     "overallSCore": 29,
//     "cnName": "印第安纳大学医院",
//     "interverntionCountRadarScore": 10.040161,
//     "interverntionCountRankDisplay": 23,
//     "projectCountRadarScore": 16.724138,
//     "projectCountRankDisplay": 20,
//     "piCountRadarScore": 22.413794,
//     "piCountRankDisplay": 21,
//     "fundingRadarScore": 13.740669,
//     "fundingRankDisplay": 23,
//     "overallRankDisplay": 17,
//     "nctCountRank": 14,
//     "piCountRank": 22,
//     "projectCountRank": 20,
//     "fundingRank": 23,
//     "interverntionCountRank": 23,
//     "physicianCountRank": 52,
//     "lmID": "28",
//     "nihPiCount": 25,
//     "interverntionCount": 25,
//     "nctPiCount": 1,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "INDIANAPOLIS IN",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 22.368422,
//     "nctCountRankDisplay": 14,
//     "bedNum": "625",
//     "descrp": "Indiana University",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Indiana University Health is the largest and most comprehensive healthcare system in Indiana, with 15 hospitals under its IU Health brand and almost 30,000 employees. It has a partnership with Indiana University School of Medicine.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "East North Central",
//     "name": "INDIANA UNIVERSITY HEALTH",
//     "state": "IN"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 14,
//     "nctCount": 15,
//     "projectCount": 59,
//     "funding": 18873870,
//     "overallSCoreDisplay": 45,
//     "logUrl": "logo-emory.png",
//     "overallRank": 19,
//     "city": "Atlanta GA",
//     "overallSCore": 29,
//     "cnName": "Emory University Hospital",
//     "interverntionCountRadarScore": 12.4498,
//     "interverntionCountRankDisplay": 18,
//     "projectCountRadarScore": 10.172414,
//     "projectCountRankDisplay": 30,
//     "piCountRadarScore": 12.068965,
//     "piCountRankDisplay": 41,
//     "fundingRadarScore": 11.4175205,
//     "fundingRankDisplay": 26,
//     "overallRankDisplay": 17,
//     "nctCountRank": 17,
//     "piCountRank": 41,
//     "projectCountRank": 30,
//     "fundingRank": 26,
//     "interverntionCountRank": 18,
//     "physicianCountRank": 60,
//     "lmID": "68",
//     "nihPiCount": 13,
//     "interverntionCount": 31,
//     "nctPiCount": 1,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "ATLANTA GA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 19.736843,
//     "nctCountRankDisplay": 17,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "South Atlantic",
//     "name": "Emory University Hospital",
//     "state": "GA"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 23,
//     "nctCount": 14,
//     "projectCount": 59,
//     "funding": 12426520,
//     "overallSCoreDisplay": 45,
//     "logUrl": "Keck.jpg",
//     "overallRank": 20,
//     "city": "Los Angeles CA",
//     "overallSCore": 33,
//     "cnName": "Keck Medicine of USC - Keck Hospital of USC",
//     "interverntionCountRadarScore": 12.4498,
//     "interverntionCountRankDisplay": 18,
//     "projectCountRadarScore": 10.172414,
//     "projectCountRankDisplay": 30,
//     "piCountRadarScore": 19.827587,
//     "piCountRankDisplay": 23,
//     "fundingRadarScore": 7.517274,
//     "fundingRankDisplay": 34,
//     "overallRankDisplay": 17,
//     "nctCountRank": 20,
//     "piCountRank": 25,
//     "projectCountRank": 31,
//     "fundingRank": 34,
//     "interverntionCountRank": 20,
//     "physicianCountRank": 32,
//     "lmID": "31",
//     "nihPiCount": 16,
//     "interverntionCount": 31,
//     "nctPiCount": 7,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "LOS ANGELES CA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 18.421053,
//     "nctCountRankDisplay": 18,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Pacific",
//     "name": "Keck Medicine of USC - Keck Hospital of USC",
//     "state": "CA"
//   },
//   {
//     "year": "1825",
//     "shortName": "THOMAS JEFFERSON",
//     "piCount": 22,
//     "nctCount": 16,
//     "projectCount": 46,
//     "funding": 11958671,
//     "overallSCoreDisplay": 45,
//     "logUrl": "Jefferson.jpg",
//     "overallRank": 21,
//     "city": "Philadelphia",
//     "overallSCore": 33,
//     "cnName": "托马斯杰斐逊大学医院",
//     "interverntionCountRadarScore": 14.45783,
//     "interverntionCountRankDisplay": 15,
//     "projectCountRadarScore": 7.931034,
//     "projectCountRankDisplay": 36,
//     "piCountRadarScore": 18.965517,
//     "piCountRankDisplay": 26,
//     "fundingRadarScore": 7.234254,
//     "fundingRankDisplay": 35,
//     "overallRankDisplay": 17,
//     "nctCountRank": 15,
//     "piCountRank": 27,
//     "projectCountRank": 36,
//     "fundingRank": 35,
//     "interverntionCountRank": 15,
//     "physicianCountRank": 50,
//     "lmID": "26",
//     "nihPiCount": 16,
//     "interverntionCount": 36,
//     "nctPiCount": 6,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "PHILADELPHIA PA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 21.052631,
//     "nctCountRankDisplay": 15,
//     "bedNum": "957",
//     "descrp": "Formed in 1825 as the Infirmary of the Jefferson Medical College, the predecessor of the Hospital of Jefferson Medical College, Thomas Jefferson University Hospital serves patients in Philadelphia and the surrounding communities in the Delaware Valley and southern New Jersey.",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Formed in 1825 as the Infirmary of the Jefferson Medical College, the predecessor of the Hospital of Jefferson Medical College, Thomas Jefferson University Hospital serves patients in Philadelphia and the surrounding communities in the Delaware Valley and southern New Jersey.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "THOMAS JEFFERSON UNIVERSITY HOSPITAL",
//     "state": "PA"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 10,
//     "nctCount": 11,
//     "projectCount": 27,
//     "funding": 4937426,
//     "overallSCoreDisplay": 45,
//     "logUrl": "Roswell_park_cancer_inst.png",
//     "overallRank": 22,
//     "city": "Buffalo NY",
//     "overallSCore": 29,
//     "cnName": "Roswell Park Cancer Institute",
//     "interverntionCountRadarScore": 20.883535,
//     "interverntionCountRankDisplay": 10,
//     "projectCountRadarScore": 4.6551723,
//     "projectCountRankDisplay": 47,
//     "piCountRadarScore": 8.620689,
//     "piCountRankDisplay": 45,
//     "fundingRadarScore": 2.9868364,
//     "fundingRankDisplay": 50,
//     "overallRankDisplay": 17,
//     "nctCountRank": 24,
//     "piCountRank": 47,
//     "projectCountRank": 47,
//     "fundingRank": 50,
//     "interverntionCountRank": 10,
//     "physicianCountRank": 63,
//     "lmID": "48",
//     "nihPiCount": 9,
//     "interverntionCount": 52,
//     "nctPiCount": 1,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "BUFFALO NY",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 14.473684,
//     "nctCountRankDisplay": 23,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "Roswell Park Cancer Institute",
//     "state": "NY"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 29,
//     "nctCount": 14,
//     "projectCount": 39,
//     "funding": 4830959,
//     "overallSCoreDisplay": 45,
//     "logUrl": "GWU_hospital.png",
//     "overallRank": 23,
//     "city": "Washington DC",
//     "overallSCore": 41,
//     "cnName": "MedStar Georgetown University Hospital/Georgetown University Medical Center",
//     "interverntionCountRadarScore": 12.4498,
//     "interverntionCountRankDisplay": 18,
//     "projectCountRadarScore": 6.724138,
//     "projectCountRankDisplay": 41,
//     "piCountRadarScore": 25.0,
//     "piCountRankDisplay": 17,
//     "fundingRadarScore": 2.9224305,
//     "fundingRankDisplay": 52,
//     "overallRankDisplay": 17,
//     "nctCountRank": 19,
//     "piCountRank": 17,
//     "projectCountRank": 41,
//     "fundingRank": 52,
//     "interverntionCountRank": 19,
//     "physicianCountRank": 9,
//     "lmID": "45",
//     "nihPiCount": 18,
//     "interverntionCount": 31,
//     "nctPiCount": 11,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "WASHINGTON DC",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 18.421053,
//     "nctCountRankDisplay": 18,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "South Atlantic",
//     "name": "MedStar Georgetown University Hospital/Georgetown University Medical Center",
//     "state": "DC"
//   },
//   {
//     "year": "1841",
//     "shortName": "LONGONE",
//     "piCount": 27,
//     "nctCount": 0,
//     "projectCount": 122,
//     "funding": 40741459,
//     "overallSCoreDisplay": 41,
//     "logUrl": "NYU_langone.png",
//     "overallRank": 24,
//     "city": "New York City",
//     "overallSCore": 40,
//     "cnName": "纽约大学朗格尼医学中心",
//     "interverntionCountRadarScore": 0.0,
//     "interverntionCountRankDisplay": 56,
//     "projectCountRadarScore": 21.034483,
//     "projectCountRankDisplay": 16,
//     "piCountRadarScore": 23.275862,
//     "piCountRankDisplay": 19,
//     "fundingRadarScore": 24.646055,
//     "fundingRankDisplay": 14,
//     "overallRankDisplay": 24,
//     "nctCountRank": 59,
//     "piCountRank": 19,
//     "projectCountRank": 16,
//     "fundingRank": 14,
//     "interverntionCountRank": 59,
//     "physicianCountRank": 5,
//     "lmID": "17",
//     "nihPiCount": 27,
//     "interverntionCount": 0,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "NEW YORK NY",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 0.0,
//     "nctCountRankDisplay": 58,
//     "bedNum": "1069",
//     "descrp": "NYU Langone's trifold mission to serve, teach, and discover is achieved daily through an integrated academic culture devoted to excellence in patient care, education, and research.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "NYU Langone is one of the nation’s premier academic medical centers. Our trifold mission to serve, teach, and discover is achieved daily through an integrated academic culture devoted to excellence in patient care, education, and research.\r\n",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Middle Atlantic",
//     "name": "NYU LANGONE MEDICAL CENTER",
//     "state": "NY"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 17,
//     "nctCount": 8,
//     "projectCount": 75,
//     "funding": 33143452,
//     "overallSCoreDisplay": 41,
//     "logUrl": "BSLMC.png",
//     "overallRank": 25,
//     "city": "Houston TX",
//     "overallSCore": 29,
//     "cnName": "Baylor St. Luke’s Medical Center",
//     "interverntionCountRadarScore": 5.220884,
//     "interverntionCountRankDisplay": 37,
//     "projectCountRadarScore": 12.931034,
//     "projectCountRankDisplay": 25,
//     "piCountRadarScore": 14.655172,
//     "piCountRankDisplay": 38,
//     "fundingRadarScore": 20.049732,
//     "fundingRankDisplay": 17,
//     "overallRankDisplay": 24,
//     "nctCountRank": 31,
//     "piCountRank": 38,
//     "projectCountRank": 25,
//     "fundingRank": 17,
//     "interverntionCountRank": 37,
//     "physicianCountRank": 21,
//     "lmID": "41",
//     "nihPiCount": 17,
//     "interverntionCount": 13,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "HOUSTON TX",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 10.526316,
//     "nctCountRankDisplay": 31,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "West South Central",
//     "name": "Baylor St. Luke’s Medical Center",
//     "state": "TX"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 18,
//     "nctCount": 8,
//     "projectCount": 105,
//     "funding": 22500513,
//     "overallSCoreDisplay": 41,
//     "logUrl": "fairview.png",
//     "overallRank": 26,
//     "city": "Minneapolis MN",
//     "overallSCore": 29,
//     "cnName": "M Health Fairview University of Minnesota Medical Center ",
//     "interverntionCountRadarScore": 7.630522,
//     "interverntionCountRankDisplay": 28,
//     "projectCountRadarScore": 18.103447,
//     "projectCountRankDisplay": 19,
//     "piCountRadarScore": 15.517241,
//     "piCountRankDisplay": 34,
//     "fundingRadarScore": 13.611414,
//     "fundingRankDisplay": 24,
//     "overallRankDisplay": 24,
//     "nctCountRank": 32,
//     "piCountRank": 34,
//     "projectCountRank": 19,
//     "fundingRank": 24,
//     "interverntionCountRank": 30,
//     "physicianCountRank": 28,
//     "lmID": "59",
//     "nihPiCount": 18,
//     "interverntionCount": 19,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "MINNEAPOLIS MN",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 10.526316,
//     "nctCountRankDisplay": 31,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "West North Central",
//     "name": "M Health Fairview University of Minnesota Medical Center ",
//     "state": "MN"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 14,
//     "nctCount": 9,
//     "projectCount": 52,
//     "funding": 18509707,
//     "overallSCoreDisplay": 41,
//     "logUrl": "karmanos.png",
//     "overallRank": 27,
//     "city": "Detroit MI",
//     "overallSCore": 29,
//     "cnName": "Barbara Ann Karmanos Cancer Institute",
//     "interverntionCountRadarScore": 14.45783,
//     "interverntionCountRankDisplay": 15,
//     "projectCountRadarScore": 8.965518,
//     "projectCountRankDisplay": 33,
//     "piCountRadarScore": 12.068965,
//     "piCountRankDisplay": 41,
//     "fundingRadarScore": 11.197225,
//     "fundingRankDisplay": 27,
//     "overallRankDisplay": 24,
//     "nctCountRank": 29,
//     "piCountRank": 42,
//     "projectCountRank": 33,
//     "fundingRank": 27,
//     "interverntionCountRank": 16,
//     "physicianCountRank": 40,
//     "lmID": "67",
//     "nihPiCount": 11,
//     "interverntionCount": 36,
//     "nctPiCount": 3,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "DETROIT MI",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 11.842106,
//     "nctCountRankDisplay": 28,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "East North Central",
//     "name": "Barbara Ann Karmanos Cancer Institute",
//     "state": "MI"
//   },
//   {
//     "year": "1925",
//     "shortName": "DUKE",
//     "piCount": 19,
//     "nctCount": 18,
//     "projectCount": 92,
//     "funding": 17372812,
//     "overallSCoreDisplay": 41,
//     "logUrl": "duke.png",
//     "overallRank": 28,
//     "city": "Durham",
//     "overallSCore": 29,
//     "cnName": "杜克大学医学中心",
//     "interverntionCountRadarScore": 12.048193,
//     "interverntionCountRankDisplay": 21,
//     "projectCountRadarScore": 15.862068,
//     "projectCountRankDisplay": 22,
//     "piCountRadarScore": 16.37931,
//     "piCountRankDisplay": 32,
//     "fundingRadarScore": 10.509473,
//     "fundingRankDisplay": 28,
//     "overallRankDisplay": 24,
//     "nctCountRank": 13,
//     "piCountRank": 32,
//     "projectCountRank": 22,
//     "fundingRank": 28,
//     "interverntionCountRank": 21,
//     "physicianCountRank": 37,
//     "lmID": "6",
//     "nihPiCount": 18,
//     "interverntionCount": 30,
//     "nctPiCount": 1,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "DURHAM NC",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 23.684212,
//     "nctCountRankDisplay": 13,
//     "bedNum": "938",
//     "descrp": "Duke Health conceptually integrates the Duke University School of Medicine, Duke-NUS Medical School, Duke University School of Nursing, Duke University Health System, Private Diagnostic Clinic (Duke physicians practice), and incorporates the health and health research programs within the Duke Global Health Institute as well as those in schools and centers across Duke University, including the Duke Robert J. Margolis Center for Health Policy.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "Duke Health conceptually integrates the Duke University School of Medicine, Duke-NUS Medical School, Duke University School of Nursing, Duke University Health System, Private Diagnostic Clinic (Duke physicians practice), and incorporates the health and health research programs within the Duke Global Health Institute as well as those in schools and centers across Duke University, including the Duke Robert J. Margolis Center for Health Policy.\r\n\r\nDuke Health is committed to conducting innovative basic and clinical research, rapidly translating breakthrough discoveries to patient care and population health, providing a unique educational experience to future clinical and scientific leaders, improving the health of populations, and actively seeking policy and intervention-based solutions to complex global health challenges. Underlying these ambitions is a belief that Duke Health is a destination for outstanding people and a dedication to continually explore new ways to help our people grow",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "South Atlantic",
//     "name": "DUKE UNIVERSITY MEDICAL CENTER",
//     "state": "NC"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 36,
//     "nctCount": 21,
//     "projectCount": 8,
//     "funding": 3990584,
//     "overallSCoreDisplay": 41,
//     "logUrl": "Moffitt.png",
//     "overallRank": 29,
//     "city": "Tampa FL",
//     "overallSCore": 40,
//     "cnName": "Moffitt Cancer Center",
//     "interverntionCountRadarScore": 20.080322,
//     "interverntionCountRankDisplay": 11,
//     "projectCountRadarScore": 1.3793104,
//     "projectCountRankDisplay": 57,
//     "piCountRadarScore": 31.034481,
//     "piCountRankDisplay": 15,
//     "fundingRadarScore": 2.4140558,
//     "fundingRankDisplay": 56,
//     "overallRankDisplay": 24,
//     "nctCountRank": 11,
//     "piCountRank": 16,
//     "projectCountRank": 57,
//     "fundingRank": 56,
//     "interverntionCountRank": 12,
//     "physicianCountRank": 3,
//     "lmID": "46",
//     "nihPiCount": 7,
//     "interverntionCount": 50,
//     "nctPiCount": 29,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "TAMPA FL",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 27.631578,
//     "nctCountRankDisplay": 11,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "South Atlantic",
//     "name": "Moffitt Cancer Center",
//     "state": "FL"
//   },
//   {
//     "year": "",
//     "shortName": "",
//     "piCount": 5,
//     "nctCount": 16,
//     "projectCount": 13,
//     "funding": 4636550,
//     "overallSCoreDisplay": 40,
//     "logUrl": "City_of_Hope.png",
//     "overallRank": 30,
//     "city": "Duarte CA",
//     "overallSCore": 23,
//     "cnName": "City of Hope Comprehensive Cancer Center",
//     "interverntionCountRadarScore": 30.522087,
//     "interverntionCountRankDisplay": 4,
//     "projectCountRadarScore": 2.2413795,
//     "projectCountRankDisplay": 55,
//     "piCountRadarScore": 4.3103447,
//     "piCountRankDisplay": 58,
//     "fundingRadarScore": 2.804825,
//     "fundingRankDisplay": 54,
//     "overallRankDisplay": 30,
//     "nctCountRank": 16,
//     "piCountRank": 58,
//     "projectCountRank": 55,
//     "fundingRank": 54,
//     "interverntionCountRank": 4,
//     "physicianCountRank": 51,
//     "lmID": "42",
//     "nihPiCount": 4,
//     "interverntionCount": 76,
//     "nctPiCount": 1,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "DUARTE CA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 21.052631,
//     "nctCountRankDisplay": 15,
//     "bedNum": "",
//     "descrp": "",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Pacific",
//     "name": "City of Hope Comprehensive Cancer Center",
//     "state": "CA"
//   },
//   {
//     "year": "1955",
//     "shortName": "UCLA",
//     "piCount": 26,
//     "nctCount": 0,
//     "projectCount": 135,
//     "funding": 37757869,
//     "overallSCoreDisplay": 37,
//     "logUrl": "UCLA.png",
//     "overallRank": 31,
//     "city": "Los Angeles",
//     "overallSCore": 29,
//     "cnName": "加州大学洛杉矶分校医学中心",
//     "interverntionCountRadarScore": 0.0,
//     "interverntionCountRankDisplay": 56,
//     "projectCountRadarScore": 23.275862,
//     "projectCountRankDisplay": 15,
//     "piCountRadarScore": 22.413794,
//     "piCountRankDisplay": 21,
//     "fundingRadarScore": 22.841167,
//     "fundingRankDisplay": 16,
//     "overallRankDisplay": 31,
//     "nctCountRank": 61,
//     "piCountRank": 21,
//     "projectCountRank": 15,
//     "fundingRank": 16,
//     "interverntionCountRank": 61,
//     "physicianCountRank": 15,
//     "lmID": "10",
//     "nihPiCount": 26,
//     "interverntionCount": 0,
//     "nctPiCount": 0,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "LOS ANGELES CA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 0.0,
//     "nctCountRankDisplay": 58,
//     "bedNum": "520",
//     "descrp": "The UCLA Center for the Health Sciences (CHS) is one of the largest health-science centers in the country and encompasses nearly all of the university's patient care, clinical education and research programs and facilities. \r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "The UCLA Center for the Health Sciences (CHS) is one of the largest health-science centers in the country and encompasses nearly all of the university's patient care, clinical education and research programs and facilities. Boilerplate information about the Center's primary components and links to additional information appear below. \r\n\r\nRonald Reagan UCLA Medical Center in Westwood provides internationally recognized patient care in nearly every medical specialty to more than 380,000 people each year from Los Angeles and around the world. Founded in 1955 as the primary teaching hospital for the UCLA School of Medicine (now the David Geffen School of Medicine at UCLA), the non-profit and self-supporting medical center is operated by the University of California Board of Regents. The new state-of-the-art hospital has 520 large, private patient rooms and employs 1,500 full-time physicians and more than 2,500 support staff. The facility is one of the first total replacement hospitals buil",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Pacific",
//     "name": "UCLA MEDICAL CENTER",
//     "state": "CA"
//   },
//   {
//     "year": "1959",
//     "shortName": "UWMC",
//     "piCount": 21,
//     "nctCount": 6,
//     "projectCount": 68,
//     "funding": 24822366,
//     "overallSCoreDisplay": 37,
//     "logUrl": "UWMC.png",
//     "overallRank": 32,
//     "city": "Seattle",
//     "overallSCore": 33,
//     "cnName": "华盛顿大学医学中心",
//     "interverntionCountRadarScore": 8.032128,
//     "interverntionCountRankDisplay": 27,
//     "projectCountRadarScore": 11.724138,
//     "projectCountRankDisplay": 28,
//     "piCountRadarScore": 18.103447,
//     "piCountRankDisplay": 28,
//     "fundingRadarScore": 15.015991,
//     "fundingRankDisplay": 21,
//     "overallRankDisplay": 31,
//     "nctCountRank": 36,
//     "piCountRank": 28,
//     "projectCountRank": 28,
//     "fundingRank": 21,
//     "interverntionCountRank": 27,
//     "physicianCountRank": 7,
//     "lmID": "15",
//     "nihPiCount": 16,
//     "interverntionCount": 20,
//     "nctPiCount": 5,
//     "physicianCount": 0,
//     "starSR": null,
//     "starAT": null,
//     "starCE": null,
//     "geoCity": "SEATTLE WA",
//     "physicianCountRankDisplay": 1,
//     "nctCountRadarScore": 7.8947363,
//     "nctCountRankDisplay": 36,
//     "bedNum": "450",
//     "descrp": "UW Medicine has a single mission: To Improve the Health of the Public. The 30,000 members of our community advance this mission through the excellence of their work in patient care, medical education and research.\r\n",
//     "fundingString": null,
//     "maxProjectCount": 580,
//     "maxNctCount": 76,
//     "maxPiCount": 116,
//     "maxFunding": 165306202,
//     "maxInterverntionCount": 249,
//     "fullDescrp": "UW Medicine has a single mission: To Improve the Health of the Public. The 30,000 members of our community advance this mission through the excellence of their work in patient care, medical education and research.\r\n\r\nUW Medicine will provide: a care experience for patients and their families that helps them achieve their personal goals for wellness and disease management; an educational environment for health professionals, students and trainees that prepares them for leadership in their professional careers; and a research enterprise for scientists that enables them to advance medical knowledge and clinical innovations with groundbreaking discoveries.",
//     "aiTop": null,
//     "maxPhysicianCount": null,
//     "maxSR": null,
//     "maxAt": null,
//     "maxCE": null,
//     "physiciabCountRadarScore": 1.0,
//     "starSRRank": null,
//     "starATRank": null,
//     "starCERank": null,
//     "division": "Pacific",
//     "name": "UNIVERSITY OF WASHINGTON MEDICAL CENTER",
//     "state": "WA"
//   }
// ];
// Geocode.setApiKey("AIzaSyChLxtQM2oKlrIfboGL3bhw0sQOKTmPsvQ")


// const marks = [
//   {
//     value: 1,
//     label: '-',
//   },
//   {
//     value: 4,
//   },
//   {
//     value: 7,
//   },
//   {
//     value: 10,
//   },
//   {
//     value: 13,
//   },
//   {
//     value: 16,
//     label: '+',
//   },

// ];

// // zoomsize
// const getText = (value) => {
//   return `${value}%`;
// }

// const modifyMockData = async (mockdata) => {
//   for (let i = 0; i < mockdata.length; i++) {
//     await Geocode.fromAddress(mockdata[i]['geoCity']).then(
//       (response) => {
//         // console.log('mockdata.geoCity2', mockdata[i]['geoCity']);
//         const { lat, lng } = response.results[0].geometry.location;
//         console.log('lat, lng ', lat, lng);
//         mockdata[i]['lat'] = lat;
//         mockdata[i]['lon'] = lng;
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   };
// }
// console.log('mockdata', mockdata);

// // const raceArr = Object.keys(raceDict)

// export default function App() {
//   const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           type: prefersDarkMode ? "dark" : "light",
//           primary: cyan,
//           secondary: pink
//         }
//       }),
//     [prefersDarkMode]
//   )
//   // *******************************1
//   const [loading, setLoading] = useState(false);// useState 内部
//   const dkw = useSelector((state) => state.dkw);
//   const topHospitals = useSelector((state) => state.topHospitals); // useSelector 全局
//   const dispatch = useDispatch();

//   const useStylesSelection = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 240,
//       maxWidth: 240,
//     },
//     chips: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     chip: {
//       margin: 2,
//     },
//     noLabel: {
//       marginTop: theme.spacing(3),
//     }
//   }));

//   const reloadTopHospitals = async (kword) => {
//     setLoading(true);
//     const result = await requestTopHospitals(kword);
//     setLoading(false);
//     // sort the topHospList before dispatch
//     dispatch(loadTopHospitals(result.topHospList.sort((a, b) => a.overallRankDisplay * 1 - b.overallRankDisplay * 1)));
//     // save dkw mesh id
//     console.log("result.topHospList",result.topHospList);
//     console.log('result.dkwMeshId',result.dkwMeshId);
//     dispatch(saveDkwMeshId(result.dkwMeshId));
//   };

//   const handleDkwChange = (e) => {
//     if (e.code === 'Enter' || e.code === 'NumpadEnter') {
//       dispatch(saveDkw(e.target.value));
//       reloadTopHospitals(e.target.value);
//     }
//   };

//   useEffect(() => {
//     // console.log('selectIndicator.current.children[1].value', selectIndicator.current.children[1].value);
//     // console.log('selectTopIndicator.current.children[1].value', selectTopIndicator.current.children[1].value);
//     // console.log('selectRegionsIndicator.current.children[1].value', selectRegionsIndicator.current.children[1].value);
//     if (topHospitals.length === 0) {
//       reloadTopHospitals(dkw);
//     }
//   }, []);
//   // *********************************-1
//   const [data, setData] = useState([])
//   const [zoomLevel, setZoomLevel] = useState(4)
//   const [seletectedItem, setSelectedItem] = useState({})
//   // const [displayHospitals, setDisplayHospitals] = useState([]);

//   const [centerCoordinates, setCenterCoordinates] = useState({
//     lat: 39.0722,
//     lng: -76.37
//   })
//   const listRefs = useRef([])
//   listRefs.current = []

//   const scrollToItem = (i) => {
//     listRefs.current[i]?.scrollIntoView({
//       behavior: "smooth"
//     })
//   }

//   const [displayHospitals, setDisplayHospitals] = useState([]);
//   const generateDisplayData = (selectsTopHospiatlCount) => {
//     // select Top/all Hospitals
//     const mockHospitals = mockdata.sort((a, b) => (a.overallRankDisplay * 1 - b.overallRankDisplay * 1)).slice(0, selectsTopHospiatlCount);// 6所医院按照overall 排序
//     // select attribution bar
//     console.log('mockHospitals1', mockHospitals);
//     setDisplayHospitals([...mockHospitals]);
//   };

//   const handleChangeZoom = (event, e) => {
//     console.log("zoomsize", e)
//     setZoomLevel(e);
//   };
//   const handleAddressChange = (e) => {
//     if (e.code === 'Enter' || e.code === 'NumpadEnter') {
//       // dispatch(saveDkw(e.target.value));
//       // changedata(e.target.value)
//       Geocode.fromAddress(e.target.value).then(
//         (response) => {
//           const { lat, lng } = response.results[0].geometry.location;
//           setCenterCoordinates({ lat, lng })
//         }
//       )
//     }
//   };
//   // // tophospial&allhospital handlechange
//   const handleChangeTop = (event) => {
//     generateDisplayData(event.target.value);
//   };

//   useEffect(() => {
//     try {
//       const fetchData = async () => {
//         await modifyMockData(mockdata)
//         return mockdata
//       }

//       fetchData().then((item) => {
//         setData(item)
//       })
//       console.log("team 1 fired.")
//       return () => {
//         setData([])
//       }
//     } catch (err) {
//       console.log(err)
//     }
//   }, [])

//   useEffect(() => {
//     generateDisplayData(mockdata.length);
//   }, [mockdata]);

//   return (
//     <div style={{ width: "100vw", overflow: "hidden" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Grid
//           container
//           spacing={0}
//           style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
//         >
//           <Grid
//             item
//             xs={12}
//             md={4}
//             style={{ height: "100vh", overflow: "auto" }}
//           >
//             <Container maxWidth="xs">
//               {/* <Header headerRef={headerRef} /> */}
//               <Grid
//                 container
//                 spacing={1}
//                 style={{
//                   // marginLeft: '5px',
//                   margintop: '70px',
//                   marginBottom: '40px',
//                   justifyContent: "center",
//                 }}>
//                 <FormControl>
//                   <Box sx={{ pb: 1 }}>
//                     <Typography
//                       color="textPrimary"
//                       variant="h5"
//                       style={{
//                         marginTop: '50px',
//                         marginBottom: '30px',
//                       }}
//                     >
//                       Find Hospital Near you For {dkw}
//                     </Typography>
//                   </Box>
//                   <Box sx={{ pt: 3 }}>
//                     <TextField
//                       fullWidth
//                       label="DKW"
//                       variant="outlined"
//                       defaultValue={dkw.toUpperCase()}
//                       onKeyPress={handleDkwChange}
//                     />
//                     <br />
//                     <br />
//                   </Box>
//                   <Box sx={{ pt: 1 }}>
//                     <TextField
//                       fullWidth
//                       label="Address"
//                       variant="outlined"
//                       defaultValue={mockdata.geoCity}
//                       onKeyPress={handleAddressChange}
//                     />
//                     <br />
//                     <br />
//                   </Box>

//                   <Box sx={{ pt: 1 }}>
//                     <Typography
//                       color="textSecondary"
//                       variant="body1"
//                       style={{
//                         margintop: '10px',
//                       }}
//                     >
//                       Zoomsize
//                     </Typography>
//                     <Box display="flex">
//                       <Slider
//                         fullWidth
//                         style={{ width: 400, marginBottom: '50px', }}
//                         min={1}
//                         max={16}
//                         step={null}
//                         value={zoomLevel}
//                         marks={marks}
//                         onChange={handleChangeZoom}
//                         valueLabelDisplay="auto"
//                         getAriaValueText={getText}
//                       />
//                     </Box>
//                   </Box>
//                   <RadioGroup
//                     aria-labelledby="demo-controlled-radio-buttons-group"
//                     name="controlled-radio-buttons-group"
//                     defaultValue={mockdata.length}
//                     onChange={handleChangeTop}
//                     color="secondary"
//                     style={{ marginBottom: '25px' }}
//                   >
//                     <FormControlLabel value="5" control={<Radio />} label="Top Hospitals" />
//                     <FormControlLabel value={mockdata.length} control={<Radio />} label="All Major Hospitals" />
//                   </RadioGroup>
//                   <Hidden smUp>
//                     <Grid
//                       item
//                       xs={12}
//                       md={8}
//                       style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center"
//                       }}
//                     >
//                       <Map
//                         scrollToItem={scrollToItem}
//                         data={displayHospitals}
//                         zoomLevel={zoomLevel}
//                         centerCoordinates={centerCoordinates}
//                         seletectedItem={seletectedItem}
//                       />
//                     </Grid>
//                   </Hidden>
//                 </FormControl>
//                 <Grid
//                   item
//                   xs={12}
//                   md={12}
//                   fullWidth
//                   style={{
//                     display: "flex",
//                     marginTop: "25px"
//                   }}
//                 >
//                   <div
//                     style={{
//                       marginBottom: '25px',
//                       width: "100%",
//                       display: displayHospitals.length === 0 ? 'none' : 'block'
//                     }}>
//                     <DataTable displayHospitals={displayHospitals} hideFooterPagination height="370px" />
//                   </div>
//                 </Grid>
//               </Grid>
//             </Container>
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             md={8}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center"
//             }}
//           >
//             <Map
//               scrollToItem={scrollToItem}
//               data={displayHospitals}
//               zoomLevel={zoomLevel}
//               centerCoordinates={centerCoordinates}
//               seletectedItem={seletectedItem}
//             />
//           </Grid>
//         </Grid>
//       </ThemeProvider>
//     </div>
//   )
// }
import { useEffect, useState, useRef, useMemo } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { requestTopHospitals } from './api/index';
import pink from "@material-ui/core/colors/pink"
import cyan from "@material-ui/core/colors/cyan"
import { useMediaQuery } from "@material-ui/core"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"
import "./styles.css"
import { Container, Grid, CssBaseline, Box, TextField, Typography, Slider, Hidden } from "@material-ui/core"
import Geocode from "react-geocode"
import Map from "./components/Map"
import DataTable from './components/DataTable';
import { makeStyles } from '@material-ui/core/styles';
import { loadTopHospitals } from './redux/actions/topHospitalsAction';
import { saveDkwMeshId } from './redux/actions/dkwMeshIdAction';
import { saveDkw } from './redux/actions/dkwAction';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

Geocode.setApiKey("AIzaSyChLxtQM2oKlrIfboGL3bhw0sQOKTmPsvQ")


const marks = [
  {
    value: 1,
    label: '-',
  },
  {
    value: 4,
  },
  {
    value: 7,
  },
  {
    value: 10,
  },
  {
    value: 13,
  },
  {
    value: 16,
    label: '+',
  },

];

// zoomsize
const getText = (value) => {
  return `${value}%`;
}

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          primary: cyan,
          secondary: pink
        }
      }),
    [prefersDarkMode]
  )

  const [loading, setLoading] = useState(false);// useState 内部
  const dkw = useSelector((state) => state.dkw);
  const topHospitals = useSelector((state) => state.topHospitals); // useSelector 全局
  const dispatch = useDispatch();
  const [displayHospitals, setDisplayHospitals] = useState([]);
  const [data, setData] = useState([])
  const [zoomLevel, setZoomLevel] = useState(4)
  const [seletectedItem, setSelectedItem] = useState({})
  // const [displayHospitals, setDisplayHospitals] = useState([]);

  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: 39.0722,
    lng: -76.38
  })
  const listRefs = useRef([])
  listRefs.current = []

  const scrollToItem = (i) => {
    listRefs.current[i]?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const reloadTopHospitals = async (kword) => {
    setLoading(true);
    const result = await requestTopHospitals(kword);
    setLoading(false);
    // sort the topHospList before dispatch
    dispatch(loadTopHospitals(result.topHospList.sort((a, b) => a.overallRankDisplay * 1 - b.overallRankDisplay * 1)));
    // save dkw mesh id
    console.log("result.topHospList",result.topHospList);
    console.log('result.dkwMeshId',result.dkwMeshId);
    dispatch(saveDkwMeshId(result.dkwMeshId));
  };

  const handleDkwChange = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      dispatch(saveDkw(e.target.value));
      reloadTopHospitals(e.target.value);
    }
  };

  const modifyMockData = async (topHospitals) => {
    for (let i = 0; i < topHospitals.length; i++) {
      await Geocode.fromAddress(topHospitals[i]['geoCity']).then(
        (response) => {
          // console.log('mockdata.geoCity2', mockdata[i]['geoCity']);
          const { lat, lng } = response.results[0].geometry.location;
          console.log('lat, lng ', lat, lng);
          topHospitals[i]['lat'] = lat;
          topHospitals[i]['lon'] = lng;
        },
        (error) => {
          console.error(error);
        }
      );
    };
  }
  console.log('topHospitals', topHospitals);

  const generateDisplayData = (selectsTopHospiatlCount) => {
    // select Top/all Hospitals
    const mockHospitals = topHospitals.sort((a, b) => (a.overallRankDisplay * 1 - b.overallRankDisplay * 1)).slice(0, selectsTopHospiatlCount);// 6所医院按照overall 排序
    // select attribution bar
    console.log('mockHospitals', mockHospitals);
    setDisplayHospitals([...mockHospitals]);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        await modifyMockData(topHospitals)
        return topHospitals
      }
      fetchData().then((item) => {
        setData(item)
      })
      console.log("team 1 fired.")
      return () => {
        setData([])
      }
    } catch (err) {
      console.log(err)
    }
  }, [])


  useEffect(() => {
    // console.log('selectIndicator.current.children[1].value', selectIndicator.current.children[1].value);
    // console.log('selectTopIndicator.current.children[1].value', selectTopIndicator.current.children[1].value);
    // console.log('selectRegionsIndicator.current.children[1].value', selectRegionsIndicator.current.children[1].value);
    if (topHospitals.length === 0) {
      reloadTopHospitals(dkw);
    }
  }, []);


  useEffect(() => {
    generateDisplayData(topHospitals.length);
  }, [topHospitals]);

  const handleChangeZoom = (event, e) => {
    console.log("zoomsize", e)
    setZoomLevel(e);
  };
  const handleAddressChange = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      Geocode.fromAddress(e.target.value).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCenterCoordinates({ lat, lng })
        }
      )
    }
  };
  // // tophospial&allhospital handlechange
  const handleChangeTop = (event) => {
    generateDisplayData(event.target.value);
  };

return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        >
          <Grid
            item
            xs={12}
            md={4}
            style={{ height: "100vh", overflow: "auto" }}
          >
            <Container maxWidth="xs">
              {/* <Header headerRef={headerRef} /> */}
              <Grid
                container
                spacing={1}
                style={{
                  // marginLeft: '5px',
                  margintop: '70px',
                  marginBottom: '40px',
                  justifyContent: "center",
                }}>
                <FormControl>
                  <Box sx={{ pb: 1 }}>
                    <Typography
                      color="textPrimary"
                      variant="h5"
                      style={{
                        marginTop: '50px',
                        marginBottom: '30px',
                      }}
                    >
                      Find Hospital Near you for {dkw}
                    </Typography>
                  </Box>
                  <Box sx={{ pt: 3 }}>
                    <TextField
                      fullWidth
                      label="DKW"
                      variant="outlined"
                      defaultValue={dkw.toUpperCase()}
                      onKeyPress={handleDkwChange}
                    />
                    <br />
                    <br />
                  </Box>
                  <Box sx={{ pt: 1 }}>
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      defaultValue={topHospitals.geoCity}
                      onKeyPress={handleAddressChange}
                    />
                    <br />
                    <br />
                  </Box>

                  <Box sx={{ pt: 1 }}>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                      style={{
                        margintop: '10px',
                      }}
                    >
                      Zoomsize
                    </Typography>
                    <Box display="flex">
                      <Slider
                        fullWidth
                        style={{ width: 400, marginBottom: '50px', }}
                        min={1}
                        max={16}
                        step={null}
                        value={zoomLevel}
                        marks={marks}
                        onChange={handleChangeZoom}
                        valueLabelDisplay="auto"
                        getAriaValueText={getText}
                      />
                    </Box>
                  </Box>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    defaultValue={topHospitals.length}
                    onChange={handleChangeTop}
                    color="secondary"
                    style={{ marginBottom: '25px' }}
                  >
                    <FormControlLabel value="5" control={<Radio />} label="Top Hospitals" />
                    <FormControlLabel value={topHospitals.length} control={<Radio />} label="All Major Hospitals" />
                  </RadioGroup>
                  <Hidden smUp>
                    <Grid
                      item
                      xs={12}
                      md={8}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Map
                        scrollToItem={scrollToItem}
                        data={displayHospitals}
                        zoomLevel={zoomLevel}
                        centerCoordinates={centerCoordinates}
                        seletectedItem={seletectedItem}
                      />
                    </Grid>
                  </Hidden>
                </FormControl>
                <Grid
                  item
                  xs={12}
                  md={12}
                  fullWidth
                  style={{
                    display: "flex",
                    marginTop: "25px"
                  }}
                >
                  <div
                    style={{
                      marginBottom: '25px',
                      width: "100%",
                      display: displayHospitals.length === 0 ? 'none' : 'block'
                    }}>
                    <DataTable displayHospitals={displayHospitals} hideFooterPagination height="370px" />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Map
              scrollToItem={scrollToItem}
              data={displayHospitals}
              zoomLevel={zoomLevel}
              centerCoordinates={centerCoordinates}
              seletectedItem={seletectedItem}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  )
}

