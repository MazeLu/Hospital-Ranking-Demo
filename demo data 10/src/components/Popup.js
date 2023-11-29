// import React from "react"
// import capitalise from "lodash.capitalize"

// import { ListDetail } from "./ListDetail"

// function Popup({ popupInfo, setPopupInfo }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: 40,
//         right: 40,
//         padding: 20,
//         maxWidth: "20%",
//         minWidth: "20%",
//         color: "#333",
//         backgroundColor: "rgba(255,255,255,0.8)",
//         borderRadius: 10,
//         zIndex: 20000
//       }}
//       // onClose={() => setPopupInfo(false)}
//     >
//       <div style={{ marginRight: 10 }}>
//         {new Date(popupInfo.date_occ).toLocaleDateString()}
//       </div>
//       <div style={{ fontWeight: "bold", whiteSpace: "pre-wrap" }}>
//         {capitalise(popupInfo.crm_cd_desc)}
//       </div>
//       <br />
//       <ListDetail item={popupInfo} />
//     </div>
//   )
// }

// export default Popup

import React from "react";
import { useState } from 'react';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Grid,
  Container,
  Typography,
  styled,
  Chip,
  Paper,
  Divider,
  // Button
} from '@material-ui/core';
import capitalise from "lodash.capitalize"

import { ListDetail } from "./ListDetail"

const Popup = (props) => {
  const {
    displayHospitals, setDisplayHospitals
  } = props;
  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        right: 40,
        padding: 20,
        maxWidth: "20%",
        minWidth: "20%",
        color: "#333",
        backgroundColor: "rgba(255,255,255,0.8)",
        borderRadius: 10,
        zIndex: 20000
      }}
    onClose={() => setPopupInfo(false)}
    >
      {/* <div style={{ marginRight: 10 }}>
        {new Date(popupInfo.date_occ).toLocaleDateString()}
      </div>
      <div style={{ fontWeight: "bold", whiteSpace: "pre-wrap" }}>
        {capitalise(popupInfo.crm_cd_desc)}
      </div> */}
      <br />
      <Container maxWidth={true}>
        <Grid container pb={1}>
          <Grid>
            <br />
            <Typography
              variant="body1"
            >
              {displayHospitals.name}
            </Typography>
            <br />
            <Typography
              variant="body1"
              marginTop="20px"
            >
              {displayHospitals.city},{displayHospitals.state}
            </Typography>
            <br />
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default Popup;
