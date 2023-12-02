import { type Resources } from "../types";

const messages: Resources["common"] = {
  login: {
    title: "Log in",
    emailLabel: "Email",
    passwordLabel: "Password",
    submitButton: "Log in",
    forgotPasswordButton: "Forgot your password?",
    registerButton: "Register",
  },
  register: {
    title: "Register",
    emailLabel: "Email",
    passwordLabel: "Password",
    passwordConfirmLabel: "Confirm password",
    submitButton: "Register",
    loginButton: "Log in",
    passwordSpecialCharacterValidation:
      "Password must contain a special character",
    passwordLengthValidation: "Password must be at least 8 characters long",
    passwordUppercaseValidation: "Password must contain an uppercase letter",
    passwordLowercaseValidation: "Password must contain a lowercase letter",
    passwordConfirmationValidation: "Passwords must match",
  },
  commonValidation: {
    required: "This field is required",
    email: "This field must be a valid email address",
    passwordConfirm: "Passwords must match",
  },
  common: {
    backButton: "Back",
  },
};

export default messages;
