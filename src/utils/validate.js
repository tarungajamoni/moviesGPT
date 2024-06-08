export const validate = (name, email, password) => {
  const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const validateName =/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(name) ;

  if (!validateEmail) return "Email is not valid";
  if (!validatePassword) return "Password is not valid";
  if (!validateName) return "Name is not validate";

  return null;
};
