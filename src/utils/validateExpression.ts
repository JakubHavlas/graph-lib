import validateChars from "./ValidateChars";
import validateSyntax
 from "./ValidateSynntax";
import ParseExpression from "./NewParseExpression";


 function validateExpression(
  input: string,

): { valid: boolean; message?: string; } {
 let a = ParseExpression(input);
 let b = validateChars(a);
  let c = validateSyntax(a);

  if (!c && !b){
    return {
      valid: false,
      message: "Invalid characters and syntax in expression",
    };
  }

  if (!b) {
    return {
      valid: false,
      message: "Invalid characters in expression",
    };
  }
  if (!c) {
    return {
      valid: false,
      message: "Invalid syntax in expression",
    };
  }



  return {
    valid: true,
    message: "Valid expression",
   
  }
}
export default validateExpression;