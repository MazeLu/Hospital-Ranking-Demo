import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(15),
//     color: theme.palette.text.secondary,
//   },
//   icon: {
//     verticalAlign: 'bottom',
//     height: 20,
//     width: 20,
//   },
//   details: {
//     alignItems: 'center',
//   },
//   column: {
//     flexBasis: '33.33%',
//   },
//   helper: {
//     borderLeft: `2px solid ${theme.palette.divider}`,
//     padding: theme.spacing(1, 2),
//   },
//   link: {
//     color: theme.palette.primary.main,
//     textDecoration: 'none',
//     '&:hover': {
//       textDecoration: 'underline',
//     },
//   },
// }));

const TopHospitalsList = (props) => {
  const {
    displayHospitals
  } = props; // +prop, topHospitals => displayhospital
  const [selectedHospIds, setSelectedHospIds] = useState([]);

  const style = {
    display: 'flex',
    justifyContent: 'center'
  };

  return (
    <>
      <Card>
        <Box sx={{ pt: 2 }}>
          <Table size="small" >
            <TableBody>
              {(displayHospitals).map((hosp) => (
                <TableRow
                  key={hosp.lmID}
                >
                  {/* <TableCell padding="checkbox"> */}
                  <Container maxWidth={true}>
                    <Grid container pb={1}>
                      <Grid>
                        <br/>
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {hosp.name}
                        </Typography>
                        <br/>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                          marginTop="20px"
                        >
                          {hosp.city},{hosp.state}
                        </Typography>
                        <br/>
                      </Grid>
                    </Grid>
                  </Container>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>
  );
};
export default TopHospitalsList;
