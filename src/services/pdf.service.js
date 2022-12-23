import axios from "axios";
import CONSTANTS from "../Constants.json";

export const SendPdf = (pdf) => {
  return axios.post(`${CONSTANTS.REQUEST_URL}/documents/rx`, pdf, {headers: {
    'Content-Type': 'multipart/form-data'
  }} );
}