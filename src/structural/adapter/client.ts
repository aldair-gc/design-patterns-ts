// import { EmailValidatorFnProtocol, EmailValidatorProtocol } from "./validation/email-validator-protocol";
import { EmailValidatorClassAdapter } from "./validation/email-validator-class-adapter";
import { emailValidatorFnAdapter } from "./validation/email-validator-fn-adapter";

// function validaEmailClass(emailValidator: EmailValidatorProtocol, email: string): void {
//   console.log("class:");
//   if (emailValidator.isEmail(email)) {
//     console.log("valid email");
//   } else {
//     console.log("invalid email");
//   }
// }

function validaEmailClass(email: string): void {
  console.log("class:");
  const emailValidator = new EmailValidatorClassAdapter();
  if (emailValidator.isEmail(email)) {
    console.log("valid email");
  } else {
    console.log("invalid email");
  }
}

// function validaEmailFn(emailValidator: EmailValidatorFnProtocol, email: string): void {
//   console.log("fn:");
//   if (emailValidator(email)) {
//     console.log("valid email");
//   } else {
//     console.log("invalid email");
//   }
// }

function validaEmailFn(email: string): void {
  console.log("fn:");
  if (emailValidatorFnAdapter(email)) {
    console.log("valid email");
  } else {
    console.log("invalid email");
  }
}

const email = "aldairlg@gmail.com";
// validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailClass(email);
// validaEmailFn(emailValidatorFnAdapter, email);
validaEmailFn(email);

// I changed the class and function to make the call simpler by including the call to the adapter inside them instead of in their execution call
