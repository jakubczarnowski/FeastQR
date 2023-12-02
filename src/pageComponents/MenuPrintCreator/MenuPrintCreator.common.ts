import Cookies from "js-cookie";
import { type PrintCreatorFormValues } from "./MenuPrintCreator.schema";

export const pdfGenerationValuesCookieName = "pdfGenerationValues";

export const saveFormValuesToCookies = (formValues: PrintCreatorFormValues) => {
  const formValuesString = JSON.stringify(formValues);

  Cookies.set(pdfGenerationValuesCookieName, formValuesString, {
    expires: 365,
  });
};
