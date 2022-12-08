import React, { useContext, useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import html2canvas from "html2canvas";
import pdfMake from "pdfmake/build/pdfmake";

import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import axios from "axios";

import useStyles from './Form.styles.ts';
import textfieldsValues, { InputTypes } from './textfieldsValues';
import logoAugen from "../../imgs/logoAugen.png";
import logoCarrera from "../../imgs/logoCarrera.svg.png";
import Pdf from './pdf/Pdf';

import { DataContext } from './DataContext.tsx';

const Form = () => {

  const [get, setGet] = useState([]);

  useEffect(() => {

    const obtenerUsers = async () => {
      const url = 'http://localhost:3000/users/2505?select=user.id,user.name,branch.name,laboratory.name,facturation.rfc';
      const result = await axios.get(url);

      console.log('data', result.data);

      setGet(result.data);

    }
    // obtenerUsers();
  }, [])

  const [showPdf, setShowPdf] = useState(false);

  // validations
  const {
    handleInputValue,
    formIsValid,
    errors,
  } = useContext(DataContext);

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

  const printToPdf = () => {
    setShowPdf(true);
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
    });
  };

  if (showPdf) {
    return (
      <div className={classes.parent}>
        <Pdf />
      </div>
    )
  } return (
    <>
      <div className={classes.parent}>
        <div className={classes.container}>
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
            return (
              <div key={sectionConfig.title}>
                <Grid item className={classes.containerTitle}>
                  <Typography variant="h5">{sectionConfig.title}</Typography>
                </Grid>
                <div className={classes.containerFields}>
                  {sectionConfig.fields.map(field => {
                    if (field.type === InputTypes.AUTOCOMPLETE) {
                      return (
                        <div className={classes.autocompleteContent} key={field.id}>
                          <Typography className={classes.title} variant="subtitle1">
                            {field.label}
                          </Typography>
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={field.options}
                            onChange={(e, newValue) => handleInputValue(e, { name: field.name, value: newValue})}
                            name={field.name}
                            sx={{ width: field.width, minHeight: "77px" }}
                            renderInput={(params) =>
                            <TextField
                              {...params}
                              label={field.label}
                            />
                            }
                          />
                        </div>
                      )
                    }
                    return (
                      <div className={classes.content} key={field.id}>
                        <Typography className={classes.title} variant="subtitle1">
                          {field.label}
                        </Typography>
                        <TextField
                          required
                          onChange={handleInputValue}
                          onBlur={handleInputValue}
                          name={field.name}
                          type={field.type || "text"}
                          style={{ width: field.width, minHeight: "77px" }}
                          error={!!errors[field.name]}
                          {... (errors[field.name] && {
                            error: true,
                            helperText: errors[field.name]
                          })}
                        />
                        <br />
                      </div>
                    )
                  })}
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
              Solicitar RX
            </Button>
          </div>
        </ThemeProvider>
      </div>

    </>
  );
}

export default Form;

