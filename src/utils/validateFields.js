export const validateFields = (
  firstname,
  lastname,
  message,
  email,
  check,
  type,
  setErrors
) => {
  const messageError = "The Field is required";
  const newErrors = {};
  if (!firstname) newErrors.firstname = messageError;
  if (!lastname) newErrors.lastname = messageError;
  if (!email) newErrors.email = "Please enter a valid email adress";
  if (!message) newErrors.message = messageError;
  if (!check)
    newErrors.check = "To submit this form, please consent to being contacted";
  if (!type) newErrors.type = "Pleasse select a query type";
  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
