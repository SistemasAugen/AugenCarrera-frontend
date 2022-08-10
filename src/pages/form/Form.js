import React from 'react';

import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";

import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

import useStyles from './Form.styles.ts';
import textfieldsValues from './textfieldsValues';
import logoAugen from "../../imgs/logoAugen.png";
import logoCarrera from "../../imgs/logoCarrera.svg.png";

import { useFormControls } from './FormControls.tsx';

const Form = () => {
  const classes = useStyles({});

  const Divider = ({ color }) => (
    <hr
      style={{
        borderColor: color,
      }}
    />
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
        contrastText: grey[50],
      }
    }
  });

  // validations
  const {
    handleInputValue,
    formIsValid,
    errors,
    successToast,
  } = useFormControls();

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

  return (
    <div className={classes.parent}>
      {/* id="print" */}
      <div id="print" className={classes.container}>
        <Box>
          <Grid item container>
            <Grid xs={6} item className={[classes.color1, classes.headerLogos].join(" ")}>
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
          return (
            <div>
              <Grid item className={classes.containerTitle}>
                <Typography variant="h5">{sectionConfig.title}</Typography>
              </Grid>
              <div className={classes.containerFields}>
                {sectionConfig.fields.map(field => (
                  <div className={classes.content}>
                    <Typography className={classes.title} variant="subtitle1">
                      {field.label}
                    </Typography>
                    <TextField
                      required
                      onChange={handleInputValue}
                      onBlur={handleInputValue}
                      name={field.name}
                      style={{ width: field.width }}
                      error={!!errors[field.name]}
                      autoComplete="none"
                      {... (errors[field.name] && {
                        error: true,
                        helperText: errors[field.name]
                      })}
                    />
                    <br />
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
            disabled={!formIsValid()}
          >
            Solicitar Rx
          </Button>
          <Button
            variant="contained"
          >
            Guardar
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Form;

