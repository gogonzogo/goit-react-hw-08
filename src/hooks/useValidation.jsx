import { useSelector } from 'react-redux';
import {
  getValidationReqs,
  getFormData,
  getFormDataEmail,
  getFormDataName,
  getFormDataPassword,
  getFormDataPassword2,
} from 'redux/validation/validationSelectors';

export const useValidation = () => {
  const validationReqs = useSelector(getValidationReqs);
  const formData = useSelector(getFormData);
  const formDataEmail = useSelector(getFormDataEmail);
  const formDataName = useSelector(getFormDataName);
  const formDataPassword = useSelector(getFormDataPassword);
  const formDataPassword2 = useSelector(getFormDataPassword2);

  return {
    validationReqs,
    formData,
    formDataEmail,
    formDataName,
    formDataPassword,
    formDataPassword2,
  };
}
