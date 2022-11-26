import React, { useState, useEffect, useRef, useContext } from 'react';

import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";

import { Button, Box, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import useStyles from './Pdf.styles.ts';

import logoAugen from "../../../imgs/logoAugen.png";
import logoCarrera from "../../../imgs/logoCarrera.svg.png";

import textfieldsValues from '../textfieldsValues';
import { DataContext, initialFormValues } from '../DataContext.tsx';

const Divider = ({ color }) => (
  <hr
    style={{
      borderColor: color,
    }}
  />
);

// const Login = () => {
//   const baseURL = "http://localhost:3000/users";
//   const id = 2505;

//   const [get, setGet] = useState(null);
//   useEffect(() => {
//     axios.get(`${baseURL}/${id}/?select=user.id`).then((response) => {
//       console.log(response.data);
//       setGet(response.data);
//     });
//   }, []);

//   if (!get) return null;

//   return (
//     <>
//       <h1>{get.title}</h1>
//       <p>{get.body}</p>
//     </>
//   )
// }

const Pdf = () => {

  const debounce = useRef();
  const [formValues, setFormValues] = useState(initialFormValues);

  const classes = useStyles({});

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
        contrastText: grey[50],
      }
    }
  });

  const {
    values,
  } = useContext(DataContext);

  useEffect(() => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      setFormValues(values)
    }, 500);
  }, [values]);

  const printToPdf = () => {
    html2canvas(document.getElementById("print")).then(canva => {
      const data = canva.toDataURL()
      const pdfExportSettings = {
        content: [
          {
            image: data,
            width: 500
          }
        ]
      };
      pdfMake.createPdf(pdfExportSettings).download("RX.pdf");
    })
  };

  // email
  // const sendEmail = (event) => {
  //   event.preventDefault();
  //   emailjs.sendForm('', '', event.target, '',)
  //     .then(response => console.log('success'), response.status, response.text)
  //     .catch(error => console.log('error', error));
  // }

  function shoulShowBorderLine(sectionConfigLength, index) {
    return sectionConfigLength-1 === index || ((sectionConfigLength/2)-1) === index
  }

  return (
    <>
      <div id="print" className={classes.container}>
        <Box>
          <Grid item container>
            <Grid xs={6} item className={classes.headerLogos}>
              <Box
                component="img"
                sx={{
                  height: '1.5rem',
                  width: '7rem',
                  marginRight: 5,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="logoCarrera."
                src={logoCarrera}
              />
              <div className={classes.verticalLine} />
              <Box
                component="img"
                sx={{
                  height: '1.5rem',
                  width: '7rem',
                  marginLeft: 2,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="logoAugen."
                src={logoAugen}
              />
            </Grid>
            <Grid item xs={6} className={classes.color2}>
              <h2 className={classes.headerTextTitle}>PDV San Luis Potosí</h2>
            </Grid>
            <Grid item xs={6} className={classes.color3} />
            <Grid item xs={6} className={classes.color4}>
              <h2 className={classes.headerText}>E N S E N A D A</h2>
            </Grid>
          </Grid>
        </Box>
        <div>
          <Divider color="red" />
        </div>
        {textfieldsValues.map(sectionConfig => {
          if(sectionConfig.id === "headers"){
            return (
              sectionConfig.fields.map(field => (
                <div style={{ display: "flex", textAlign: "center"}}>
                <Typography className={classes.containerTitle} style={{ fontSize: "24px"}} variant="h5">
                  { field.label }:
                </Typography>
                <Typography className={classes.title} style={{ color: "black", marginBottom: "0", marginTop: "15px", marginLeft: "10px"}} variant="h5"> {formValues[field.name]}</Typography>
                <br />
                </div>
              ))
            )
          }
          return (
            <div>
              <br />
              <br />
              <Grid item className={classes.containerTitle}>
                <Typography variant="h5">{sectionConfig.pdfTitle}</Typography>
              </Grid>
              <br />
              <div className={classes.containerFields}>
                {sectionConfig.fields.map((field, index) => (
                  <div
                    style={{ width: field.pdfWidth }}
                    className={[classes.content, classes.pointLine, classes[field.pdfClass], classes[`${ shoulShowBorderLine(sectionConfig.fields.length, index) && "noRightLine"}`]].join(" ")}
                  >
                    <Typography className={classes.title} variant="subtitle2">
                      {field.label}:
                    </Typography>
                    <div className={[classes.title].join(" ")}>
                      <Typography>{formValues[field.name]}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <ThemeProvider theme={theme}>
        <div className={classes.containerButtons}>
          <Button
            type="submit"
            variant="contained"
            onClick={printToPdf}
          >
            Imprimir
          </Button>
        </div>
      </ThemeProvider>
    </>

  )
}

export default Pdf;