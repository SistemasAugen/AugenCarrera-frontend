import { useState } from "react";
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";

const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any
) => {
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  rx: "",
  fecha: "",
  cliente: "",
  od_esfera: "",
  od_cilindro: "",
  od_eje: "",
  od_adicion: "",
  od_dip: "",
  od_altura: "",
  oi_esfera: "",
  oi_cilindro: "",
  oi_eje: "",
  oi_adicion: "",
  oi_dip: "",
  oi_altura: "",
  diseno: "",
  material: "",
  tipo_ar: "",
  tallado: "",
  servicios: "",
  tipo_de_armazon: "",
  horizontal_a: "",
  vertical_b: "",
  diagonal_ed: "",
  puente: "",
  observaciones: "",
  formSubmitted: false,
  success: false
};

if (typeof window !== "undefined") {
  injectStyle();
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    const temp: any = { ...errors };

    if ("rx" in fieldValues)
      temp.rx = fieldValues.rx ? "" : "Ingresa una rx.";

    if ("fecha" in fieldValues)
      temp.fecha = fieldValues.fecha ? "" : "Ingresa la fecha.";

    if ("cliente" in fieldValues)
      temp.cliente = fieldValues.cliente ? "" : "Ingresa un cliente.";

    if ("od_esfera" in fieldValues)
      temp.od_esfera = fieldValues.od_esfera ? "" : "Ingresa od_esfera.";

    if ("od_cilindro" in fieldValues)
      temp.od_cilindro = fieldValues.od_cilindro ? "" : "Ingresa od_cilindro.";

    if ("od_eje" in fieldValues)
      temp.od_eje = fieldValues.od_eje ? "" : "Ingresa od_eje.";

    if ("od_adicion" in fieldValues)
      temp.od_adicion = fieldValues.od_adicion ? "" : "Ingresa od_adicion.";

    if ("od_dip" in fieldValues)
      temp.od_dip = fieldValues.od_dip ? "" : "Ingresa od_dip.";

    if ("od_altura" in fieldValues)
      temp.od_altura = fieldValues.od_altura ? "" : "Ingresa od_alturaaaa.";

    if ("oi_esfera" in fieldValues)
      temp.oi_esfera = fieldValues.oi_esfera ? "" : "Ingresa oi_esfera.";

    if ("oi_cilindro" in fieldValues)
      temp.oi_cilindro = fieldValues.oi_cilindro ? "" : "Ingresa oi_cilindro.";

    if ("oi_eje" in fieldValues)
      temp.oi_eje = fieldValues.oi_eje ? "" : "Ingresa oi_eje.";

    if ("oi_adicion" in fieldValues)
      temp.oi_adicion = fieldValues.oi_adicion ? "" : "Ingresa oi_adicion.";

    if ("oi_dip" in fieldValues)
      temp.oi_dip = fieldValues.oi_dip ? "" : "Ingresa oi_dip.";

    if ("oi_altura" in fieldValues)
      temp.oi_altura = fieldValues.oi_altura ? "" : "Ingresa oi_altura.";

    if ("diseno" in fieldValues)
      temp.diseno = fieldValues.diseno ? "" : "Ingresa diseño.";

    if ("material" in fieldValues)
      temp.material = fieldValues.material ? "" : "Ingresa material.";

    if ("tipo_ar" in fieldValues)
      temp.tipo_ar = fieldValues.tipo_ar ? "" : "Ingresa tipo_ar.";

    if ("tallado" in fieldValues)
      temp.tallado = fieldValues.tallado ? "" : "Ingresa tallado.";

    if ("servicios" in fieldValues)
      temp.servicios = fieldValues.servicios ? "" : "Ingresa servicios.";

    if ("tipo_de_armazon" in fieldValues)
      temp.tipo_de_armazon = fieldValues.tipo_de_armazon ? "" : "Ingresa tipo_de_armazon.";

    if ("horizontal_a" in fieldValues)
      temp.horizontal_a = fieldValues.horizontal_a ? "" : "Ingresa horizontal_a.";

    if ("vertical_b" in fieldValues)
      temp.vertical_b = fieldValues.vertical_b ? "" : "Ingresa vertical_b.";

    if ("diagonal_ed" in fieldValues)
      temp.diagonal_ed = fieldValues.diagonal_ed ? "" : "Ingresa diagonal_ed.";

    if ("puente" in fieldValues)
      temp.puente = fieldValues.puente ? "" : "Ingresa puente.";

    if ("observaciones" in fieldValues)
      temp.observaciones = fieldValues.observaciones ? "" : "Ingresa observaciones.";

    setErrors({
      ...temp
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const successToast = () => {
    toast.success('Pdf generado correctamente!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.rx &&
      fieldValues.fecha &&
      fieldValues.cliente &&
      fieldValues.od_esfera &&
      fieldValues.od_cilindro &&
      fieldValues.od_eje &&
      fieldValues.od_adicion &&
      fieldValues.od_dip &&
      fieldValues.od_altura &&
      fieldValues.oi_esfera &&
      fieldValues.oi_cilindro &&
      fieldValues.oi_eje &&
      fieldValues.oi_adicion &&
      fieldValues.oi_dip &&
      fieldValues.oi_altura &&
      fieldValues.diseno &&
      fieldValues.material &&
      fieldValues.tipo_ar &&
      fieldValues.tallado &&
      fieldValues.servicios &&
      fieldValues.tipo_de_armazon &&
      fieldValues.horizontal_a &&
      fieldValues.vertical_b &&
      fieldValues.diagonal_ed &&
      fieldValues.puente &&
      fieldValues.observaciones &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    successToast
  };
};
