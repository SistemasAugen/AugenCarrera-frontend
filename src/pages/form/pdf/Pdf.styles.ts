import { grey, red } from "@mui/material/colors";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  primaryColor: {

  },
  secondaryColor: {
    color: grey[500],
  },
  padding: {
    padding: 0,
  },
  parent: {
    display: "grid",
    placeItems: "center",
  },
  container: {
    padding: '2rem',
    borderRadius: '10px 10px 0 0',
    background: 'white',
    textAlign: 'center',
    maxWidth: "880px",
    width: '80%',
  },
  containerFields: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: '10px',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    marginRight: '10px',
    height: "auto", /* pendiente */
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    display: "flex",
    justifyContent: "start",
    textAlign: "center",
    marginTop: "5px",
    marginBottom: '20px',
    height: '1rem'
  },
  containerButtons: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "white",
    width: "78%",
    height: "50px",
    borderRadius: '0 0 10px 10px',
  },
  headerLogos: {
    display: "flex",
    textAlign: 'center',
    padding: '10px',
    placeItems: 'center',
    flexWrap: 'wrap'
  },
  headerTextTitle: {
    display: "flex",
    padding: '10px',
    fontSize: '27px',
    justifyContent: 'end'
  },
  headerText: {
    display: "flex",
    fontSize: '19px',
    padding: '10px',
    justifyContent: 'end'
  },
  containerTitle: {
    fontSize: '16px',
    display: "flex",
    color: red[600],
    marginTop: "10px",
    justifyContent: 'start'
  },
  verticalLine: {
    borderLeft: '2px solid black',
    height: '30px',
    padding: '5px'
  },
  horizontalLine: {
    borderLeft: '2px solid red',
    width: '100%',
    height: '1px',
    padding: '5px'
  },
  pointLine: {
    borderStyle: "none dotted dotted none"
  },
  noRightLine: {
    borderRightStyle: "none",
  },
  noBorderLines: {
    borderStyle: "none"
  }
}));

export default useStyles;
