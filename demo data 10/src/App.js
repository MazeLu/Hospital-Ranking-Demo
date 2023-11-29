
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
import { loadTopHospitals } from './redux/actions/topHospitalsAction';
import { saveDkwMeshId } from './redux/actions/dkwMeshIdAction';
import { saveDkw } from './redux/actions/dkwAction';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

// // Geocode.setApiKey("AIzaSyChLxtQM2oKlrIfboGL3bhw0sQOKTmPsvQ")
Geocode.setApiKey("AIzaSyAnb3UXseHgpq1V62ydRA7A2-4lusU7slg")

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

  // const modifyMockData = async (topHospitals) => {
  //   for (let i = 0; i < topHospitals.length; i++) {
  //     await Geocode.fromAddress(topHospitals[i]['geoCity']).then(
  //       (response) => {
  //         // console.log('mockdata.geoCity2', mockdata[i]['geoCity']);
  //         const { lat, lng } = response.results[0].geometry.location;
  //         console.log('lat, lng ', lat, lng);
  //         topHospitals[i]['lat'] = lat;
  //         topHospitals[i]['lon'] = lng;
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  //   };
  // }

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
  // console.log('topHospitals1', topHospitals);
  // console.log('modifyMockData(topHospitals)', modifyMockData(topHospitals));
  // console.log('topHospitals2', topHospitals);


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

  const generateDisplayData = (selectsTopHospiatlCount) => {
    // select Top/all Hospitals
    let slicecnt = selectsTopHospiatlCount === "all" ? topHospitals.length : selectsTopHospiatlCount;
    const mockHospitals = topHospitals.sort((a, b) => (a.overallRankDisplay * 1 - b.overallRankDisplay * 1)).slice(0, slicecnt);// 6所医院按照overall 排序
    // select attribution bar
    console.log('mockHospitals', mockHospitals);
    setDisplayHospitals([...mockHospitals]);
  };

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
      console.log(e.target.value)
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
                      Find Hospital Near You for {dkw}
                    </Typography>
                  </Box>
                  {/* <Box sx={{ pt: 3 }}>
                    <TextField
                      fullWidth
                      label="DKW"
                      variant="outlined"
                      defaultValue={dkw.toUpperCase()}
                      onKeyPress={handleDkwChange}
                    />
                    <br />
                    <br />
                  </Box> */}
                  <Box sx={{ pt: 1 }}>
                    <TextField
                      fullWidth
                      label="You Address"
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
                  <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    defaultValue="all"
                    onChange={handleChangeTop}
                    color="secondary"
                    style={{ marginBottom: '25px' }}
                  >
                    <FormControlLabel value="5" control={<Radio />} label="Top Hospitals" />
                    <FormControlLabel value="all" control={<Radio />} label="All Major Hospitals" />
                  </RadioGroup>
                  </FormControl>
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

